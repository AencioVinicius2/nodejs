const express = require('express');
const app = express();

app.use(
    express.urlencoded(
        {
          extended: true
        }
    )
);


//:parametro(se for opcional usa o ?)
app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.site);
});

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`
        o que você me enviou foi: ${req.body.nome}    
    `);
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na prota 3000');
});