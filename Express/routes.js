const express = require('express')
const route = express.Router()
const homeController = require('./src/Controllers/homeController')
const contatoController = require('./src/Controllers/contatoControllers')

function meuMiddleware(req, res, next) {
    console.log('----')
    console.log('Passei no seu middleware')
    console.log('----')
    next();
}

//Rotas da home
route.get('/', meuMiddleware, homeController.paginaInicial)
route.post('/', homeController.trataPost)

//Rotas do contato
route.get('/contato',contatoController.Contato)


module.exports = route;