'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('guesses', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      idUser: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      idMatch: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'matches',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      victoriesTeam1: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      victoriesTeam2: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('guesses');
  },
};
