module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('Match', {
    team1Wins: DataTypes.INTEGER,
    team2Wins: DataTypes.INTEGER
  }, {
    timestamps: false,
    underscored: true,
    tableName:'matches'
  });
  
  Match.associate = (models) => {
    Match.belongsTo(models.Team, { foreignKey: 'team1Id', as: 'team1' });
    Match.belongsTo(models.Team, { foreignKey: 'team2Id', as: 'team2' });
  };
  
  return Match;
};