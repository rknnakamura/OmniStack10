/*
npm/yarn: gerenciador de packages do projeto, usado para instalar bibliotecas
  yarn.lock: Cache sobre as bibliotecas instaladas no projeto

node_modules: repositorio de todas dependências e suas dependências

nodemon: dependencia de desenvolvimento, usado para atualizar a aplicação quando auterado o fonte em desenvolvimento
*/

//Importando o express
//MicroFramework que ajuda facilitar para criação de rotas, criar servidor e colocar  a aplicação no ar
const express = require('express'); 
//Biblioteca que permitirá a aplicação a conectar uma base mongo
const mongoose = require('mongoose');
//Importando rotas
const routes = require('./routes');

//As configuração no node são lineares, então a ordem que coloca as importação e use importa
const app = express();

mongoose.connect('mongodb+srv://oministack:oministack@cluster0-skvix.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}); //string de conexão pego no "MongoDB Atlas"
//Criando aplicação


/*
Configuração express para dizer para aplicação que irá utilizar o json
  "use" configuração para toda aplicação
  "get" apenas para comandos get...
Configuração express para dizer que utilizará as rotas  
*/
app.use(express.json());
//Configuração express para dizer que utilizará as rotas  
app.use(routes);

//Seta o número da porta para localhost:3333
app.listen(3333);

