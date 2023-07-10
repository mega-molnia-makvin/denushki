const sequelize = require("./db.js");
const { DataTypes } = require("sequelize");

const USD = sequelize.define("usd", {
  name: { type: DataTypes.STRING },
  cost: { type: DataTypes.REAL },
  eCost: { type: DataTypes.REAL },
  date: { type: DataTypes.DATE },
});

const EURO = sequelize.define("euro", {
  name: { type: DataTypes.STRING },
  cost: { type: DataTypes.REAL },
  eCost: { type: DataTypes.REAL },
  date: { type: DataTypes.DATE },
});

const RUB = sequelize.define("rub", {
  name: { type: DataTypes.STRING },
  cost: { type: DataTypes.REAL },
  eCost: { type: DataTypes.REAL },
  date: { type: DataTypes.DATE },
});

const AED = sequelize.define("aed", {
  name: { type: DataTypes.STRING },
  cost: { type: DataTypes.REAL },
  eCost: { type: DataTypes.REAL },
  date: { type: DataTypes.DATE },
});

const KZT = sequelize.define("kzt", {
  name: { type: DataTypes.STRING },
  cost: { type: DataTypes.REAL },
  eCost: { type: DataTypes.REAL },
  date: { type: DataTypes.DATE },
});

const TRY = sequelize.define("try", {
  name: { type: DataTypes.STRING },
  cost: { type: DataTypes.REAL },
  eCost: { type: DataTypes.REAL },
  date: { type: DataTypes.DATE },
});

const CHF = sequelize.define("chf", {
  name: { type: DataTypes.STRING },
  cost: { type: DataTypes.REAL },
  eCost: { type: DataTypes.REAL },
  date: { type: DataTypes.DATE },
});

const JPY = sequelize.define("jpy", {
  name: { type: DataTypes.STRING },
  cost: { type: DataTypes.REAL },
  eCost: { type: DataTypes.REAL },
  date: { type: DataTypes.DATE },
});

const KRW = sequelize.define("krw", {
  name: { type: DataTypes.STRING },
  cost: { type: DataTypes.REAL },
  eCost: { type: DataTypes.REAL },
  date: { type: DataTypes.DATE },
});

const ZAR = sequelize.define("zar", {
  name: { type: DataTypes.STRING },
  cost: { type: DataTypes.REAL },
  eCost: { type: DataTypes.REAL },
  date: { type: DataTypes.DATE },
});

module.exports = {
  USD,
  EURO,
  RUB,
  ZAR,
  KRW,
  KZT,
  JPY,
  CHF,
  TRY,
  AED
};
