'use strict';
module.exports = (sequelize, DataTypes) => {
  const usergift = sequelize.define('usergift', {
    user_id: DataTypes.INTEGER,
    gift_id: DataTypes.INTEGER
  }, {});
  usergift.associate = function(models) {
    // associations can be defined here
  };
  return usergift;
};