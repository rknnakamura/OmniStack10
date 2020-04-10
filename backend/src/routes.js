const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
const routes = Router();

//Seta rotas para acesso
// Métodos HTTP: GET, POST, PUT, DELETE (Aplicações Restfull) 
/* 
  QueryParams: request.query (usado em request GET, incorporados na URLs, filtros, ordenação, paginação, ...)
*/
routes.get('/devs', DevController.index);

/*
Route Params: request.params (Informação que fica na rota, usado para identificar um recurso na alteração ou remoção, exemplo mandar um id para editar ou excluir (PUT e DELETE))
*/
routes.put('/users/:id', (request, response) => {
  console.log(request.params);
  return response.json({
      message: 'Atualizado'
  }); //Retornando um json
});

/*
Body: request.body (Dados para alteração ou criação de registros POST enviar um corpo da requisição)
*/
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

//Exportar as rotas
module.exports = routes;