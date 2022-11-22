const express = require("express");

const routes = express.Router() //método de rotas do express


//receber informações da URL
routes.get("/", (req, res)=>{
  res.send("hello world");
});



//exportando o mósulo:

module.exports = routes;