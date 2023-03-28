const express = require('express');

const app = express();

app.use (express.json());

app.listen(3000,()=>{
    console.log("servidor http rodando em: http://localhost:3000");
});