'use strict';
module.exports = (sequelize, DataTypes) => {
  const basket = sequelize.define('basket', {
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [1, 99],
          message: "Invalid length. Name must be between 1 and 99 characters."
        }
      }},
    birthdate: DataTypes.DATE,
    address: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  basket.associate = function(models) {
    models.basket.belongsToMany(models.gift, { through: "giftbaskets" });
    models.basket.hasMany(models.gift);
    models.basket.belongsTo(models.user);
  };
  return basket;
};