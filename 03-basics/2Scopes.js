// all the values of given objects are accessible in all the global scope 
let a=30
const b=20
var c=10
// console.log("a",a);
// console.log("b",b);
// console.log("c",c);

//  values which are declared inside the scope of function or scope are not accessible out side except var 

if(true){
    let x=50;
    const y=40;
    var z=80;

}
// console.log("x",x); // let can't be accessed out side the scope of if block
// console.log("y",y); // const can;'t be accessed out side the scope of if block 
// console.log("z",z); // var is accessible outside the scope of if block 

// example

let l=6000;
const k=800;
var j =100;
if(true){
    let l=2;
    const k =20;
    var j=0;

    // console.log("inside if block l",l);
    // console.log("inside if block k",k);
    // console.log("inside if block j",j);
}
// it write out side value 
    // console.log("inside if block l",l); 
    // console.log("inside if block k",k);
    // console.log("inside if block j",j); // var is accessing the value of j outside the scope of if block 

//  global scope and other scopes are different in terms of variable declaration 

   // nested scope 
     function one(){
        const username ="pk";
        function two(){
            const password = "12345";
            console.log(username);
        }
        // console.log(password); // it will show error because password is not accessible outside the scope of two function
        two(); // calling two function inside one function
    }
    one(); // calling one function which is calling two function inside it

console.log(addOne(5)); // calling addOne function with parameter 5 before the function declaration 
function addOne (num){
    return num+1;

}

console.log(addOne(6)); // calling addOne function with parameter 6

//  but id we call the expression function it will generate error 
// concept call hoisting in javascript
console.log(addTwo(19)); // calling before the function declaration will generate error because it is function expression not declaration
const addTwo =function (num){
    return num+2;
}

console.log(addTwo(20)); // calling addTwo function with parameter 20 after the function declaration give proper answer 