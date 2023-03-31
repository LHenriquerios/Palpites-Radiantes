const { StatusCodes } = require('http-status-codes');
const guessService = require('../services/guess');

const listAll = async (_req, res) => {
  const guesses = await guessService.listAll();
  res.status(StatusCodes.OK).json(guesses);
};

module.exports = {
  listAll,
};
