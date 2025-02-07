const express = require('express')
const route = express.Router()
const homeController = require('./src/Controllers/homeController')
const contatoController = require('./src/Controllers/contatoControllers')

//Rotas da home
route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost)

//Rotas do contato
route.get('/contato',contatoController.Contato)


module.exports = route;