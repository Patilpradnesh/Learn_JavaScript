//if statement 
// condition is true then execute the code else outer code execution 
//syntax
// if(condition==true){

// }

// operators 
// < ,> ,<=, >=, ==, !=, ===( strict it check data type also equal), !==(it check data type also not equal)

// if(condition == true){
//     // code to execute if condition is true
// }else{
//     // code to execute if condition is false
// }

const score =200;
if(score >100){
    const power ="fly"
    //console.log(`user power is ${power}`);
}

// console.log(`this is outside the if block, power is not accessible here ${power}`); // variable is not accessible outside the block/scope where it is defined inside the scope of if block
// there is exception for this in js that var keyword is accessible outside the block but  it is not recommended to use var keyword in modern js

// sort hand notations 
const balance = 1000;
if(balance>500) console.log("test"); // with out curly braces but execute only this single line of code


// if-else statement
const age = 18;

// if(age >=18){
//     console.log("you can vote");
// }else if(age >60){
//     console.log("you can vote but you are senior citizen");
// }else{
//     console.log("you are child now you can't vote ");
// }

// ---------------------------user account

const userLoggedIn =true;
const debitCard = true;
const loggedFromGoogle = false;
const loggedFromFacebook = true;

if(userLoggedIn && debitCard){
    console.log("you can buy the product");
}
else if(loggedFromGoogle==true){
    console.log("you can buy the product with google account");
}
else if(!loggedFromGoogle && !debitCard){
    console.log("you can't buy product from here");
}
else if(loggedFromGoogle || loggedFromFacebook ){
    console.log("you can buy product with logged discount offer");
}

