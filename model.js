const sequelize = require("./db.js");
const { DataTypes } = require("sequelize");

const USD = sequelize.define("usd", {
  name: { type: DataTypes.STRING },
  cost: { type: DataTypes.REAL },
  eCost: { type: DataTypes.REAL },
});

const EURO = sequelize.define("euro", {
  name: { type: DataTypes.STRING },
  cost: { type: DataTypes.REAL },
  eCost: { type: DataTypes.REAL },
});

const AED = sequelize.define("aed", {
  name: { type: DataTypes.STRING },
  cost: { type: DataTypes.REAL },
  eCost: { type: DataTypes.REAL },
});

const KZT = sequelize.define("kzt", {
  name: { type: DataTypes.STRING },
  cost: { type: DataTypes.REAL },
  eCost: { type: DataTypes.REAL },
});

const TRY = sequelize.define("try", {
  name: { type: DataTypes.STRING },
  cost: { type: DataTypes.REAL },
  eCost: { type: DataTypes.REAL },
});

const CHF = sequelize.define("chf", {
  name: { type: DataTypes.STRING },
  cost: { type: DataTypes.REAL },
  eCost: { type: DataTypes.REAL },
});

const JPY = sequelize.define("jpy", {
  name: { type: DataTypes.STRING },
  cost: { type: DataTypes.REAL },
  eCost: { type: DataTypes.REAL },
});

const KRW = sequelize.define("krw", {
  name: { type: DataTypes.STRING },
  cost: { type: DataTypes.REAL },
  eCost: { type: DataTypes.REAL },
});

const ZAR = sequelize.define("zar", {
  name: { type: DataTypes.STRING },
  cost: { type: DataTypes.REAL },
  eCost: { type: DataTypes.REAL },
});

module.exports = {
  USD,
  EURO,
  ZAR,
  KRW,
  KZT,
  JPY,
  CHF,
  TRY,
  AED
};
