const express = require('express') // importar o express para utilizar a biblioteca
const routes = require('./src/routes') // importando as rotas
const db = require("./src/database") //importando o db do index do database

const app = express() //inicializar o servidor (já temos o servidor)
db.hasConection(); //antes das rotas
app.use(routes)

// especificando a porta:

app.listen(3000, () => console.log('servidor rodando na porta 3000')) //método listen passa um callback para saber se o servuidor está rodando
