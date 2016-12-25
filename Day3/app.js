var person = require('./person');

console.log(person.name);
console.log(person.age);
person.sayHI();

for(var i in person.skillList) {
	console.log(person.skillList[i]);
}