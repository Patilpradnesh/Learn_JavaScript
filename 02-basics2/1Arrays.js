//simple number array 
const MyArr =[1,2,3,5,6]
// simple string array
const MyArr1 =["ram","sham","jam","tom"];
// important part is their is property in console point that : There is   prototype access and in that one more prototype access is present  


// one more method to declear arrays 
 const MyArr2 =new Array(1,2,3,4,5,6,7,8,9,0)

//  console.log(MyArr[0]);
//  console.log(MyArr1[1]);
//  console.log(MyArr2[2]);

//  Array methods()

// add values at end or at any Position
MyArr.push(6);
MyArr.push(7);
MyArr.push(8);

// console.log(MyArr);
// remove errvy time lat element 
MyArr.pop();
// console.log(MyArr);
MyArr.pop();

// unshift add the element at array at the start of the array
MyArr.unshift(9);

// shift operation done the operation of shifting every element toward previous 

MyArr.shift();

// some of the questioner in js that give you only true or false answer
// console.log(MyArr.includes(9));
// console.log(MyArr.indexOf(3));

// 

const newArr =MyArr.join();
// console.log(MyArr);
// it prints same array but it convert into string with comma seprated 
// console.log(newArr);
// console.log(typeof newArr);

// slice , splice 

// console.log("A",MyArr);
// // slice return copy of  section of array
// const myn1 = MyArr .slice(1,3);
// console.log(myn1);
// // -----------------------------------------
// console.log("B",MyArr);
// const myn2 = MyArr.splice(1,3); // in simple word it manipulate original array
// console.log("c",MyArr); // original array is manipulated or changed , it remove the particular portion  of array that mention in splice and write the remaining one 
// console.log(myn2); //

// important concepts regarding development

const Marvel_heros =["ironman","thor","spide"];
const dc_heros =["superman","flash","batman"];

// Marvel_heros.push(dc_heros);
// console.log(Marvel_heros); // print it then you understand
// here the actual part is it add the array inside the array it meant it take array as type and store in side it as element coz in js array can take multipal variable

// for access the value from inside the array element inside element
// console.log(Marvel_heros[3][1]);

// concat method same as push method  but this method do work diffidently it use the new array variable to store the data
// const Hero = Marvel_heros.concat(dc_heros)
// console.log(Hero);

// spreed operator
const all_new = [...Marvel_heros,...dc_heros] //actually it spreed the elements  every element is individual
// console.log(all_new);

const other = [1,2,3,[4,5,6],7,[6,7,[4,5]]]; // rear situation handle by flat -it does what  :->returns a new array with all subarray elements concatenated into it recursively up to the specified depth pass the parameter (Infinity ) for depth inside to go 
const ans = other.flat(2);
const ans1 = other.flat(Infinity);
console.log(ans);
console.log(ans1);

// when we get thee data from other side it came in differnt format like nodelist ,Object,string 
//  but we want arr and we can do loop on array


// Array.isArray("hit"); //it use to check tha is that given string is array
console.log(Array.isArray("hit"));

console.log(Array.from("hits")); //it convert that given string in to Array 

console.log(Array.from({name:"hitesh"}))  // it  give error
// for creating array with it we need to mention that use key or values to create array

let score1 =100;
let score2 =200;
let score3 =300;
let score4 =400;

console.log(Array.of(score1,score2,score3)); // Returns a new array from a set of elements.