//express é um framework para criar servidorees web
//explicações web com node.js
const express = require('express');
const cors = require('cors');
// cors é um pacote que permite que o servidor aceite requisições de outros domínios
const app = express();

app.use(cors());
app.use(express.json());

const conexao = require('./conexao');

app.listen(3000, () => {
    console.log('servidor iniciado');
});
