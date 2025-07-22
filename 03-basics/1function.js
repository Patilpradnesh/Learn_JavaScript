// function is nothing but package of code which we can use multiple time ,same code we can use multiple time s we required and call it by it name ();

// how to function is going to work in js 
// function declaration
function myFunction() {
    console.log("hello world ");
}

// function expression
const myFunction2 = function () {
    // console.log("hello world 2");
}
// direct calling using reference and execution
//  referance is(name of function only => myFunction) & execution is adding () at the end of reference  


//  myFunction(); // calling function
//  myFunction2(); // calling function 2

// function calling inside new function 
function callingFunction() {
    console.log("calling function inside the function next are inside call function ");
    myFunction(); // calling function
    myFunction2(); // calling function 2
}

// callingFunction(); // calling new function which is calling other 2 internal functions

function AddTwoNum(num1,num2){

    // console.log("sum of 2 number is ",num1+num2)

}


function AddTwoNum(num1,num2){
   const ans= num1+num2;
    console.log("sum of two number is ")
    return ans; // returning value from function
    // return is used to return value from function to the caller

}
// console.log(AddTwoNum(10,20)); // calling function with parameter 

// AddTwoNum(3,"A"); //calling function with parameter which is not same type it  give answer as 3A which means it consider the first parameter as string per next one as string and concatenate them
// const ans=AddTwoNum("4",4); //calling function with parameter which is not same type it  give answer as 3A which means it consider the first parameter as string per next one as string and concatenate them

// console.log("Result",ans);


// multiple way to take parameter in function

function loginUserMes(username){
    return `${username} just logged in`;
}
// for execution of function 
loginUserMes("John"); // calling function with parameter it does not show any value at console coz we are not printing it /console.log it 
// for that use this 
console.log(loginUserMes("Johni")); // calling function with parameter and printing the result at console


// if sometime user doesn't pass any thin in  string section then it show undefined in console
//  for that we can use default parameter in function
function loginUserMes(username="Guest"){
    return `${username} just logged in`;
}


// other method 
// use condition in funtion
function LoginUserMess(username){
    if(username===undefined){
        console.log("please enter username");
        return;
    }
    return `${username}just logged in `;
} 

// console.log(LoginUserMess()); // calling function without parameter it will show message to enter username

// now  there is condition in example that we create project in that shopping cart 
// in that user add the item we don't know how many item are going to come in so for that we have to create our parameters 
function calculateCartPrice(num){
return num;
}
console.log(calculateCartPrice(100,200,300,400)); // it only takes first parameter
// for that we can use rest operator in function
function calculateCartPrice(...num){
    return num;
}
console.log(calculateCartPrice(100,200,300,400)); // it will take all the parameter and return them as array
// same as we can pass the first and second and multiuple first element to var  and then remaining as rest operator

function calculateCart(val1,val2,...num){
    return {num,val1,val2};
}
console.log(calculateCart(100,200,300,400,500,600,700,000)); // it will take first two parameter as val1 and val2 and remaining as num in array



// -----------operation in objects ------------------------------------

// object creation
const user ={
    username:"john",
    price:199,
}

function handleObject(obj){
    
    // console.log(`${username}is working for this much salary ${price}`); // it doesn't accept the value directly it require the obj. prefix for accessing the coming values in it 
    console.log(`${obj.username} is working for this much salary $ ${obj.price} `);
}
// handleObject(user); // calling function with object as parameter
// we can directly pass the object in function
handleObject({
    username:"john",
    price:199,
}); 


// ________________________Array operation with function____________________________

const myArray= [200,400,600,800];

function handelArray(arr){
    return arr[2];
}
console.log(handelArray(myArray));// calling function with array as parameter

// we can directly pass the array in function
console.log(handelArray([100,200,300,400])); // calling function with array as parameter 