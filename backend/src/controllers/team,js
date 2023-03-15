const { StatusCodes } = require('http-status-codes');
const teamService = require('../services/team');

// não precisa do next e try catch por conta do rescue
exports.createTeam = async (req, res) => {
  await teamService.create(req.body);
  res.status(StatusCodes.CREATED).json({ message: 'Nova equipe cadastrada' });
};

exports.getAllTeams = async (_req, res) => {
  const teams = await teamService.getAll();
  res.status(StatusCodes.OK).json(teams);
};

exports.getTeamById = async (req, res) => {
  const team = await teamService.getTeamById(req.params.id);
  res.status(StatusCodes.OK).json(team);
};

exports.updateTeam = async (req, res) => {
  const team = await teamService.update(req.params.id, req.body);
  res.status(StatusCodes.OK).json(team);
};

exports.deleteTeam = async (req, res) => {
  await teamService.delete(req.params.id);
  res.status(StatusCodes.NO_CONTENT).json({ success: true });
};
