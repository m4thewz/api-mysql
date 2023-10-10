Antes de iniciar a aplicação é necessário criar o banco de dados MySQL (schema)
Instale todas as depedencias (npm install)
Crie um arquivo .env usando o arquivo .env.example como exemplo, colocando os dados do seu schema

Rotas possiveis:
GET / - Página inicial<br>
GET /usuarios - Retorna todos usuários<br>
POST /usuario - Cria um usuário<br>
GET /usuario/:id - Retorna usuário com o id especificado<br>
PUT /usuario/:id - Substitui os dados do usuários com o id especificado<br>
DELETE /usuario/:id - Deleta o usuário com o id especificado<br>
