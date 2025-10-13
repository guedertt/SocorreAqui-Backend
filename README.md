 SocorreAqui - Back-end

Back-end do aplicativo SocorreAqui, que fornece números de emergência via API.

---

 Pré-requisitos

- Node.js instalado
- MySQL Community Server instalado e rodando
- Editor de código (recomendado: VSCode)

---

 Rodando o projeto

1. Instale as dependências:


npm install
Crie o arquivo .env na raiz do projeto com o seguinte conteúdo:

env
Copiar código
DB_HOST=localhost
DB_USER=root
DB_PASS=SUA_SENHA_DO_MYSQL
DB_NAME=socorreaqui
PORT=3000
Crie o banco de dados e tabelas
Abra o MySQL Workbench e execute o arquivo banco.sql.

Inicie o servidor:

bash
Copiar código
npm run dev
O servidor estará disponível em: http://localhost:3000

Testando a API
Rota raiz: GET /
Retorna mensagem de status da API.

Todos os contatos: GET /contatos
Retorna a lista de contatos de emergência.

Contato específico: GET /contatos/:id
Retorna o contato correspondente ao ID.

Observações
A API é pública, não exige login.

Favoritos ficam no celular do usuário e não são salvos no banco.

Código organizado em MVC para facilitar manutenção.
