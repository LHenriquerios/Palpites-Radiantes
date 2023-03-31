const { StatusCodes } = require('http-status-codes');
const { Match, Team } = require('../database/models');

const listAll = async () => Match.findAll({
  include: [{
    model: Team,
    as: 'team1',
  }, {
    model: Team,
    as: 'team2',
  }],
});

const findById = async (id) => {
  return Match.findByPk(id, {
    include: [{
      model: Team,
      as: 'team1',
    }, {
      model: Team,
      as: 'team2',
    }],
  });
};

const createMatch = async (payload) => {
  const { team1Id, team2Id } = payload;
  const match = await Match.findOne({ where: { team1Id, team2Id } });
  if (match) {
    const error = { status: StatusCodes.CONFLICT, message: 'Match already registered' };
    throw error;
  }
  return Match.create(payload);
};

const updateMatch = async (id, payload) => {
  const [match] = await Match.update(payload, { where: { id } });
  if (!match) {
    const error = { status: StatusCodes.NOT_FOUND, message: 'Match not found or equal' };
    throw error;
  }
  return findById(id);
};

const deleteMatch = async (id) => {
  const match = await findById(id);
  if (!match) {
    const error = { status: StatusCodes.NOT_FOUND, message: 'Match not found' };
    throw error;
  }
  return Match.destroy({ where: { id } });
};

module.exports = {
  listAll,
  findById,
  createMatch,
  updateMatch,
  deleteMatch
};
