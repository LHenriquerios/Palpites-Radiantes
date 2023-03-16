'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('teams', [
      {
        name: 'Sentinels',
      },
      {
        name: 'Loud',
      },
      {
        name: 'Furia',
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('teams', null, {});
  }
};
