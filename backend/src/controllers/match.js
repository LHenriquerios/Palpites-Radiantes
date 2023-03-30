const { StatusCodes } = require('http-status-codes');
const matchService = require('../services/match');

const listAll = async (_req, res) => {
  const teams = await matchService.listAll();
  return res.status(StatusCodes.OK).json(teams);
};

module.exports = {
  listAll,
};