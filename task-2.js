// JSON
const jsonString = `
{
	"list": [
	 {
	  "name": "Petr",
	  "age": "20",
	  "prof": "mechanic"
	 },
	 {
	  "name": "Vova",
	  "age": "60",
	  "prof": "pilot"
	 }
	]
   }
   `;
    
function changeJson(stringJson) {
  // Получение данных
  const data = JSON.parse(stringJson);

  const list = data.list;
  
  let result = {list:[]};
  let obj = new Object();
  
  list.forEach ((element) => {
    obj = element;
    result.list.push(obj)
    
  })
  console.log(result)
  
}

changeJson(jsonString);
