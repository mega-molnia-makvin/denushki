require("dotenv").config();
const port = process.env.port;
const sequelize = require("./db");
const { USD,AED, KRW,KZT,JPY,RUB, EURO,CHF, TRY,ZAR } = require("./model");
const {writeToDb} = require("./write")

sequelize.authenticate();
sequelize.sync({alter: true});

fetch('https://www.cbr-xml-daily.ru/daily_json.js').then(async(result) => {
  // результат запроса
  if (result.status === 200 && result.ok) {
    // превращение в JSON
      return result.json()
    }
}).then((JSON_DATA) => {
  // вывод данных
  writeToDb(
      USD,
      JSON_DATA.Valute.USD.Name, 
      JSON_DATA.Valute.USD.Value, 
      JSON_DATA.Valute.USD.Value, 
      JSON_DATA.Valute.USD.Date
    );
  writeToDb(
      RUB,
      JSON_DATA.Valute.RUB.Name, 
      JSON_DATA.Valute.RUB.Value, 
      JSON_DATA.Valute.RUB.Value, 
      JSON_DATA.Valute.RUB.Date
    );
  writeToDb(
      EURO,
      JSON_DATA.Valute.EUR.Name, 
      JSON_DATA.Valute.EUR.Value, 
      JSON_DATA.Valute.EUR.Value, 
      JSON_DATA.Valute.EUR.Date
    );
  writeToDb(
      AED,
      JSON_DATA.Valute.AED.Name, 
      JSON_DATA.Valute.AED.Value, 
      JSON_DATA.Valute.AED.Value, 
      JSON_DATA.Valute.AED.Date
    );

}).catch((error) => {
  // обработка ошибок
  console.error('Ошибка получения списка: ', error);
})

