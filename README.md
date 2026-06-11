# Caldeiraria Realiza — Site Institucional

Site profissional da **Caldeiraria Realiza**, empresa especializada em caldeiraria, serralheria, usinagem e soldagem. Funciona como canal direto de contato para orçamentos.

---

## 📚 Documentação Técnica

Se você quer entender a arquitetura:

| Componente   | Link                                                       | Responsabilidade  |
| ------------ | ---------------------------------------------------------- | ----------------- |
| **Frontend** | [📄 Documentação Frontend](./ui/README.md)                 | Ecossistema Next  |
| **Backend**  | [📄 Documentação Backend](./realizaemailservice/README.md) | Ecossitema Spring |

---

## 🎯 Visão Geral do Negócio

### O Problema

A Realiza dependia quase exclusivamente de indicações e WhatsApp, o que gerava:

- **Perda de oportunidades comerciais** — potenciais clientes online não encontravam a empresa
- **Ausência de presença digital estruturada** — falta de um canal oficial para apresentar serviços, diferenciais e informações da mesma

### A Solução

Um site institucional funciona como canal 24h acessível, com:

- Vitrine profissional consolidada
- Informações completas sobre capacidades e serviços
- Registro organizado de todas as solicitações de contato

---

## ✅ O que o Site Oferece

| Seção          | Função                                          |
| -------------- | ----------------------------------------------- |
| **Home**       | Apresentação, diferenciais e CTA para contato   |
| **Engenharia** | Capacidades técnicas e equipamentos             |
| **Qualidade**  | Processos, certificações e compromissos         |
| **Projetos**   | Portfólio de trabalhos realizados               |
| **Galeria**    | Acervo visual dos serviços                      |
| **Contato**    | Formulário com suporte a anexos para orçamentos |

---

## 📦 Arquitetura

Monorepo com duas aplicações independentes:

```
├── ui/                          # Frontend (Next.js)
│   └── Consome API do backend
│
└── realizaemailservice/         # Backend (Spring Boot)
    └── Processa formulários e envia e-mails via SMTP
```

| Componente   | Tecnologia                                       | Responsabilidade                                                 |
| ------------ | ------------------------------------------------ | ---------------------------------------------------------------- |
| **Frontend** | Next.js 16 + React 19 + Tailwind + Framer Motion | Interface de usuario                                             |
| **Backend**  | Spring Boot 4.0.5 + Jakarta Validation           | Validação server-side, processamento de anexos e envio de emails |

---

## 🌍 Acesse o Site

[caldeirariarealiza.com.br](https://caldeirariarealiza.com.br)

---

## 📞 Contato e Suporte

Para dúvidas sobre o desenvolvimento ou infraestrutura, consulte os READMEs técnicos vinculados no topo deste documento.
