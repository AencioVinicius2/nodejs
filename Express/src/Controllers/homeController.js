const HomeModel = require('../models/HomeModel')

HomeModel.create({
    titulo: 'Um titulo de testes.',
    descricao: 'Uma descrição de testes.'
})
.then(dados => console.log(dados))
.catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
    res.render('index');    
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};

