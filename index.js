const express = require('express');

const app = express();

app.get('/teste', (req, res)=>{
    res.send('testeeeaaeaeeae');
});

app.listen(3000,()=>{
    console.log("servidor http rodando em: http://localhost:3000");
});