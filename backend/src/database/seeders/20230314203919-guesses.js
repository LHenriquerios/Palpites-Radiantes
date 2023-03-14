/* eslint-disable no-unused-vars */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('guesses', [
      {
        idUser: 1,
        idMatch: 1,
        victoriesTeam1: 2,
        victoriesTeam2: 1,
      },
      {
        idUser: 2,
        idMatch: 2,
        victoriesTeam1: 1,
        victoriesTeam2: 2,
      },
      {
        idUser: 3,
        idMatch: 3,
        victoriesTeam1: 2,
        victoriesTeam2: 0,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('guesses', null, {});
  }
};
