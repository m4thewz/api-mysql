import User from "./model.js";

function findAll(_, res) {
  User.findAll().then((result) => res.json(result));
}

function findUser(req, res) {
  User.findByPk(req.params.id).then((result) => res.json(result));
}

function addUser(req, res) {
  User.create({
    nome: req.body.nome,
    email: req.body.email,
    cpf: req.body.cpf,
    telefone: req.body.telefone,
  }).then((result) => res.json(result));
}

async function updateUser(req, res) {
  await User.update(
    {
      nome: req.body.nome,
      email: req.body.email,
      cpf: req.body.cpf,
      telefone: req.body.telefone,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  User.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteUser(req, res) {
  await User.destroy({
    where: {
      id: req.params.id,
    },
  });

  User.findAll().then((result) => res.json(result));
}

export default { findAll, addUser, findUser, updateUser, deleteUser };
