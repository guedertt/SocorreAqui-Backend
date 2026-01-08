
# SocorreAqui – Backend 🚨

Este repositório contém o **backend** do projeto **SocorreAqui**, responsável por gerenciar contatos de emergência e personalizados, fornecendo dados para o site e o aplicativo mobile via **API REST**.

## Funcionalidades

- CRUD de contatos de emergência pré-definidos e personalizados (criar, ler, atualizar, deletar).  
- Integração com site e app mobile via API REST.  
- Persistência de dados em arquivo local (JSON).  
- Código modular e organizado para facilitar manutenção.

## Tecnologias

- Node.js  
- Express  
- JSON (armazenamento de dados)  
- Git (controle de versão)

## Estrutura do Projeto

- `index.js` – ponto de entrada do servidor Express  
- `model/` – manipulação dos dados (CRUD)  
- `control/` – lógica das rotas e tratamento de requisições  
- `roteamento/` – definição das rotas da API

## Como Rodar

Clone o repositório:

```

git clone [https://github.com/guedertt/SocorreAqui-Backend.git](https://github.com/guedertt/SocorreAqui-Backend.git)

```

Entre na pasta do projeto:

```

cd SocorreAqui-Backend

```

Instale as dependências:

```

npm install

```

Inicie o servidor:

```

node index.js

```

A API estará disponível em `http://localhost:8000` (ou porta configurada).

## Rotas Principais

- `GET /contatos` – lista todos os contatos de emergência  
- `GET /contatos/:id` – obtém um contato específico pelo ID  
- `POST /contatos` – adiciona um contato personalizado  
- `PUT /contatos/:id` – atualiza um contato existente  
- `DELETE /contatos/:id` – remove um contato personalizado

## Possíveis Melhorias

- Implementar autenticação para proteger dados de contatos personalizados  
- Migrar armazenamento para banco de dados (MySQL, MongoDB ou SQLite)  
- Adicionar logs de acesso e auditoria  
- Criar testes automatizados para garantir estabilidade do backend

## Autor

**Guilherme Guedert**  
GitHub: [https://github.com/guedertt/SocorreAqui-Backend](https://github.com/guedertt/SocorreAqui-Backend)
```

