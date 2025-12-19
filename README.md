# API Disparo Ativo – WhatsApp (Kids&US)

API em Node.js + TypeScript responsável por **receber dados via webhook** e realizar um **disparo ativo de campanha no WhatsApp** utilizando o **BLiP Active Campaign**.

---

## 📌 Objetivo

Receber dados de leads via webhook (ex: HubSpot, RD, sistemas externos) e, a partir dessas informações, disparar uma campanha ativa no WhatsApp via BLiP.

---

## 🧱 Arquitetura

Projeto estruturado seguindo boas práticas de backend:

src/
├── app.ts
├── controllers/
│ └── WebhookController.ts
├── services/
│ ├── CampaignService.ts
│ └── BlipClient.ts
├── dtos/
│ ├── WebhookPayloadDTO.ts
│ └── CampaignDTO.ts
└── utils/
└── PhoneNormalizer.ts

---

## 🚀 Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- Axios
- dotenv
- BLiP API (Active Campaign)

---

## ⚙️ Pré-requisitos

- Node.js **v18+**
- npm ou yarn
- Token de autenticação do BLiP

---

## 🔧 Instalação

Clone o repositório e instale as dependências:

```bash
npm install

🔐 Variáveis de Ambiente

Crie um arquivo .env na raiz do projeto:

BLIP_AUTH_KEY=Key SEU_TOKEN_DO_BLIP


⚠️ Importante: o token deve conter o prefixo Key.

▶️ Executando o projeto
Ambiente de desenvolvimento
npm run dev

Saída esperada:
running on port: 3000


