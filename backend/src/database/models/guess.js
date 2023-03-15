module.exports = (sequelize, DataTypes ) => {
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

  Guess.associate = (models) => {
    Guess.belongsTo(models.User);
    Guess.belongsTo(models.Match);
  };

  return Guess;
};

