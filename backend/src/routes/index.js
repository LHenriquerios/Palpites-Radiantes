const express = require('express');
const teamRouter = require('./teamRoute');
const userRouter = require('./userRouter');

const router = express.Router();

router.use('/team', teamRouter);
router.use('/user', userRouter);

module.exports = router;