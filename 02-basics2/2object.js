const value = {}; //initialization 

// object lit+ral method it work on key value pair


const JsUser ={
    name:"Hits",
    age:18,
    location:"dubai",
    email:"habibi@gmail.com",
    phone : 6587089023,
    LoggedIn : false,
    lastLogin:["Monday","wednesday","friday","Saturday"]

}

// for accessing object element with dot operator
// console.log(JsUser.name)

// for accessing object without dot use square notation
// console.log(JsUser[name]) //show(ReferenceError: name is not defined)
// console.log(JsUser[email]) // both give error it require in string then if the value  is string 
// console.log(JsUser["name"])
// console.log(JsUser["email"])

// we have to take symbol and define it and if we have to declear it in object use symbol as key
// at the time of declaration in object we have to write variable in side the [] and then define value to it so it convert the string to symbol if we can't use the []


const mySem = Symbol("key1")

// const js={
//     mySem:"key"
//  }
//  console.log(js.mySem);
//  console.log(typeof js.mySem); // type is string
// it give the answer as key at output side 


// const jss={
//     [mySem]:"key"
// }
// console.log(jss.mySem);
// console.log(typeof jss.mySem);// type is undefined

// it give the output as undefined 


// for changes in object values 
JsUser.email="hitesh@chtgpt.com"


// Object.freeze(JsUser) //after this statement  our object js user is freeze or say can't changeable 
// JsUser.name="hot";
// console.log(JsUser)
// so try changed email but the name remains same as previous one

// function in js
JsUser.greeting=function(){
    console.log("hello js user");
}
// console.log(JsUser.greeting) // it gives function anonymous it means function is not executed its just refrence of it 
console.log(JsUser.greeting()) // it give error TypeError: JsUser.greeting is not a function 

JsUser.greetingTwo=function(){
    console.log(`hello js user ${this.name}`); //string interpolation
}

console.log(JsUser.greetingTwo())