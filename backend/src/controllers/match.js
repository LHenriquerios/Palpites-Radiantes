const { StatusCodes } = require('http-status-codes');
const matchService = require('../services/match');

const listAll = async (_req, res) => {
  const matchs = await matchService.listAll();
  return res.status(StatusCodes.OK).json(matchs);
};

const findById = async (req, res) => {
  const match = await matchService.findById(req.params.id);
  return res.status(StatusCodes.OK).json(match);
};

const createMatch = async (req, res) => {
  const match = await matchService.createMatch(req.body);
  return res.status(StatusCodes.CREATED).json(match);
};

const updateMatch = async (req, res) => {
  const match = await matchService.updateMatch(req.params.id, req.body);
  return res.status(StatusCodes.OK).json(match);
};

const deleteMatch = async (req, res) => {
  const match = await matchService.deleteMatch(req.params.id);
  return res.status(StatusCodes.NO_CONTENT).json(match);
};

module.exports = {
  listAll,
  findById,
  createMatch,
  updateMatch,
  deleteMatch
};