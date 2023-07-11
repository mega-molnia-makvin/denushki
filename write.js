const { USD,
    EURO,
    ZAR,
    KRW,
    KZT,
    JPY,
    CHF,
    TRY,
    AED} = require("./model");

class Write{
    async writeToDb(JSON_DATA, table, EUR) {
    await table.create({
      name: JSON_DATA.Name,
      cost: JSON_DATA.Value,
      eCost: EUR/JSON_DATA.Value, 
    },{fields: ['name','cost','eCost','date']});
    }}

    module.exports = new Write();