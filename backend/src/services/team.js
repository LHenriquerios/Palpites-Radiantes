const { StatusCodes } = require('http-status-codes');
const { Team } = require('../database/models');

const getAll = async () => Team.findAll();

const getById = async (id) => Team.findByPk(id);

const createTeam = async (payload) => {
  const { name } = payload;
  const team = await Team.findOne({ where: { name } });
  if (team) {
    const error = { status: StatusCodes.CONFLICT, message: 'Team already registered' };
    throw error;
  }
  const createdTeam = await Team.create(payload);
  return createdTeam;
};

const updateTeam = async (id, payload) => {
  const { name } = payload;
  const [teamUpdated] = await Team.update({ name }, { where: { id } });
  if (!teamUpdated) {
    const error = { status: StatusCodes.NOT_FOUND, message: 'Not Found or equal' };
    throw error;
  }

  return getById(id);
};

const deleteTeam = async (id) => {
  const team = await getById(id);
  await team.destroy();
};


module.exports = {
  getAll,
  getById,
  createTeam,
  updateTeam,
  deleteTeam
};
