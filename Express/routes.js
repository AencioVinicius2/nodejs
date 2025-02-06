const express = require('express')
const route = express.Router()
const homeController = require('./Controllers/homeController')
const contatoController = require('./Controllers/contatoControllers')

//Rotas da home
route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost)

//Rotas do contato
route.get('/contato',contatoController.Contato)


module.exports = route;