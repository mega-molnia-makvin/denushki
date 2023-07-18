const sequelize = require("./db.js");
const { DataTypes, Model, Optional, update } = require("sequelize");

const money = sequelize.define("money", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  cost: { type: DataTypes.REAL },
  eCost: { type: DataTypes.REAL },
});

module.exports = {
  money
};
