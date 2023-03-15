const express = require('express');
const rescue = require('express-rescue');
const teamController = require('../controllers/team');
const teamRouter = express.Router();

teamRouter.post('/', rescue(teamController.createTeam));
teamRouter.get('/', rescue(teamController.getAllTeams));
teamRouter.get('/:id', rescue(teamController.getTeamById));
teamRouter.put('/:id',  rescue(teamController.updateTeam));
teamRouter.delete('/:id', rescue(teamController.deleteTeam));

module.exports = teamRouter;