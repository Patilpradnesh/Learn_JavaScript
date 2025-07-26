const user= {
    username:"Hit",
    price:"999",
    welcomeMes:function(){

        console.log(`${this.username},welcome to website`); // this keyword creates current context or refer the current context 
        console.log(this);
    }
}

user.welcomeMes();
// this keyword is used to refer the current context or object in which it is used
// it is used to access the properties and methods of the current object
user.username='prd';
// user.welcomeMes(); // it will show prd in console because we have changed the username property of user

// console.log(this) // it will show the global object in console


function chai(){
    let username= "pradnesh";
    console.log(this.username) // it will show undefined in console because this keyword is used in global scope and username is not defined in global scope
    console.log(this); // it will show the global object in console because this keyword is used in global scope
}
chai(); // calling chai function which will show the global object in console

console.log("----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------")
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// arrow function 
const chaiBisKit =()=>{
    username="pcp"
    console.log(this.username);
    console.log(this)
}

chaiBisKit();

// arrow function with parameter
// when we write data in curly braces then we need to write return key word
const addNum =(num1,num2)=>{
    return num1+num2;
}
console.log(addNum(10,20)); // calling addNum function with parameter 10 and 20
// it will show 30 in console

// we can write it like this also
//with out using curly barces we can write the data in front of arrow and we can write it in round brackets also in that we don't need to write return  
const addNums =(num1,num2)=> num1+num2; // it is called implicit return in arrow function
console.log(addNums(10,120)); // calling addNum function with parameter 10 and


// to written an object we need to rap object in parenthesis

const data =(num1,num2)=>{username:"patil"}; // we can't written object like this we must use round bracket inside then curly braces with object values   
console.log(data(10,20)); // calling data function with parameter 10 and 20
// it will show undefined in console because we are not returning anything from the function