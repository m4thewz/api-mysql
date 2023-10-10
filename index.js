import express from "express";
import routes from "./src/routes.js";
import db from "./src/db.js";

const app = express();

app.use(express.json());
app.use(routes);

db.sync();

app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));
