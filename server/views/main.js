
function valute(){
    const { money } = require("../../DB/model");
    i=1;
    let valute=new Array();
    while (i<10){
    let data = money.findOne({where: {id: i}});
    valute[i] = data.dataValues;
    i++;}
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
return html;

        }