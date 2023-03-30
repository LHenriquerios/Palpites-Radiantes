const express = require('express');
const rescue = require('express-rescue');
const matchController = require('../controllers/match');
const matchRouter = express.Router();

matchRouter.get('/', rescue(matchController.listAll));
matchRouter.get('/:id', rescue(matchController.getById));
matchRouter.post('/', rescue(matchController.createMatch));
matchRouter.put('/:id', rescue(matchController.updateMatch));
matchRouter.delete('/:id', rescue(matchController.deleteMatch));

module.exports = matchRouter;
