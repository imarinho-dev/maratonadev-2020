// Configurando o Servidor
const express = require("express");
const server = express();
const PORT = 3000;

// Configurar o servidor para apresentar arquivos estáticos
server.use(express.static("public"));

// Habilitar body do formulário

server.use(express.urlencoded({
  extended: true
}));

// Configurando a template engine
const nunjucks = require("nunjucks");
nunjucks.configure("./", {
  express: server,
  noCache: true
});

// Lista de doadores: Vetor ou Array
const donors = [{
    name: "Diego Fernandes",
    blood: "AB+"
  },
  {
    name: "Cleiton Souza",
    blood: "B+"
  },
  {
    name: "Robson Marques",
    blood: "A+"
  },
  {
    name: "Mayk Brito",
    blood: "O+"
  }
];

// Configurar a apresentação da página
server.get("/", (req, res) => {
  return res.render("index.html", {
    donors
  });
});

server.post("/", (req, res) => {
  // pegar dados do formulário.
  const name = req.body.name;
  const email = req.body.email;
  const blood = req.body.blood;

  // Coloco valores dentro do Array
  donors.push({
    name: name,
    blood: blood
  });

  return res.redirect("/");
})

// Ligar o servidor e permitir o acesso na porta 3000
server.listen(PORT, () => {
  console.log("Iniciei o servidor.");
});