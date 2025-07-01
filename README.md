# Desafio Prático - Aplicação de Tarefas (TCC-WEB)

Este projeto consiste em uma aplicação web simples para cadastro e listagem de tarefas, desenvolvida com React no frontend e NestJS no backend.

## Tecnologias Utilizadas

* **Frontend**: React com Vite, TypeScript
* **Backend**: NestJS com TypeScript, TypeORM
* **Banco de Dados**: PostgreSQL

## Estrutura do Projeto

O projeto está dividido em duas pastas principais:
- `backend/`: Contém o código da API RESTful desenvolvida com NestJS.
- `frontend/`: Contém o código da interface de usuário desenvolvida com React.

## Pré-requisitos

Antes de rodar o projeto, certifique-se de ter as seguintes ferramentas instaladas:

* Node.js
* npm (gerenciador de pacotes do Node.js)
* PostgreSQL
* Git

## Como Rodar o Projeto

Siga os passos abaixo para configurar e executar a aplicação:

### 1. Configuração do Banco de Dados (PostgreSQL)

1.  Certifique-se de que o servidor PostgreSQL esteja em execução.
2.  O backend está configurado para tentar se conectar a um banco de dados chamado `tasks_db` no `localhost:5432` com o usuário `postgres`.
3.  **Importante**: Edite o arquivo `backend/src/app.module.ts` e substitua `'sua_senha_do_postgres'` pela sua senha real do usuário `postgres` do PostgreSQL.
    ```typescript
    // backend/src/app.module.ts
    TypeOrmModule.forRoot({
      // ...
      password: 'SUA_SENHA_AQUI', // <--- MUDAR AQUI
      // ...
    }),
    ```
4.  O backend utilizará `synchronize: true` em ambiente de desenvolvimento para criar as tabelas automaticamente.

### 2. Rodar o Backend

1.  Navegue até a pasta `backend`:
    ```bash
    cd backend
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run start:dev
    ```
    O backend estará acessível em `http://localhost:3000`.

### 3. Rodar o Frontend

1.  Abra um novo terminal e navegue até a pasta `frontend` do projeto:
    ```bash
    cd frontend
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Inicie a aplicação React:
    ```bash
    npm run dev
    ```
    O frontend estará acessível em `http://localhost:5173` (ou outra porta que o Vite indicar).