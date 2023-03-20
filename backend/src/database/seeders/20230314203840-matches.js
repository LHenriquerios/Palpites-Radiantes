'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('matches', [
      {
        team1_id: 1,
        team2_id: 2,
        team1_wins: 2,
        team2_wins: 1,
      },
      {
        team1_id: 3,
        team2_id: 1,
        team1_wins: 1,
        team2_wins: 2,
      },
      {
        team1_id: 2,
        team2_id: 3,
        team1_wins: 2,
        team2_wins: 0,
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('matches', null, {});
  }
};