//Importando o express
const express = require('express');

//Criando aplica��o
const app = express();

//Seta rotas para acesso
app.get('/', (request, response) => { //Parametros imbutidos pelo express
    // return response.send('Hello World'); //Envia um testo como resposta
    return response.json({
        message: 'Hello Nakamura'
    }); //Retornando um json
})

//Seta o n�mero da porta para localhost:3333
app.listen(3333);

