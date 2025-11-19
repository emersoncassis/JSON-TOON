# JSON → TOON Converter 🚀

<div align="center">

![Banner](https://img.shields.io/badge/JSON-to-TOON-64ffda?style=for-the-badge)
![Version](https://img.shields.io/badge/version-2.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

**Ferramenta de conversão de dados JSON para formato TOON com análise técnica de tokens.**

[Funcionalidades](#-funcionalidades-técnicas) • [Instalação](#-instalação) • [Uso](#-como-usar) • [Segurança](#-segurança-e-validação)

</div>

---

## 📋 Sobre o Projeto

O **JSON → TOON Converter** é uma aplicação focada na transformação precisa de estruturas de dados JSON para a notação TOON (Tabular Object Oriented Notation). O projeto prioriza a integridade dos dados, validação robusta de entrada e análise performática de tokens.

## ⚙️ Funcionalidades Técnicas

### 1. Conversão Universal de Dados
O algoritmo de conversão foi desenvolvido para lidar com qualquer estrutura JSON válida:
- **Objetos Complexos**: Suporte a objetos aninhados e múltiplos campos.
- **Arrays**: Processamento de listas de objetos ou valores primitivos.
- **Tipos Primitivos**: Tratamento correto de `string`, `number` (int/float), `boolean` e `null`.
- **Inferência de Tipos**: Detecção automática do tipo de dado para geração do schema TOON.

### 2. Análise de Tokens
Sistema de contagem e comparação de tokens em tempo real:
- **Regex Otimizada**: Utiliza a expressão `/\w+|[^\s\w]+/g` para tokenização precisa em O(n).
- **Cálculo de Redução**: Algoritmo que determina a eficiência da conversão (economia de caracteres/tokens).
- **Proteção Matemática**: Lógica de clamp para impedir percentuais negativos ou divisão por zero.

### 3. Performance
- **RequestAnimationFrame**: Atualizações de DOM sincronizadas com o refresh rate do monitor (60fps).
- **Manipulação de DOM**: Seletores cacheados e batch updates para minimizar reflows/repaints.
- **Sem Dependências**: Implementação em Vanilla JS puro para máxima leveza (~15KB).

## 🔒 Segurança e Validação

A aplicação implementa múltiplas camadas de proteção para garantir a estabilidade e segurança:

### ✅ Validação de Entrada (Input Sanitization)
- **Try-Catch Global**: Todo o parsing de JSON é envolvido em blocos de tratamento de erro.
- **Feedback de Erro**: Exceções de parsing são capturadas e apresentadas ao usuário com links para a especificação JSON oficial.
- **Escape de Caracteres**: Tratamento de quebras de linha e tabulações para manter a integridade do formato tabular.

```javascript
try {
  const jsonData = JSON.parse(jsonInput.value);
  // Processamento...
} catch (e) {
  // Tratamento seguro de erro sem expor stack trace sensível
  alert('JSON inválido. Consulte: https://json-schema.org/');
}
```

### ✅ Proteção Contra Overflow e Erros Matemáticos
- **Clamp de Valores**: O cálculo de redução percentual possui guardas para impedir valores negativos.
- **Verificação de Nulos**: Checagens de existência antes de operações críticas.

```javascript
let reduction = 0;
if (jsonCount > 0) {
  reduction = ((jsonCount - toonCount) / jsonCount) * 100;
  if (reduction < 0) reduction = 0; // Clamp para zero
}
```

### ✅ Segurança no Clipboard
- Utilização da **Clipboard API** moderna com Promises (Async/Await).
- Tratamento de erros caso a permissão de escrita seja negada pelo navegador.

## 🚀 Instalação

### Método 1: Clone do Repositório
```bash
git clone https://github.com/seu-usuario/json-toon-converter.git
cd json-toon-converter
# Abra o index.html no navegador
```

### Método 2: Servidor Local (Python)
```bash
python -m http.server 8080
# Acesse: http://localhost:8080
```

## 💡 Como Usar

1. **Entrada**: Cole qualquer JSON válido no painel esquerdo.
2. **Processamento**: Clique em "Converter". O sistema irá:
   - Validar a sintaxe JSON.
   - Inferir o schema dos dados.
   - Gerar a saída TOON.
   - Calcular a contagem de tokens.
3. **Saída**: O resultado aparecerá no painel direito, pronto para cópia.

## 🛠️ Stack Tecnológico

- **Core**: HTML5, CSS3, JavaScript (ES6+)
- **Performance**: API `performance.now()`, `requestAnimationFrame`
- **Regex**: Expressões regulares para tokenização

## 📁 Estrutura de Arquivos

```
json-toon-converter/
├── index.html          # Markup e estrutura semântica
├── style.css           # Estilização (separada da lógica)
├── script.js           # Lógica de conversão, validação e eventos
├── README.md           # Documentação técnica
└── LICENSE             # Licença MIT
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'feat: Adiciona validação X'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.

---
<div align="center">
<b>JSON → TOON Converter</b>
</div>
