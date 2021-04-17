'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cashflow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Cashflow.init({
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: {
        args: true,
        msg: "The email account already exists"
      },
      validate: {
        isEmail: {
          msg: "Invalid format email"
        }
      }
    },
    income : {
      type : DataTypes.DOUBLE,
      validate : {
        min : {
          args : [1],
          msg : "Minimum income is Rp1"
        },
        isNumeric: {
          msg: "Invalid format"
        }
      }
    },
    outcome : {
      type : DataTypes.DOUBLE,
      validate : {
        min : {
          args : [1],
          msg : "Minimum outcome is Rp1"
        },
        isNumeric: {
          msg: "Invalid format"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Cashflow',
  });
  return Cashflow;
};