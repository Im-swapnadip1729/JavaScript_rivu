const name = "Rivu"
const repoCount = 50

// console.log(name + repoCount + " Value");//old methord.

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//String inter polation.

const gameName = new String('hitesh-hc-com')//object

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '_'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));