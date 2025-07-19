let myDate = new Date();
console.log(myDate);

// use of date for normal format 

console.log(myDate.toString()); // it convert the date in to string format 
console.log(myDate.toDateString());// it convert the date in string without time 
console.log(myDate.toISOString());// it convert the date in to iso format
console.log(myDate.toLocaleString());// it convert the date into local format
console.log(myDate.toJSON()); // nit convert the date in to json 
 
console.log("own date foemat");
let myCreateDate = new Date(2023,10,5);
console.log(myCreateDate); 