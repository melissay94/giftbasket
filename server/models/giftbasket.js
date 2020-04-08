'use strict';
module.exports = (sequelize, DataTypes) => {
  const giftbasket = sequelize.define('giftbasket', {
    giftId: DataTypes.INTEGER,
    basketId: DataTypes.INTEGER,
    isPurchased: DataTypes.BOOLEAN
  }, {});
  giftbasket.associate = function(models) {
    // associations can be defined here
  };
  return giftbasket;
};