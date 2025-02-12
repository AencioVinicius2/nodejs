module.exports = (req, res, next) => {
    console.log();
    console.log('Passei no middleware global');
    if(req.body.nome == undefined) {
        console.log('É obrigatório preencher o nome');
    }
    console.log(req.body.nome);
    res.locals.umaVariavelLocal = 'Var local';
    next();
};