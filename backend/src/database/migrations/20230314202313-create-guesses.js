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
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        field: 'user_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      matchId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'matches',
          key: 'id',
        },
        field: 'match_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      team1WinsGuess: {
        type: Sequelize.INTEGER,
        field: 'team1_wins_guess',
        defaultValue: 0
      },
      team2WinsGuess: {
        type: Sequelize.INTEGER,
        field: 'team2_wins_guess',
        defaultValue: 0
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('guesses');
  },
};