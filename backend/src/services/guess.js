const { Guess } = require('../database/models');

const listAll = async () => Guess.findAll();

module.exports = {
  listAll,
};
