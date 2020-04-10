/*
npm/yarn: gerenciador de packages do projeto, usado para instalar bibliotecas
  yarn.lock: Cache sobre as bibliotecas instaladas no projeto

node_modules: repositorio de todas depend�ncias e suas depend�ncias

nodemon: dependencia de desenvolvimento, usado para atualizar a aplica��o quando auterado o fonte em desenvolvimento
*/

//Importando o express
//MicroFramework que ajuda facilitar para cria��o de rotas, criar servidor e colocar  a aplica��o no ar
const express = require('express'); 
//Biblioteca que permitir� a aplica��o a conectar uma base mongo
const mongoose = require('mongoose');
//Importando rotas
const routes = require('./routes');

//As configura��o no node s�o lineares, ent�o a ordem que coloca as importa��o e use importa
const app = express();

mongoose.connect('mongodb+srv://oministack:oministack@cluster0-skvix.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}); //string de conex�o pego no "MongoDB Atlas"
//Criando aplica��o


/*
Configura��o express para dizer para aplica��o que ir� utilizar o json
  "use" configura��o para toda aplica��o
  "get" apenas para comandos get...
Configura��o express para dizer que utilizar� as rotas  
*/
app.use(express.json());
//Configura��o express para dizer que utilizar� as rotas  
app.use(routes);

//Seta o n�mero da porta para localhost:3333
app.listen(3333);

