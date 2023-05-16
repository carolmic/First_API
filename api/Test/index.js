const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send('Seja bem vindo ao meu app!')
})

app.get('/sobre', function(req, res) {
    res.send('Página sobre')
})

app.get('/ola/:nome/', function(req, res) {
    res.send('Ola')
})
app.listen(8081, function() {
    console.log("Servidor rodando na url http//localhost:8081")
});