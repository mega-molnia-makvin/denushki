const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
  process.env.dbName,
  process.env.dbUser,
  process.env.password,

  {
    dialect: "postgres",
    host: process.env.dbHost,
    port: process.env.dbPort,
    define:{
      freezeTableName: true,
      },
  },
  
);