const express = require('express')
const route = express.Router()


route.get('/', (req, res) => {
    res.send(`
     <form action="/" method="POST">
     Nome: <input type="text" name="nome">
     <button>Enviar</button>
     </form>
     `); 
 });