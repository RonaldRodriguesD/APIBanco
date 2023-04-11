// redirecionamento de rota

const express = require('express');
const controllerUsuario = require('../controller/usuarioController');
const routes = express.Router();

routes.get('/List',controllerUsuario.List);
routes.post('/Add',controllerUsuario.Add);
routes.post('/atualiza',controllerUsuario.Update);
routes.post('/ListID',controllerUsuario.ListOne);
routes.post('/Delete',controllerUsuario.Delete);

module.exports = routes;