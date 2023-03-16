'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('matches', [
      {
        idTeam1: 1,
        idTeam2: 2,
        victoriesTeam1: 2,
        victoriesTeam2: 1,
      },
      {
        idTeam1: 3,
        idTeam2: 1,
        victoriesTeam1: 1,
        victoriesTeam2: 2,
      },
      {
        idTeam1: 2,
        idTeam2: 3,
        victoriesTeam1: 2,
        victoriesTeam2: 0,
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('matches', null, {});
  }
};