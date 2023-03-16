'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        username: 'Guneko',
        email: 'guneko@example.com',
        password: '123456',
        points: 10,
      },
      {
        username: 'LaneBoy',
        email: 'laneboy@example.com',
        password: '123456',
        points: 20,
      },
      {
        username: 'Draft5',
        email: 'draft5@example.com',
        password: '123456',
        points: 5,
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};