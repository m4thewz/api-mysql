import { Sequelize } from "sequelize";
import db from "./db.js";

export default db.define("user", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  telefone: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true,
  },
});
