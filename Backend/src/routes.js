const express = require('express');
const OngController = require('./controllers/OngController');
const IncidenteController = require('./controllers/IncidenteController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/*
Tipos de parâmetros:
- Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação)
- Route Params: Parâmetros utilizados para identificar recursos
- Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/
routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidenteController.index);
routes.post('/incidents', IncidenteController.create);
routes.delete('/incidents/:id', IncidenteController.delete);
routes.get('/profile', ProfileController.index);

module.exports = routes;