const sequelize = require("./db.js");
const { DataTypes } = require("sequelize");

const mon = sequelize.define("money", {
  name: { type: DataTypes.STRING },
  cost: { type: DataTypes.INTEGER },
  eCost: { type: DataTypes.INTEGER },
  date: { type: DataTypes.DATE },
});

module.exports = {
  mon,
};
