require("dotenv").config();
const port = process.env.port;

const sequelize = require("./db");

const { mon} = require("./model");

sequelize.authenticate();
sequelize.sync({alter: false});

fetch('https://www.cbr-xml-daily.ru/daily_json.js').then(async(result) => {
  // результат запроса
  if (result.status === 200 && result.ok) {
    // превращение в JSON
      return result.json()
    }
}).then((JSON_DATA) => {
  // вывод данных
  //console.log('Список получен: ', JSON_DATA.Valute.USD.Name);
  const write = async () =>{
  await mon.create({
    name: JSON_DATA.Valute.USD.Name, 
    cost: JSON_DATA.Valute.USD.Value, 
    eCost: JSON_DATA.Valute.USD.Value, 
    date: JSON_DATA.Valute.USD.Date,
  },{fields: ['name','cost','eCost','date']});
  }

}).catch((error) => {
  // обработка ошибок
  console.error('Ошибка получения списка: ', error);
})

