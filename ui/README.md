# 🖥️ Caldeiraria Realiza — UI (Frontend)

Site institucional da Caldeiraria Realiza, desenvolvido em **Next.js** com foco em performance, SEO e experiência visual. Consome o microsserviço de e-mail ([`realizaemailservice`](../realizaemailservice/README.md)) para envio do formulário de contato com suporte a anexos.

---

## 🛠️ Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| Next.js | 16 | Framework React (App Router) |
| React | 19 | UI |
| TypeScript | 5 | Tipagem estática |
| Tailwind CSS | 4 | Estilização utilitária |
| Framer Motion | 12 | Animações e transições |
| Swiper | 12 | Carrosséis e sliders |
| React Hook Form | 7 | Gerenciamento de formulários |
| Zod | 4 | Validação de schema do formulário |
| Axios | 1 | Requisições HTTP para o backend |
| next-sitemap | 4 | Geração automática de sitemap.xml |

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
│   └── ...                      # Demais módulos (qualidade, projetos, home)
└── shared/                      # Componentes e utilitários reutilizáveis
```

> **Padrão adotado:** cada feature é auto-contida com seus próprios componentes, layouts, wrappers e conteúdo textual. Os textos são separados em arquivos `.json`, facilitando manutenção e possível internacionalização futura.

---

## 📄 Páginas

| Rota | Descrição |
|---|---|
| `/` | Página inicial — apresentação, diferenciais e CTA |
| `/engenharia` | Capacidades técnicas e equipamentos |
| `/qualidade` | Processos, controle e certificações |
| `/projetos` | Portfólio de projetos realizados |
| `/galeria` | Galeria visual: caldeiraria, serralheria, usinagem, soldagem |

---

## 📬 Formulário de Contato

O formulário utiliza **React Hook Form** com validação **Zod** e envia os dados via **Axios** para o microsserviço backend [`realizaemailservice`](../realizaemailservice/README.md), que processa o anexo e entrega o e-mail via SMTP.

Suporta envio de **arquivos e anexos** (até 5 MB), necessário para orçamentos com plantas e especificações técnicas.

---

## 🔒 Segurança

- **Validação client-side** via Zod antes de qualquer requisição
- **Validação server-side** no backend (Jakarta Validation)
- **HTTPS** garantido pelo Nginx com SSL no servidor de produção
- Comunicação com o backend restrita às origens permitidas via CORS

---

## 🚀 Como Rodar

### Pré-requisitos

- Node.js 20+
- pnpm (recomendado) ou npm

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
│   └── shared/             # Componentes compartilhados
├── public/                 # Assets estáticos
├── next.config.ts          # Configuração do Next.js
├── next-sitemap.config.js  # Configuração do sitemap
├── tsconfig.json           # Configuração TypeScript
└── package.json
```

---

## 🔗 Backend

Este frontend depende do microsserviço de e-mail para o formulário de contato:
👉 [`realizaemailservice` — documentação técnica](../realizaemailservice/README.md)
