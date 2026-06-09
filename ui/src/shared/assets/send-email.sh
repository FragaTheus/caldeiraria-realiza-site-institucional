#!/bin/bash

BASE64=$(base64 -w 0 carrinho.png)

cat > request.json << JSON
{
  "name": "Matheus Fraga",
  "company": "Empresa Teste",
  "phone": "(11) 99999-9999",
  "email": "teste@teste.com",
  "message": "Olá, gostaria de um orçamento.",
  "attachmentBase64": "$BASE64",
  "attachmentName": "carrinho.png"
}
JSON

curl -v -X POST http://localhost:8080/api/v1/mail \
  -H "Content-Type: application/json" \
  -d @request.json

rm request.json
