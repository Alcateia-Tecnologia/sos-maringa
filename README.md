# 🆘 SOS Maringá

> Aplicativo mobile que reúne os principais números de emergência de Maringá (PR) — rápido, simples e **100% offline**.

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Plataforma](https://img.shields.io/badge/plataforma-Mobile-blue)
![License](https://img.shields.io/badge/license-Proprietária-red)
![Feito%20por](https://img.shields.io/badge/feito%20por-Alcateia%20Tecnologia-00b37e)

---

## 📱 Sobre o Projeto

O **SOS Maringá** é um aplicativo desenvolvido pela **Alcateia Tecnologia** com o objetivo de facilitar o acesso rápido a todos os números de emergência da cidade, mesmo sem conexão com a internet.

Inspirado na ideia de um *“911 brasileiro”*, o app centraliza os principais serviços de segurança, saúde e utilidade pública em uma interface simples e acessível.

---

## 🧩 Funcionalidades Principais

- 📞 **Discagem direta** com um toque (Polícia, Bombeiros, SAMU, Defesa Civil etc.)
- 📍 **Números locais** de Maringá (Defesa Civil, Guarda Municipal, hospitais)
- 🌐 **Acesso offline** — funciona sem internet
- 💡 **Interface acessível** (alto contraste e botões grandes)
- 🔍 **Busca rápida** por serviço

---

## 🛠️ Tecnologias Utilizadas

| Área | Stack |
|------|-------|
| **Mobile** | [Expo](https://expo.dev/) • React Native • TypeScript |
| **Design** | Figma • Tailwind (ou Styled Components) |
| **Dados** | JSON local (modo offline) |
| **Infra futura** | Supabase / Firebase (para métricas e painel municipal) |

---

## ⚙️ Estrutura do Projeto

```
sos-maringa/
├─ app/
│  ├─ index.tsx
│  ├─ estado/[uf].tsx
│  ├─ cidade/[nome].tsx
│  └─ servicos/[id].tsx
├─ src/
│  ├─ data/data-v1.json
│  ├─ lib/loadData.ts
│  └─ ui/
│     ├─ Button.tsx
│     └─ Card.tsx
└─ README.md
```

---

## 🚀 Como Executar

### 1. Clonar o repositório
```bash
git clone https://github.com/Alcateia-Tecnologia/sos-maringa.git
```

### 2. Instalar dependências
```bash
cd sos-maringa
npm install
```

### 3. Rodar o app
```bash
npx expo start
```

Abra o QR Code no app **Expo Go** (Android ou iOS) e teste localmente.

---

## 📊 Próximas Etapas

- 🔹 Implementar métricas de uso (quantas ligações por serviço)
- 🔹 Criar painel web para prefeituras
- 🔹 Expandir para **SOS Paraná** e **SOS Brasil**
- 🔹 Lançar na Play Store com build via EAS

---

## 🏢 Sobre a Alcateia

> **Alcateia Tecnologia** — onde líderes caçam juntos 🐺  
> Empresa maringaense focada em soluções digitais acessíveis, com propósito social e impacto positivo na vida das pessoas.

📧 corporativo.alcateia@outlook.com
🌐 [github.com/Alcateia-Tecnologia](https://github.com/Alcateia-Tecnologia)

---

## ⚖️ Licença

Este projeto é de código **proprietário**.  
Nenhum conteúdo, total ou parcial, pode ser utilizado, copiado ou redistribuído sem autorização prévia da **Alcateia Tecnologia**.

Consulte o arquivo [`LICENSE`](./LICENSE) para mais informações.

---

> © 2025 Alcateia Tecnologia. Todos os direitos reservados.  
> Criado por **Kauan Henrique Bertalha**
