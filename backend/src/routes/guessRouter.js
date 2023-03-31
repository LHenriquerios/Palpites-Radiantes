const express = require('express');
const rescue = require('express-rescue');
const guessController = require('../controllers/guess');
const guessRouter = express.Router();

guessRouter.get('/', rescue(guessController.listAll));
guessRouter.get('/:id', rescue(guessController.findById));
guessRouter.post('/', rescue(guessController.createguess));
guessRouter.put('/:id', rescue(guessController.updateguess));
guessRouter.delete('/:id', rescue(guessController.deleteguess));

module.exports = guessRouter;
