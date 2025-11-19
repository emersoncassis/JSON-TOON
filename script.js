// script.js

// Helper: infer type of a value (primitive only)
function inferType(value) {
    const type = typeof value;
    if (type === "string") return "str";
    if (type === "number") return Number.isInteger(value) ? "int" : "float";
    if (type === "boolean") return "bool";
    if (value === null) return "null";
    return "unknown"; // objects/arrays handled elsewhere
}

// Convert JSON data to TOON format (generic handling for any JSON type)
function jsonToToon(jsonData) {
    // Normalize to an array of items
    let items = [];
    if (Array.isArray(jsonData)) {
        items = jsonData;
    } else if (jsonData && typeof jsonData === "object") {
        items = [jsonData];
    } else {
        items = [jsonData]; // primitive
    }

    // Build schema based on first item
    const firstItem = items[0];
    let schema = "";
    if (firstItem && typeof firstItem === "object" && !Array.isArray(firstItem)) {
        const fields = Object.keys(firstItem);
        const types = fields.map(f => inferType(firstItem[f]));
        schema = fields.map((f, i) => `${f}:${types[i]}`).join(" ");
    } else {
        schema = `value:${inferType(firstItem)}`;
    }

    const output = [];
    output.push("# TOON v2 - gerado de JSON");
    output.push(`schema: ${schema}`);
    output.push(`data[${items.length}]:`);

    items.forEach(item => {
        if (item && typeof item === "object" && !Array.isArray(item)) {
            const fields = Object.keys(item);
            const row = fields.map(f => {
                const v = item[f];
                if (v === null) return "null";
                if (typeof v === "boolean") return v ? "true" : "false";
                return String(v).replace(/\n/g, " ").replace(/\t/g, " ");
            });
            output.push("  " + row.join("  "));
        } else {
            const v = item === null ? "null" : (typeof item === "boolean" ? (item ? "true" : "false") : String(item));
            output.push("  " + v);
        }
    });

    return output.join("\n");
}

// Token counting utility
function countTokens(str) {
    const tokenRegex = /\w+|[^\s\w]+/g;
    const tokens = str.match(tokenRegex) || [];
    return tokens.length;
}

// Smooth numeric counter animation
function animateCounter(element, target, duration = 1500) {
    const start = 0;
    const startTime = performance.now();
    function step(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (target - start) * ease);
        element.textContent = current;
        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            element.textContent = target;
        }
    }
    requestAnimationFrame(step);
}

// Update donut charts and reduction percentage
function updateStats(jsonCount, toonCount) {
    const statsContainer = document.getElementById('statsContainer');
    const reductionValue = document.getElementById('reductionValue');
    const jsonCountEl = document.getElementById('jsonCountCircle');
    const toonCountEl = document.getElementById('toonCountCircle');
    const jsonDonut = document.getElementById('jsonDonut');
    const toonDonut = document.getElementById('toonDonut');

    statsContainer.style.display = 'flex';

    // Reduction (never negative)
    let reduction = 0;
    if (jsonCount > 0) {
        reduction = ((jsonCount - toonCount) / jsonCount) * 100;
        if (reduction < 0) reduction = 0;
    }

    // Animate reduction text
    const startReduction = parseFloat(reductionValue.textContent) || 0;
    const startTime = performance.now();
    function animateReduction(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / 1500, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = startReduction + (reduction - startReduction) * ease;
        reductionValue.textContent = `${current.toFixed(1)}%`;
        if (progress < 1) requestAnimationFrame(animateReduction);
    }
    requestAnimationFrame(animateReduction);

    // Animate numeric counters
    animateCounter(jsonCountEl, jsonCount);
    animateCounter(toonCountEl, toonCount);

    // JSON donut always full (100%)
    jsonDonut.style.background = `conic-gradient(var(--primary) 100%, var(--bg-input) 0%)`;

    // TOON donut reflects proportion
    const percent = jsonCount > 0 ? (toonCount / jsonCount) * 100 : 0;
    toonDonut.style.background = `conic-gradient(var(--primary) ${percent}%, var(--bg-input) ${percent}%)`;
}

// UI handling – set up event listeners after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const jsonInput = document.getElementById('jsonInput');
    const convertBtn = document.getElementById('convertBtn');
    const toonOutput = document.getElementById('toonOutput');
    const statusMessage = document.getElementById('statusMessage');
    const clearBtn = document.getElementById('clearBtn');
    const copyBtn = document.getElementById('copyBtn');
    const statsContainer = document.getElementById('statsContainer');
    const jsonDonut = document.getElementById('jsonDonut');
    const toonDonut = document.getElementById('toonDonut');

    // Initial hidden state
    statsContainer.style.display = 'none';
    jsonDonut.style.background = `conic-gradient(var(--bg-input) 0%)`;
    toonDonut.style.background = `conic-gradient(var(--bg-input) 0%)`;

    convertBtn.addEventListener('click', () => {
        statusMessage.textContent = '';
        toonOutput.value = '';
        statsContainer.style.display = 'none';
        jsonDonut.style.background = `conic-gradient(var(--bg-input) 0%)`;
        toonDonut.style.background = `conic-gradient(var(--bg-input) 0%)`;
        try {
            const jsonData = JSON.parse(jsonInput.value);
            const toonStr = jsonToToon(jsonData);
            toonOutput.value = toonStr;

            const jsonStr = JSON.stringify(jsonData, null, 2);
            const jsonCount = countTokens(jsonStr);
            const toonCount = countTokens(toonStr);

            updateStats(jsonCount, toonCount);
            statusMessage.textContent = 'Conversão bem-sucedida!';
        } catch (e) {
            alert('JSON inválido ou não está em conformidade. Consulte a documentação: https://json-schema.org/');
            statusMessage.textContent = 'Erro: ' + e.message;
        }
    });

    clearBtn.addEventListener('click', () => {
        jsonInput.value = '';
        toonOutput.value = '';
        statusMessage.textContent = '';
        statsContainer.style.display = 'none';
        jsonDonut.style.background = `conic-gradient(var(--bg-input) 0%)`;
        toonDonut.style.background = `conic-gradient(var(--bg-input) 0%)`;
    });

    copyBtn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(toonOutput.value);
            statusMessage.textContent = 'TOON copiado para a área de transferência.';
        } catch (err) {
            statusMessage.textContent = 'Erro ao copiar: ' + err.message;
        }
    });
});
