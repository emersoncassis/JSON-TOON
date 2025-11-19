# JSON → TOON Converter 🚀

<div align="center">

![Banner](https://img.shields.io/badge/JSON-to-TOON-64ffda?style=for-the-badge)
![Version](https://img.shields.io/badge/version-2.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

**Transforme seus dados JSON em formato TOON com precisão e estilo.**

[Demo](#-demonstração) • [Características](#-características) • [Instalação](#-instalação) • [Uso](#-como-usar) • [Tecnologias](#-tecnologias)

</div>

---

## 📋 Sobre o Projeto

O **JSON → TOON Converter** é uma aplicação web moderna que converte dados JSON para o formato TOON (Tabular Object Oriented Notation), oferecendo uma interface visual elegante com análise de tokens em tempo real através de gráficos animados tipo "donut".

### 🎯 Principais Funcionalidades

- ✨ **Conversão Universal**: Suporta qualquer tipo de JSON (objetos, arrays, primitivos)
- 📊 **Análise Visual**: Gráficos donut animados mostrando comparação de tokens
- 🎨 **Interface Premium**: Design moderno com tema dark blue/green e efeitos glassmorphism
- ⚡ **Performance**: Animações suaves com transições cubic-bezier
- 📱 **Responsivo**: Layout adaptável para desktop e mobile
- 🔄 **Validação**: Alerta automático para JSON inválido com link para documentação
- 📋 **Clipboard**: Copie o resultado TOON com um clique

## 🎬 Demonstração

### Interface Principal
![Interface](https://via.placeholder.com/800x500/112240/64ffda?text=Conversor+JSON+→+TOON)

### Análise de Tokens com Donuts Animados
![Donuts](https://via.placeholder.com/800x400/112240/64ffda?text=Gráficos+Donut+Animados)

## 🌟 Características

### 🎨 Design Moderno
- **Tema Dark Premium**: Paleta de cores azul escuro e verde néon
- **Glassmorphism**: Efeitos de vidro fosco com backdrop-filter
- **Animações Fluidas**: Transições suaves e contadores animados
- **Tipografia**: Google Fonts (Inter + Fira Code)

### ⚙️ Funcionalidades Técnicas
- **Inferência de Schema**: Detecção automática de tipos (str, int, float, bool, null)
- **Contagem de Tokens**: Análise precisa usando regex
- **Validação JSON**: Parsing com tratamento de erros
- **Exportação**: Cópia para clipboard com feedback visual

### 📊 Visualização de Dados
- **Gráfico JSON**: Sempre 100% preenchido (baseline)
- **Gráfico TOON**: Proporção relativa de tokens
- **Redução %**: Cálculo automático com animação "glow"
- **Contadores**: Números animados com easing cubic

## 🚀 Instalação

### Método 1: Clone do Repositório
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/json-toon-converter.git

# Entre no diretório
cd json-toon-converter

# Abra o index.html no navegador
# Ou use um servidor local (recomendado)
```

### Método 2: Servidor Local (Recomendado)

#### Usando Python:
```bash
# Python 3
python -m http.server 8080

# Acesse: http://localhost:8080
```

#### Usando Node.js:
```bash
# Instale o http-server
npm install -g http-server

# Execute
http-server

# Acesse: http://localhost:8080
```

#### Usando VS Code:
1. Instale a extensão "Live Server"
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

## 💡 Como Usar

### 1️⃣ Conversão Básica

```json
// Cole JSON no campo de entrada
{
  "nome": "João",
  "idade": 30,
  "ativo": true
}
```

Clique em **⚡ Converter** para gerar:

```toon
# TOON v2 - gerado de JSON
schema: nome:str idade:int ativo:bool
data[1]:
  João  30  true
```

### 2️⃣ Tipos Suportados

#### Objeto JSON
```json
{"key": "value", "number": 123}
```

#### Array JSON
```json
[
  {"id": 1, "name": "Item 1"},
  {"id": 2, "name": "Item 2"}
]
```

#### Valores Primitivos
```json
"string simples"
```
```json
123
```
```json
true
```

### 3️⃣ Análise de Tokens

Após a conversão, role para baixo para ver:
- 📊 **Gráfico JSON**: Total de tokens do JSON original
- 📊 **Gráfico TOON**: Total de tokens do TOON gerado
- 📉 **% Redução**: Economia de tokens (nunca negativo)

### 4️⃣ Botões de Ação

- **⚡ Converter**: Converte JSON → TOON
- **📋 Copiar**: Copia resultado para clipboard
- **🗑️ Limpar**: Reseta todos os campos

## 🛠️ Tecnologias

<div align="center">

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| HTML5 | - | Estrutura da página |
| CSS3 | - | Estilizaç ão e animações |
| JavaScript (ES6+) | - | Lógica de conversão |
| Google Fonts | Inter, Fira Code | Tipografia |

</div>

### Características CSS Avançadas
- `conic-gradient()` para gráficos donut
- `backdrop-filter: blur()` para glassmorphism
- `@keyframes` para animações
- `cubic-bezier()` para transições suaves
- Media queries para responsividade

### Características JavaScript
- `requestAnimationFrame()` para animações
- `performance.now()` para timing preciso
- `navigator.clipboard` para copiar texto
- Event delegation e DOM manipulation
- Template literals para formatação

## 📁 Estrutura do Projeto

```
json-toon-converter/
├── index.html          # Página principal
├── style.css           # Estilos e animações
├── script.js           # Lógica de conversão
├── README.md           # Este arquivo
└── LICENSE             # Licença MIT
```

## 🎨 Paleta de Cores

```css
--bg-body: #0a192f      /* Azul escuro corpo */
--bg-card: #112240      /* Azul escuro card */
--bg-input: #020c1b     /* Azul muito escuro */
--primary: #64ffda      /* Verde néon */
--text-heading: #e6f1ff /* Branco azulado */
--text-main: #ccd6f6    /* Cinza claro */
--text-muted: #8892b0   /* Cinza médio */
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Roadmap

- [ ] Suporte para arrays aninhados
- [ ] Exportar como arquivo .toon
- [ ] Importar arquivo JSON
- [ ] Histórico de conversões
- [ ] Temas customizáveis
- [ ] Modo claro (light mode)
- [ ] API REST
- [ ] Validação com JSON Schema

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ por [Seu Nome](https://github.com/seu-usuario)

---

<div align="center">

**[⬆ Voltar ao topo](#json--toon-converter-)**

Made with ☕ and good vibes

</div>
