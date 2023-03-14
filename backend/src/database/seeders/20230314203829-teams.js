/* eslint-disable no-unused-vars */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
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

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('teams', null, {});
  }
};
