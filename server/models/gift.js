'use strict';
module.exports = (sequelize, DataTypes) => {
  const gift = sequelize.define('gift', {
    title: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [1, 99],
          msg: "Invalid length. Must be between 1 and 99 characters."
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [0, 250],
          msg: "Invalid length. Must be less than 250 characters."
        }
      }
    },
    link: {
      type:  DataTypes.STRING,
      validate: {
        isUrl: {
          msg: "Must be url format. Example: https://www.mywebsite.com ."
        }
      }},
    image: DataTypes.STRING,
    isPublic: DataTypes.BOOLEAN
  }, {});
  gift.associate = function(models) {
    gift.belongsToMany(models.user, { through: "usergifts" });
    gift.belongsToMany(models.basket, { through: "giftbaskets" });
  };
  return gift;
};