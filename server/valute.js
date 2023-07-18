const { json } = require("sequelize");
const { money } = require("../DB/model");
const path = require("path");
const createPath = (page) => path.resolve(__dirname, 'views', `${page}.ejs`);

class valute {
  async writeToDb(JSON_DATA, EUR) {
    await money.create({
      name: JSON_DATA.Name,
      cost: JSON_DATA.Value,
      eCost: EUR / JSON_DATA.Value,
    }, { fields: ['name', 'cost', 'eCost'] });
  }

  async reWriteToDb(JSON_DATA, EUR) {
    const valute = await money.findOne({ where: { name: JSON_DATA.Name } });
    valute.update({
      cost: JSON_DATA.Value,
      eCost: EUR / JSON_DATA.Value
    })
  }
  async getValute(req, res) {
    //return {'hucduh': 'njsicj'};
    const valute = await money.findOne({ where: { id: 1 } });
    console.log({ "name": valute.dataValues.name, "cost": valute.dataValues.cost, "eCost": valute.dataValues.eCost });
    return json({"name": valute.dataValues.name, "cost": valute.dataValues.cost, "eCost": valute.dataValues.eCost});
    //res.render(createPath('index'), {"name": valute.dataValues.name, "cost": valute.dataValues.cost, "eCost": valute.dataValues.eCost});
    // res.redirect("/")
  }
}

module.exports = new valute();








