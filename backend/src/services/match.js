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

module.exports = {
  listAll,
};
