module.exports = (sequelize, DataTypes ) => {
  const Guess = sequelize.define('Guess', {
    team1WinsGuess: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    team2WinsGuess: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,
    underscored: true,
    tableName:'guesses'
  });
  
  Guess.associate = (models) => {
    Guess.belongsTo(models.User, { foreignKey: 'userId' });
    Guess.belongsTo(models.Match, { foreignKey: 'matchId' });
  };
  
  return Guess;
};
  