const express = require('express');
const rescue = require('express-rescue');
const teamController = require('../controllers/team');
const teamRouter = express.Router();

teamRouter.get('/', rescue(teamController.getAll));

module.exports = teamRouter;