const express = require('express');
const teamRouter = require('./teamRouter');
const userRouter = require('./userRouter');
const matchRouter = require('./matchRouter');
const guessRouter = require('./guessRouter');

const router = express.Router();

router.use('/team', teamRouter);
router.use('/user', userRouter);
router.use('/match', matchRouter);
router.use('/guess', guessRouter);

module.exports = router;