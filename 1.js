const xmlString=`
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

function xmlObject(xml){
  let parser = new DOMParser();
  let xmlDom=parser.parseFromString(xmlString,"text/xml");
  let studentNode=xmlDom.querySelectorAll('student')

  let list=[];
  let listNode={list};

  for(student of studentNode){
    let nameNode = student.querySelector('name');
		let firstNode = nameNode.querySelector('first').textContent;
		let secondNode = nameNode.querySelector('second').textContent;
		let lang = nameNode.getAttribute('lang');
		let age = +student.querySelector('age').textContent;
		let prof = student.querySelector('prof').textContent;

    list.push({name: firstNode+' '+secondNode,age,prof,lang})
  }
  return listNode;
}
console.log(xmlObject(xmlString));