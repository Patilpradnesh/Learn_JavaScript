// primitive data type
/*
there are 7 data types catgoiery
string,
Number,
Boolean,
null,
undefined,
symbol,
BigInt (scientific big values) 
*/

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

//Reference type  : this are non primitives 
// directly allocate reference of this values in to memory 

/*
Array ,objects,Functions,
*/

// const hero= ['shakti-man', "Nag-raj", "Doa"];
// let myObj = {
//     name: "Hitesh",
//     age: 22,
// }

// console.log(hero)

// const myFunction = function(){
//     console.log("Hello world");
// }


// console.log(typeof anotherId);
// javascript is dynamic type or static type of language 

// ==================================================================


 let myYoutubeName="pcpGood";


 let anotherName= myYoutubeName;
 anotherName='grandpa';

 console.log( myYoutubeName);
 console.log(anotherName);

 let user={
    email: "userdata@gamil.com",
    upi : "user@sbi"

 }

 let user2 = user 

 user2.email="google.com"
 console.log(user.email);
 console.log(user2.email);
 