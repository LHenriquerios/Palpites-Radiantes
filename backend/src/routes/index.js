const express = require('express');
const teamRouter = require('./teamRoute');

const router = express.Router();

router.use('/team', teamRouter);

module.exports = router;