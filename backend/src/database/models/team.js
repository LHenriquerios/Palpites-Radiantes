module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    timestamps: false,
    tableName: 'teams'
  });

  return Team;
};
