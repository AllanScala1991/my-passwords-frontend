# My Passwords Frontend

Frontend de um projeto pessoal de gerenciamento de senhas.


## Funcionalidades

- Gerenciamento de usuário
- Gerenciamento de senhas
- Criptografia e Descriptografia de senhas
- Gerador de senhas aleatórias


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`VITE_BACKEND_URL`: baseUrl do backend.
`VITE_SECRET_KEY`: chave secreta para descriptografar senhas

## Rodando localmente

Entendendo que você já possui o backend rodando localmente, caso ainda não tenha configurado:
```bash
https://github.com/AllanScala1991/my-passwords-backend
```
Depois de configurar e deixar rodando localmente o backend, então basta seguir os próximos passos:

Clone o projeto 

```bash
  git clone https://github.com/AllanScala1991/my-passwords-frontend
```

Entre no diretório do projeto

```bash
  cd my-passwords-frontend
```

Instale as dependências

```bash
  npm install
```

Inicie o web app

```bash
  npm run dev
```

## Stack utilizada
**Front-end:** Node, React, Evergreen UI e Typescript.