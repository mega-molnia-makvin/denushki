require("dotenv").config();

const { money } = require("../DB/model");
const cors = require("cors");


const express = require("express");
const sequelize = require("../DB/db");
const { writeToDb, getValute, reWriteToDb } = require("./valute")
const path = require("path");

const port = process.env.port;
const app = express();

app.use(cors());

//app.use(express.json());
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, "views")));  //доступ ко всему, что подключается к страницам в ejs

app.get('/', (req, res)=>{
  res.render("index");
} )

app.get('/getValute', async (req, res) => {
  try {
  // Извлечение всех данных из таблицы
  i=1;
  let valute=new Array();
  while (i<10){
  let data = await money.findOne({where: {id: i}});
  valute[i] = data.dataValues;
  i++;
  }
  // Формирование HTML-страницы с данными из базы данных
  const html = `
  <table>
  <thead>
  <tr>
  <th>name</th>
  <th>cost</th>
  <th>eCost</th>
  <th>date</th>
  <th>Update</th>
  </tr>
  </thead>
  <tbody>
  ${valute.map(row => `
<tr>
<td>${row.name}</td>
<td>${row.cost}</td>
<td>${row.eCost}</td>
<td>${row.createdAt}</td>
<td>${row.updatedAt}</td>
</tr>
`).join('')}
  </tbody>
  </table>
  `;
  return res.send(html);
  } catch (error) {
  console.error('Ошибка:', error);
  res.status(500).send('Внутренняя ошибка сервера');
  }
  });


const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    // fetch('https://www.cbr-xml-daily.ru/daily_json.js').then(async(result) => {
    //   // результат запроса
    //   if (result.status === 200 && result.ok) {
    //     // превращение в JSON
    //       return result.json()
    //     }
    // }).then((JSON_DATA) => {
    //   writeToDb(JSON_DATA.Valute.USD, JSON_DATA.Valute.EUR.Value)
    //   writeToDb(JSON_DATA.Valute.EUR, JSON_DATA.Valute.EUR.Value)
    //   writeToDb(JSON_DATA.Valute.KZT, JSON_DATA.Valute.EUR.Value)
    //   writeToDb(JSON_DATA.Valute.KRW, JSON_DATA.Valute.EUR.Value)
    //   writeToDb(JSON_DATA.Valute.JPY, JSON_DATA.Valute.EUR.Value)
    //   writeToDb(JSON_DATA.Valute.CHF, JSON_DATA.Valute.EUR.Value)
    //   writeToDb(JSON_DATA.Valute.TRY, JSON_DATA.Valute.EUR.Value)
    //   writeToDb(JSON_DATA.Valute.ZAR, JSON_DATA.Valute.EUR.Value)
    //   writeToDb(JSON_DATA.Valute.AED, JSON_DATA.Valute.EUR.Value)

    // }).catch((error) => {
    //   // обработка ошибок
    //   console.error('Ошибка получения списка: ', error);
    // })
    app.listen(port, () => console.log("Server started on port " + port));
  } catch (e) {
    console.log(e);
  }

  // const updateDb = async ()=>{
  //   fetch('https://www.cbr-xml-daily.ru/daily_json.js').then(async(result)=>{
  //   if(result.status===200 && result.ok){
  //       return result.json();

  //   }
  //   }).then((JSON_DATA)=>{
  //       reWriteToDb(JSON_DATA.Valute.USD, JSON_DATA.Valute.EUR.Value)
  //       reWriteToDb(JSON_DATA.Valute.EUR, JSON_DATA.Valute.EUR.Value)
  //       reWriteToDb(JSON_DATA.Valute.KZT, JSON_DATA.Valute.EUR.Value)
  //       reWriteToDb(JSON_DATA.Valute.KRW, JSON_DATA.Valute.EUR.Value)
  //       reWriteToDb(JSON_DATA.Valute.JPY, JSON_DATA.Valute.EUR.Value)
  //       reWriteToDb(JSON_DATA.Valute.CHF, JSON_DATA.Valute.EUR.Value)
  //       reWriteToDb(JSON_DATA.Valute.TRY, JSON_DATA.Valute.EUR.Value)
  //       reWriteToDb(JSON_DATA.Valute.ZAR, JSON_DATA.Valute.EUR.Value)
  //       reWriteToDb(JSON_DATA.Valute.AED, JSON_DATA.Valute.EUR.Value)
  //     }).catch((error)=>{
  //         console.error("Ошибка", error)
  //     })
  //  }
  //  setInterval(updateDb,10000)


};

start();



