const { Team } = require('../database/models');

const getAll = async () => Team.findAll();

module.exports = {
  getAll,
};
