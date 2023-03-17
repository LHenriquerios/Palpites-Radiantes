const { StatusCodes } = require('http-status-codes');
const teamService = require('../services/team');

// não precisa do next por conta do rescue
const getAll = async (_req, res) => {
  const teams = await teamService.getAll();
  return res.status(StatusCodes.OK).json(teams);
};

const getById = async (req, res) => {
  const team = await teamService.getById(req.params.id);
  return res.status(StatusCodes.OK).json(team);
};

const createTeam = async (req, res) => {
  const team = await teamService.createTeam(req.body);
  return res.status(StatusCodes.CREATED).json(team);
};

const updateTeam = async (req, res) => {
  const team = await teamService.updateTeam(req.params.id, req.body);
  return res.status(StatusCodes.OK).json(team);
};

const deleteTeam = async (req, res) => {
  await teamService.deleteTeam(req.params.id);
  return res.status(StatusCodes.NO_CONTENT).json(true);
};

module.exports = {
  getAll,
  getById,
  createTeam,
  updateTeam,
  deleteTeam
};
