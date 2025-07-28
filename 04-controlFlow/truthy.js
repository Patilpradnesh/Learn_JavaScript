const username = "h@hung.ai";
//it directly assume as truthy value after declaration
if (username){
    console.log("username is ",username);
}else {
    console.log("don't have username")
}

// list of truthy values in js

{/**
    * Truthy values in JavaScript include:
    * - Non-empty strings
    * - Non-zero numbers
    * - Objects
    * - Arrays
    * - Functions
    * - Dates
    * - Anything that is not null, undefined, NaN, 0, or an empty string
    *-"0" (string with zero) is also considered truthy
    * - Infinity and -Infinity
    * - Any object, including empty objects and arrays
    * 'false' (string) is truthy, but the boolean false is falsy
    * 'null' (string) is truthy, but the null value is falsy
    * " " (string with a space) is also considered truthy
    * [] (empty array) is truthy
    * {} (empty object) is truthy   
    * function (){} (empty function) is truthy
    * new data() (new instance of a class) is truthy
    */}



 // falsy values in js
{/**
    * Falsy values in JavaScript include:
    * - false (boolean)
    * - 0 (number)
    * - "" (empty string)
    * - null
    * - undefined
    * - NaN (Not a Number)
    * bigInt(0) (BigInt zero)
    * - 0n (BigInt zero)
    */}   


    // how to check array is empty or not
    // if(userEmail.length===0){
    //     console.log("Array is Empty");
    // }

    // if object are empty then how to check
    const emptyObj={}

    // if(Object.keys(emptyObj).length===0){

    //     console.log("object is empty");
    // }

    // // in js 
    // false == 0;
    // // is true
    // false=='';
    // //is true
    // 0=='';
    // true

    // nullish coalescing operator(??): null undefined
    // this oprator handels the null values and undefind values  

    let val1;

    // val1= 5 ??10;
    // val1= null??10;
    // val1=undefined??20;
    // val1=null ?? 10??20;
    val1=undefined ??20??30;


    console.log(val1);

    // TERNARY OPERATOR 
// condition ? true :false; syntax  it use to define the condition that if first operation is ok then return true  else return false 
    const iceTeaPrice=100;
    iceTeaPrice<=80 ? console.log("less than 80"):console.log("more  than 80")



