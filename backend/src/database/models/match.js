module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('Match', {
    idTeam1: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idTeam2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    victoriesTeam1: DataTypes.INTEGER,
    victoriesTeam2: DataTypes.INTEGER
  }, {
    timestamps: false,
    tableName:'matches'
  });
  
  Match.associate = models => {
    Match.belongsTo(models.Team, {
      foreignKey: 'idTeam1',
      as: 'team1'
    });
  
    Match.belongsTo(models.Team, {
      foreignKey: 'idTeam2',
      as: 'team2'
    });
  };
  
  return Match;
};