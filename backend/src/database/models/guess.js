const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./User');
const Match = require('./Match');

const Guess = sequelize.define('Guess', {
  victoriesTeam1: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  victoriesTeam2: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Guess.belongsTo(User);
Guess.belongsTo(Match);

module.exports = Guess;
