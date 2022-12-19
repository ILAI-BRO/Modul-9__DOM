let result = {
	list: []
};

//XML-парсер
const parser = new DOMParser();

//XML
const xmlEntity = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

//Парсинг XML
const xmlDOM = parser.parseFromString(xmlEntity, "text/xml");
const studentsNodes = xmlDOM.querySelectorAll("student");

studentsNodes.forEach((element) => {
	let student = new Object();
	const studentFirst = element.querySelector("first");
	const studentSecond = element.querySelector("second");
	const studentAge = element.querySelector("age");
	const studentProf = element.querySelector("prof");
	const nameNode = element.querySelector("name");
	const nameLang = nameNode.getAttribute("lang");
  
  
	student.name = studentFirst.textContent + ' ' + studentSecond.textContent,
	student.age =  Number(studentAge.textContent),
	student.prof = studentProf.textContent,
	student.lang = nameLang
  
	result.list.push(student);
  
   
});



console.log(result);
