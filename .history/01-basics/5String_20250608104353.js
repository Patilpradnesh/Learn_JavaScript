const nameOfGit="PatilPradensh@4124";
const repoCount=50;

console.log("using simple concatenating format of printing which is old ")
console.log(nameOfGit+ " and its repo count is "+repoCount);
console.log("using latest method string interpolation")
console.log(`${nameOfGit} and its repo count is ${repoCount}`);


const gameName = new String ('patil-Pradnesh-chetan');
console.log(gameName);

console.log(gameName[4]);
console.log(gameName.length);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));

console.log(gameName.indexOf('a'));


const newString = gameName.substring(0,4)
console.log(newString);
const neString = gameName.slice(0,4)
console.log(neString);
const nString = gameName.slice(-6,3)
console.log(nString);

const newstring1= "    hitesh    ";
console.log(newstring1);
console.log(newstring1.trim());
console.log(newstring1.trimStart());
console.log(newstring1.trimEnd());


const url= "https://patilwebs%20goodweb";
console.log(url.replace('%20','__'));
console.log(url.includes('patil'));
// it use to split the string into array based on the given separator
console.log(gameName.split('-'));




const data = "hey Patil its charecture at method of string";
let newData = data.charCodeAt(4);
console.log(newData);
