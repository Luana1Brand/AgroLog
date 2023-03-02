const express = require('express');
const routes = express.Router();



const Frota = require('../controller/frota.controller');

routes.post("/Frota/create", Frota.create);

routes.get("/Frota/read", Frota.read);

routes.get("/Frota/readOne/:id", Frota.readOne);

routes.put("/Frota/update/:id", Frota.update);

routes.delete("/Frota/delete/:id", Frota.remove);


const Funcionario = require('../controller/funcionario.controller');

routes.post("/Funcionario/create", Funcionario.create);

routes.get("/Funcionario/read", Funcionario.read);

routes.get("/Funcionario/readOne/:id", Funcionario.readOne);

routes.put("/Funcionario/update/:id", Funcionario.update);

routes.delete("/Funcionario/delete/:id", Funcionario.remove);




const Manutencao = require('../controller/manutencao.controller');

routes.post("/Manutencao/create", Manutencao.create);

routes.get("/Manutencao/read", Manutencao.read);

routes.get("/Manutencao/readOne/:id", Manutencao.readOne);

routes.put("/Manutencao/update/:id", Manutencao.update);

routes.delete("/Manutencao/delete/:id", Manutencao.remove);



const Operacoes = require('../controller/operacoes.controller');

routes.post("/Operacoes/create", Operacoes.create);

routes.get("/Operacoes/read", Operacoes.read);

routes.get("/Operacoes/readOne/:id", Operacoes.readOne);

routes.put("/Operacoes/update/:id", Operacoes.update);

routes.delete("/Operacoes/delete/:id", Operacoes.remove);





module.exports = routes;