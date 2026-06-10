# 📧 Realiza Email Service

Microsserviço backend responsável por receber submissões do formulário de contato do site [caldeirariarealiza.com.br](https://caldeirariarealiza.com.br) e enviá-las por e-mail via SMTP.

> **Por que um backend SMTP próprio?**
> Soluções de formulário via frontend (EmailJS, FormSubmit etc.) têm limitações para anexos. Neste serviço, o frontend envia o arquivo em Base64, o backend converte e envia como anexo real via SMTP.

---

## 🛠️ Tecnologias

| Tecnologia | Versão |
|---|---|
| Java | 21 |
| Spring Boot | 4.0.5 |
| Spring Web MVC | — |
| Spring Mail (JavaMailSender) | — |
| Spring Validation (Jakarta) | — |
| Lombok | — |
| JUnit 5 / MockMvc | — |
| Gradle | 9.x |

---

## 📐 Arquitetura

```text
src/main/java/
└── br.com.matheusfragadev.realizaemailservice
    ├── RealizaemailserviceApplication.java
    ├── controller/
    │   ├── handler/
    │   │   ├── EmailExceptionHandler.java
    │   │   └── ErrorResponse.java
    │   └── mail/
    │       ├── EmailController.java
    │       └── EmailRequest.java
    └── service/
        └── mail/
            ├── EmailService.java
            └── EmailException.java
```

---

## 🔌 API Pública

### `POST /api/v1/mail`

Recebe os dados do formulário via **JSON**.

**Body (JSON):**

| Campo | Tipo | Obrigatório | Limite |
|---|---|---|---|
| `name` | `String` | Não | 100 caracteres |
| `company` | `String` | Não | 100 caracteres |
| `phone` | `String` | Não | 20 caracteres |
| `email` | `String` | Não | 150 caracteres |
| `message` | `String` | Não | 500 caracteres |
| `attachmentBase64` | `String` | Não | conteúdo Base64 |
| `attachmentName` | `String` | Não | nome do arquivo |

**Resposta de sucesso:** `204 No Content`

**Exemplo com `curl`:**
```bash
BASE64=$(base64 -w 0 carrinho.png)

curl -v -X POST http://localhost:8081/api/v1/mail \
  -H "Content-Type: application/json" \
  -d "{\
    \"name\": \"Matheus Fraga\",\
    \"company\": \"Empresa Teste\",\
    \"phone\": \"(11) 99999-9999\",\
    \"email\": \"teste@teste.com\",\
    \"message\": \"Olá, gostaria de um orçamento.\",\
    \"attachmentBase64\": \"$BASE64\",\
    \"attachmentName\": \"carrinho.png\"\
  }"
```

---

## 📚 Swagger / OpenAPI

A API possui documentação Swagger para consulta pública do contrato.

- Swagger UI: `https://SEU-DOMINIO/swagger-ui/index.html`
- OpenAPI JSON: `https://SEU-DOMINIO/v3/api-docs`

Para ambiente local:

- Swagger UI: `http://localhost:8081/swagger-ui/index.html`
- OpenAPI JSON: `http://localhost:8081/v3/api-docs`

---

## 🔒 Segurança

### CORS no Nginx

O CORS é aplicado no **Nginx** (camada de borda). Requisições de origens não autorizadas são bloqueadas antes de chegarem no backend.

### Rate Limit no Nginx

Foi configurado **Rate Limit por IP** no Nginx para reduzir sobrecarga no servidor e mitigar spam de e-mails.

### Bloqueio por IP

Além do limite de taxa, o Nginx permite aplicar regras de bloqueio por IP quando necessário para conter abuso.

### SSL/TLS com HTTPS

A terminação SSL/TLS também é feita no Nginx, garantindo comunicação externa via **HTTPS** com certificado válido.

### Validação de Dados

O backend aplica validação de payload com **Jakarta Validation** para rejeitar entradas malformadas com `400 Bad Request`.

---

## 🚀 Como Rodar (Local)

### Pré-requisitos

- Java 21
- Gradle
- SMTP configurado (usuário, senha de app e e-mail de destino)

### 1) Configure variáveis de ambiente

```bash
export MAIL_USERNAME="seu-email@gmail.com"
export MAIL_APP_PASSWORD="sua-senha-app"
export MAIL_TO="destino@empresa.com.br"
```

### 2) Rode a aplicação

```bash
./gradlew bootRun
```

Aplicação disponível em `http://localhost:8081`.

---

## 🧪 Testes

```bash
./gradlew test
```

Relatório HTML:

```text
build/reports/tests/test/index.html
```

---

## 📦 Build

```bash
./gradlew clean build
```

JAR gerado em:

```text
build/libs/realizaemailservice-0.0.1-SNAPSHOT.jar
```
