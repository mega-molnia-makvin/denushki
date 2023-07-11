require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const { USD,AED, KRW,KZT,JPY, EURO,CHF, TRY,ZAR } = require("./model");
const {writeToDb} = require("./write")
const path = require("path");

const port = process.env.port;
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, "ejs-views")));

app.get('/', function(req, res) {
  res.render('index');
});

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({alter: true});
    fetch('https://www.cbr-xml-daily.ru/daily_json.js').then(async(result) => {
      // результат запроса
      if (result.status === 200 && result.ok) {
        // превращение в JSON
          return result.json()
        }
    }).then((JSON_DATA) => {
      writeToDb(JSON_DATA.Valute.USD,USD, JSON_DATA.Valute.EUR.Value)
      writeToDb(JSON_DATA.Valute.EUR,EURO, JSON_DATA.Valute.EUR.Value)
      writeToDb(JSON_DATA.Valute.KZT,KZT, JSON_DATA.Valute.EUR.Value)
      writeToDb(JSON_DATA.Valute.KRW,KRW, JSON_DATA.Valute.EUR.Value)
      writeToDb(JSON_DATA.Valute.JPY,JPY, JSON_DATA.Valute.EUR.Value)
      writeToDb(JSON_DATA.Valute.CHF,CHF, JSON_DATA.Valute.EUR.Value)
      writeToDb(JSON_DATA.Valute.TRY,TRY, JSON_DATA.Valute.EUR.Value)
      writeToDb(JSON_DATA.Valute.ZAR,ZAR, JSON_DATA.Valute.EUR.Value)
      writeToDb(JSON_DATA.Valute.AED,AED, JSON_DATA.Valute.EUR.Value)
    
    }).catch((error) => {
      // обработка ошибок
      console.error('Ошибка получения списка: ', error);
    })
    app.listen(port, () => console.log("Server started on port " + port));
  } catch (e) {
    console.log(e);
  }
};

start();



