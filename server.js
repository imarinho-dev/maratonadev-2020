// Configurando o Servidor
const express = require("express");
const server = express();
const PORT = 3000;

// Configurar o servidor para apresentar arquivos estáticos
server.use(express.static("public"));

// Configurando a template engine
const nunjucks = require("nunjucks");
nunjucks.configure("./", {
  express: server
});

// Configurar a apresentação da página
server.get("/", (req, res) => {
  return res.render("index.html");
});

// Ligar o servidor e permitir o acesso na porta 3000
server.listen(PORT, () => {
  console.log("Iniciei o servidor.");
});
