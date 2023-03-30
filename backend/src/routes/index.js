const express = require('express');
const teamRouter = require('./teamRouter');
const userRouter = require('./userRouter');
const matchRouter = require('./matchRouter');

const router = express.Router();

router.use('/team', teamRouter);
router.use('/user', userRouter);
router.use('/match', matchRouter);

module.exports = router;