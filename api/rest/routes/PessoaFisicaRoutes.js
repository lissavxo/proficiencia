"use-strict";

const express = require('express');
const routes = express.Router();

const PessoaFisicaController = require('../controller/PessoaFisicaController');

routes.get('/contacts/:id', PessoaFisicaController.getPessoaFisicaById )
routes.delete('/contacts/:id', PessoaFisicaController.delete )
routes.get('/contacts/', PessoaFisicaController.listClienteEPessoaFisica )
routes.post('/contacts/', PessoaFisicaController.create )
routes.put('/contacts/cliente/:id', PessoaFisicaController.update )





module.exports = routes