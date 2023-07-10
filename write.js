const { USD,
    EURO,
    RUB,
    ZAR,
    KRW,
    KZT,
    JPY,
    CHF,
    TRY,
    AED} = require("./model");

class Write{
    async writeToDb(table, name, cost, eCost, date) {
    await table.create({
      name: name,
      cost: cost, 
      eCost: eCost, 
      date: date,
    },{fields: ['name','cost','eCost','date']});
    }}

    module.exports = new Write();