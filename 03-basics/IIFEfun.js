//IIFE function :- Immediately invoke function expression


//simple immediate function calling 
const A=43;

function hello(){
    console.log("hello world");
    console.log(A);
    console.log("immediate call")
}hello();

// in this given ex A is global variable and it can access from out side the function so it make global scope 

// we use IIFE for use only function internal operation not global elements 

// named IIFE
//
( function withname(){
    console.log("this is the IIFE function where ")
})();


((name)=>{
    console.log(`hello ulluu ${name}` )
})("pati");