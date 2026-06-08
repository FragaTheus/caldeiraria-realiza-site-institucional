# 📧 Realiza Email Service

Microsserviço backend responsável por receber submissões do formulário de contato do site [caldeirariarealiza.com.br](https://caldeirariarealiza.com.br) e enviá-las por e-mail via SMTP do Gmail.

> **Por que um backend SMTP próprio?**
> Soluções de formulário de contato via frontend (EmailJS, FormSubmit, etc.) não suportam envio de **anexos e arquivos** de forma confiável. Por isso optamos por um microsserviço dedicado: ele recebe o multipart/form-data com o arquivo, processa o anexo server-side e o entrega diretamente via SMTP — sem limitações de terceiros.

---

## 🛠️ Tecnologias

| Tecnologia | Versão |
|---|---|
| Java | 21 |
| Spring Boot | 4.0.5 |
| Spring Mail (JavaMailSender) | — |
| Spring Validation (Jakarta) | — |
| Lombok | — |
| JUnit 5 / MockMvc | — |
| Gradle | 9.x |
| Docker / Docker Compose | — |

---

## 📐 Arquitetura

```
src/main/java/
└── br.com.matheusfragadev.realizaemailservice
    ├── RealizaemailserviceApplication.java   # Entry point Spring Boot
    ├── mail/
    │   └── service/
    │       ├── EmailService.java             # Lógica de envio de e-mail
    │       └── EmailException.java           # Exceção customizada
    └── infra/
        ├── config/
        │   └── CorsConfig.java               # Configuração de CORS
        └── controller/
            ├── EmailController.java          # Endpoint REST
            ├── EmailRequest.java             # DTO (record) com validações
            └── EmailExceptionHandler.java    # Handler global de exceções
```

---

## 🔌 Endpoint

### `POST /api/v1/mail`

Recebe os dados do formulário de contato via **multipart/form-data**.

**Campos:**

| Campo | Tipo | Obrigatório | Limite |
|---|---|---|---|
| `name` | `String` | Sim | 100 caracteres |
| `company` | `String` | Não | 100 caracteres |
| `phone` | `String` | Não | 20 caracteres |
| `email` | `String` | Sim | 150 caracteres |
| `message` | `String` | Sim | 500 caracteres |
| `attachment` | `MultipartFile` | Não | Máx. 5 MB |

**Resposta de sucesso:** `204 No Content`

**Exemplo com `curl`:**
```bash
curl -X POST http://localhost:8080/api/v1/mail \
  -F "name=João Silva" \
  -F "company=Empresa LTDA" \
  -F "phone=(11) 99999-9999" \
  -F "email=joao@empresa.com" \
  -F "message=Olá, gostaria de um orçamento."
```

---

## 🔒 CORS

Origens permitidas configuradas em `CorsConfig.java`:

- `https://caldeirariarealiza.com.br`
- `https://www.caldeirariarealiza.com.br`
- `http://localhost:3000`

Métodos permitidos: `POST`, `OPTIONS`.

---

## 🚀 Como Rodar

### Pré-requisitos

- [Docker](https://docs.docker.com/get-docker/) e [Docker Compose](https://docs.docker.com/compose/) instalados
- Java 21 (apenas para rodar localmente sem Docker)

---

### ▶️ Com Docker Compose (recomendado)

```bash
# 1. Gere o JAR
./gradlew bootJar

# 2. Suba o container
docker compose up --build

# Para rodar em background
docker compose up --build -d

# Para parar
docker compose down
```

O serviço ficará disponível em `http://localhost:8080`.

---

### ▶️ Localmente via Gradle (profile demo)

O projeto inclui o arquivo `src/main/resources/application-demo.properties` com a configuração pronta para rodar localmente. Basta declarar as variáveis de ambiente e ativar o profile `demo`:

```bash
# Linux / macOS
export MAIL_USERNAME=seu-email@gmail.com
export MAIL_APP_PASSWORD="xxxx xxxx xxxx xxxx"
export MAIL_TO=destino@empresa.com.br

./gradlew bootRun --args='--spring.profiles.active=demo'
```

```powershell
# Windows (PowerShell)
$env:MAIL_USERNAME="seu-email@gmail.com"
$env:MAIL_APP_PASSWORD="xxxx xxxx xxxx xxxx"
$env:MAIL_TO="destino@empresa.com.br"

./gradlew bootRun --args='--spring.profiles.active=demo'
```

---

## 🧪 Testes

```bash
./gradlew test
```

Os testes cobrem:

- **`EmailServiceTest`** — envio com e sem anexo, validação de tamanho do arquivo, nome de arquivo obrigatório, tratamento de exceções do JavaMailSender.
- **`EmailControllerTest`** — integração via MockMvc: requisição válida retorna `204`, requisição inválida retorna `400`.
- **`RealizaemailserviceApplicationTests`** — carregamento do contexto Spring.

Relatório HTML gerado em:
```
build/reports/tests/test/index.html
```

---

## 📦 Build

```bash
# Compilar e gerar JAR executável
./gradlew bootJar

# JAR gerado em:
# build/libs/realizaemailservice-0.0.1-SNAPSHOT.jar
```

---

## 🐳 Dockerfile

```dockerfile
FROM eclipse-temurin:21-jre
WORKDIR /app
COPY build/libs/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
```

A imagem usa **eclipse-temurin:21-jre** (imagem oficial do OpenJDK, leve e segura).

---

## 📁 Estrutura de Arquivos Relevantes

```
realizaemailservice/
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── build.gradle
├── src/
│   ├── main/
│   │   ├── java/...            # Código-fonte
│   │   └── resources/
│   │       ├── application.properties
│   │       └── application-demo.properties  # Profile para rodar localmente
│   └── test/
│       └── java/...            # Testes
└── build/
    └── libs/
        └── *.jar               # JAR gerado pelo Gradle
```
