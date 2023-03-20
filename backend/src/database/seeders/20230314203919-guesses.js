'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('guesses', [
      {
        user_id: 1,
        match_id: 1,
        team1_wins_guess: 2,
        team2_wins_guess: 1,
      },
      {
        user_id: 2,
        match_id: 2,
        team1_wins_guess: 1,
        team2_wins_guess: 2,
      },
      {
        user_id: 3,
        match_id: 3,
        team1_wins_guess: 2,
        team2_wins_guess: 0,
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('guesses', null, {});
  }
};