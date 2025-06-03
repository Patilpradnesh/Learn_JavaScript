const name="patil "
const repoCount=50;
console.log("{"+name+ repoCount+ "} this is data");
console.log(`hello my repo count is ${repoCount} and my name is ${name}`);


const gameName = new String('pradnesh-patil')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log (gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('l'));

const newString1 =gameName.substring(0,6);
console.log(newString1)

const newString2 =gameName.substring(8,12);
console.log(newString2)

const newString3 =gameName.slice(-5,8);
console.log(newString3)

