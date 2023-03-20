'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      team1Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'teams', key: 'id' },
        field: 'team1_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      team2Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'teams', key: 'id' },
        field: 'team2_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      team1Wins: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'team1_wins',
        defaultValue: 0
      },
      team2Wins: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'team2_wins',
        defaultValue: 0
      }
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('matches');
  }
};