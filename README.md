# Caldeiraria Realiza — Site Institucional

Site institucional da **Caldeiraria Realiza**, empresa especializada em caldeiraria, serralheria, usinagem e soldagem, com foco em qualidade, precisão e atendimento personalizado para clientes industriais e construtoras.

---

## 🎯 Objetivo

O projeto nasceu da necessidade de dar presença digital profissional à empresa — um canal direto com o cliente que transmita credibilidade, apresente os serviços com clareza e permita o recebimento de contatos e solicitações de orçamento de forma organizada e confiável.

---

## 📌 Escopo

O site cobre as seguintes frentes:

| Módulo | Propósito |
|---|---|
| **Página Inicial** | Apresentação da empresa, diferenciais e chamada para contato |
| **Engenharia** | Capacidades técnicas, equipamentos e especializações |
| **Qualidade** | Processos, certificações e compromisso com a excelência |
| **Projetos** | Portfólio de trabalhos realizados |
| **Galeria** | Acervo visual dos serviços: caldeiraria, serralheria, usinagem e soldagem |
| **Formulário de Contato** | Submissão de mensagens e anexos diretamente para o e-mail da empresa |

---

## 💡 Por que este projeto foi necessário?

A Caldeiraria Realiza atendia majoritariamente por indicação, sem presença digital. A ausência de um canal oficial gerava:

- **Perda de oportunidades** de novos clientes que buscam fornecedores online
- **Falta de credibilidade** percebida no primeiro contato com prospects
- **Processo de contato ineficiente**, dependente de WhatsApp e ligações sem registro

O site resolve esses problemas oferecendo uma vitrine profissional, acessível 24h, com informações completas sobre a empresa e um canal de contato estruturado.

---

## 📬 Formulário de Contato com Suporte a Anexos

Um diferencial importante do projeto é a capacidade de receber **arquivos e anexos** junto com as mensagens de contato — algo essencial para orçamentos que exigem envio de plantas, especificações técnicas e desenhos.

Isso foi viabilizado por um microsserviço backend dedicado, pois soluções de formulário via frontend não suportam envio confiável de arquivos.

---

## 🗂️ Repositório

Este repositório é um monorepo contendo:

| Pasta | Descrição | README Técnico |
|---|---|---|
| [`ui/`](./ui/) | Frontend — site institucional (Next.js) | [📄 Ver documentação](./ui/README.md) |
| [`realizaemailservice/`](./realizaemailservice/) | Backend — microsserviço de e-mail (Spring Boot) | [📄 Ver documentação](./realizaemailservice/README.md) |

---

## 🌐 Acesse

[caldeirariarealiza.com.br](https://caldeirariarealiza.com.br)

