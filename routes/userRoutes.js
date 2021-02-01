const express = require('express');
const UserController = require('../controllers/UserController');
const api = express.Router();

/**
 * POST: Para insertar datos y enviar datos sensibles
 * GET: Para obtener datos
 * PUT: Modificar datos
 * DELETE: Eliminar informacion
 */

 api.get('/saludar', (req, res) => {
    console.log('Llego a la ruta saludar...');
 });

api.post('/', UserController.create);
api.put('/:idUser', UserController.update);
api.delete('/:idUser', UserController.remove);
api.get('/allUsers/:role', UserController.getAllUsers);

 module.exports = api;