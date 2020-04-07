'use strict';
module.exports = (sequelize, DataTypes) => {
  const giftbasket = sequelize.define('giftbasket', {
    gift_id: DataTypes.INTEGER,
    basket_id: DataTypes.INTEGER
  }, {});
  giftbasket.associate = function(models) {
    // associations can be defined here
  };
  return giftbasket;
};