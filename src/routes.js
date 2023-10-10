import express from "express";
import user from "./controller.js";

const routes = express.Router();

routes.get("/", (_, res) => {
  return res.send(`
  GET / - Página inicial<br>
  GET /usuarios - Retorna todos usuários<br>
  POST /usuario - Cria um usuário<br>
  GET /usuario/:id - Retorna usuário com o id especificado<br>
  PUT /usuario/:id - Substitui os dados do usuários com o id especificado<br>
  DELETE /usuario/:id - Deleta o usuário com o id especificado<br>
  `);
});

routes.get("/usuarios", user.findAll);
routes.post("/usuario", user.addUser);
routes.get("/usuario/:id", user.findUser);
routes.put("/usuario/:id", user.updateUser);
routes.delete("/usuario/:id", user.deleteUser);

export { routes as default };
