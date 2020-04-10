const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
const routes = Router();

//Seta rotas para acesso
// M�todos HTTP: GET, POST, PUT, DELETE (Aplica��es Restfull) 
/* 
  QueryParams: request.query (usado em request GET, incorporados na URLs, filtros, ordena��o, pagina��o, ...)
*/
routes.get('/devs', DevController.index);

/*
Route Params: request.params (Informa��o que fica na rota, usado para identificar um recurso na altera��o ou remo��o, exemplo mandar um id para editar ou excluir (PUT e DELETE))
*/
routes.put('/users/:id', (request, response) => {
  console.log(request.params);
  return response.json({
      message: 'Atualizado'
  }); //Retornando um json
});

/*
Body: request.body (Dados para altera��o ou cria��o de registros POST enviar um corpo da requisi��o)
*/
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

//Exportar as rotas
module.exports = routes;