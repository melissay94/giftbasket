'use strict';
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: "Invalid email address"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [12, 99],
          msg: "Invalid password length. Must be between 12 and 99 characters"
        }
      },
      is: {
        args: /(?=.*?[0-9])(?=.*?[A-Z])(?=.*[a-z]).+/,
        msg: "Missing neccessary password characters. Please include at least one lowercase letter, one uppercase letter, one number, and one special character."
      }
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [0, 99],
          msg: "Invalid length. Name must not exceed 99 characters."
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (createdUser, options) => {
        if (createdUser && createdUser.password) {
          const hash = bcrypt.hashSync(createdUser.password, 10);
          createdUser.password = hash;
        }
      }
    }
  });

  user.associate = function(models) {
    user.belongsToMany(models.gift, { through: "usergifts" });
    user.hasMany(models.basket);
  };

  user.prototype.validPassword = function(passwordTyped) {
    return bcrypt.compareSync(passwordTyped, this.password);
  };

  user.prototype.toJSON = function() {
    let userData = this.get();
    delete userData.password;
    return userData;
  }

  return user;
};