## Api REST integrado ao MySQL
Antes de iniciar a aplicação é necessário:
- Criar o banco de dados MySQL (schema)<br>
- Instalar todas as depedencias (npm install)<br>
- Criar um arquivo .env usando o arquivo .env.example como exemplo<br>

Rotas possiveis:<br>
| Operação | Rota         | Função                                               |
|----------|--------------|------------------------------------------------------|
| GET      | /            | Página inicial                                       |
| GET      | /usarios     | Retorna todos usuários                               |
| POST     | /usuario     | Cria um usuário                                      |
| GET      | /usuario/:id | Retorna usuário com o id especificado                |
| PUT      | /usuario/:id | Substitui os dados do usuários com o id especificado |
| DELETE   | /usuario/:id | Deleta o usuário com o id especificado               |
