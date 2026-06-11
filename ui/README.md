# 🖥️ Caldeiraria Realiza — Frontend

Site institucional feito no ecossistema **Next.js**.

---

## 📚 Sumário

- [Tecnologias](#-tecnologias)
- [Arquitetura](#-arquitetura)
- [Páginas](#-páginas)
- [Formulário de Contato](#-formulário-de-contato)
- [Validação e Segurança](#-validação-e-segurança)
- [Como Rodar](#-como-rodar)
- [Backend Vinculado](#-backend-vinculado)

---

## 🛠️ Tecnologias

| Tecnologia      | Versão | Uso                                                   |
| --------------- | ------ | ----------------------------------------------------- |
| Next.js         | 16     | Framework React (App Router)                          |
| React           | 19     | UI                                                    |
| TypeScript      | 5      | Tipagem estática                                      |
| Tailwind CSS    | 4      | Estilização utilitária                                |
| Framer Motion   | 12     | Animações e transições                                |
| Swiper          | 12     | Carrosséis e sliders                                  |
| React Hook Form | 7      | Gerenciamento de formulários                          |
| Zod             | 4      | Validação client-side de schema do formulário         |
| TanStack Query  | 5+     | Requisições HTTP, cache e sincronização com o backend |
| next-sitemap    | 4      | Geração automática de sitemap.xml                     |

---

## 📐 Arquitetura

```
src/
├── app/                         # App Router (Next.js)
│   ├── page.tsx                 # Página inicial
│   ├── engenharia/page.tsx      # Capacidades de engenharia
│   ├── qualidade/page.tsx       # Processos de qualidade
│   ├── projetos/page.tsx        # Portfólio de projetos
│   ├── galeria/page.tsx         # Galeria de serviços
│   ├── layout.tsx               # Layout global
│   └── globals.css              # Estilos globais
├── features/                    # Módulos por domínio de negócio
│   ├── engenharia/
│   │   ├── components/          # Componentes de UI
│   │   ├── layout/              # Composição de seções
│   │   ├── wrapper/             # Containers de dados
│   │   └── text-content/        # Conteúdo textual (JSON)
│   ├── gallery/
│   │   ├── component/
│   │   ├── layout/
│   │   └── text-content/
│   └── ...                      # Demais módulos
├── shared/                      # Componentes e utilitários reutilizáveis
│   ├── form/
│   │   ├── schemas/             # Schemas Zod dos formulários
│   │   ├── hooks/               # Custom hooks (TanStack Query)
│   │   └── validation/          # Lógica de validação
│   └── api/                     # Configuração do TanStack Query
└── lib/                         # Utilitários gerais
```

> **Padrão adotado:** cada feature é auto-contida com componentes, layouts, wrappers e conteúdo textual. Os textos estão em arquivos `.json`, facilitando manutenção e internacionalização futura.

---

## 📄 Páginas

| Rota          | Descrição                                                    |
| ------------- | ------------------------------------------------------------ |
| `/`           | Página inicial — apresentação, diferenciais e CTA            |
| `/engenharia` | Capacidades técnicas e equipamentos                          |
| `/qualidade`  | Processos, controle e certificações                          |
| `/projetos`   | Portfólio de projetos realizados                             |
| `/galeria`    | Galeria visual: caldeiraria, serralheria, usinagem, soldagem |

---

## Campos do Formulário

| Campo              | Tipo   | Validação Zod                     | Nota                        |
| ------------------ | ------ | --------------------------------- | --------------------------- |
| `name`             | String | Max 100 caracteres                | Obrigatório                 |
| `company`          | String | Max 100 caracteres                | Opcional                    |
| `phone`            | String | Max 20 caracteres                 | Opcional                    |
| `email`            | String | Email válido + Max 150 caracteres | Obrigatório                 |
| `message`          | String | Max 500 caracteres                | Obrigatório                 |
| `attachmentBase64` | String | Base64 válido (até 5 MB)          | Opcional                    |
| `attachmentName`   | String | Max 100 caracteres                | Obrigatório se houver anexo |

---

## 🔒 Validação e Segurança

- **Validação client-side com Zod** — rejeição de dados inválidos antes de sair do navegador
- **Validação server-side com Jakarta Validation** — defesa em camadas
- **HTTPS garantido pelo Nginx** com SSL em produção
- **CORS** — apenas origens autorizadas podem acessar a API
- **Rate Limit** — proteção contra spam de formulários
- **Arquivo Base64** — encapsulamento seguro para anexos

---

## 🚀 Como Rodar

### Pré-requisitos

- Node.js 20+
- pnpm (usado no projeto) ou npm

### Instalação

```bash
pnpm install
# ou
npm install
```

### Desenvolvimento

```bash
pnpm dev
# ou
npm run dev
```

Acesse em `http://localhost:3000`.

> Para o formulário de contato funcionar localmente, o backend [`realizaemailservice`](../realizaemailservice/README.md) precisa estar rodando em `http://localhost:8080`.

### Build de Produção

```bash
# Gerar build otimizado
pnpm build

# Iniciar servidor de produção
pnpm start
```

O `next-sitemap` gera automaticamente o `sitemap.xml` após o build.

---

## 📁 Estrutura de Arquivos Relevantes

```
ui/
├── src/
│   ├── app/                # Rotas e páginas (App Router)
│   ├── features/           # Módulos por domínio
│   ├── shared/             # Componentes e hooks compartilhados
│   └── lib/                # Utilitários
├── public/                 # Assets estáticos
├── next.config.ts          # Configuração do Next.js
├── next-sitemap.config.js  # Configuração do sitemap
├── tsconfig.json           # Configuração TypeScript
└── package.json
```

---

## 🔗 Backend Vinculado

Este frontend depende do microsserviço de e-mail para o formulário de contato:
👉 [`realizaemailservice` — documentação técnica](../realizaemailservice/README.md)
