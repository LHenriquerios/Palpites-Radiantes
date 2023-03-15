const { StatusCodes } = require('http-status-codes');
const { Team } = require('../database/models');

const createTeam = async (name) => {
  const team = await Team.findOne({ where: { name } });
  if (team) {
    const error = { status: StatusCodes.CONFLICT, message: 'Team already registered' };
    throw error;
  }
  return Team.create({ name });
};

const getAllTeams = async () => {
  console.log(Team);
  const teams = await Team.findAll();
  return teams;
};

const getTeamById = async (id) => await Team.findByPk(id);

const updateTeam = async (id, name) => {
  const [, [team]] = await Team.update({ name }, { where: { id }, returning: true });
  return team;
};

const deleteTeam = async (id) => {
  const team = await getTeamById(id);
  await team.destroy();
};

module.exports = {
  createTeam,
  getAllTeams,
  getTeamById,
  updateTeam,
  deleteTeam,
};
