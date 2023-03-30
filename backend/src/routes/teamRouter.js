const express = require('express');
const rescue = require('express-rescue');
const teamController = require('../controllers/team');
const teamRouter = express.Router();

teamRouter.get('/', rescue(teamController.getAll));
teamRouter.get('/:id', rescue(teamController.getById));
teamRouter.post('/', rescue(teamController.createTeam));
teamRouter.put('/:id', rescue(teamController.updateTeam));
teamRouter.delete('/:id', rescue(teamController.deleteTeam));

module.exports = teamRouter;
