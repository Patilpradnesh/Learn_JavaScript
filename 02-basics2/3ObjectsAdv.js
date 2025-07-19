// const tinderUser = new object()// its single-tone object


const tinderUser1 ={} // non single-tone object

// //for adding element sin object 

tinderUser1.id="123asdfgh"
tinderUser1.name="binod"
tinderUser1.age =20

// console.log(tinderUser1);

// gives out put as :{ id: '123asdfgh', name: 'binod', age: 20 }


const regularUser ={
    name:"pcpc",
    age:25,
    fullname:{
        userFullName:{
            userFirstName:"pcp",
            userSecondName:"boss"
        }
    }
}
// console.log(regularUser.name); // access element name  => pcpc
// console.log(regularUser.fullname); // access element full name object =>{ userFullName: { userFirstName: 'pcp', userSecondName: 'boss' } }
// console.log(regularUser.fullname.userFullName);// access full name object and then access its userFullName => { userFirstName: 'pcp', userSecondName: 'boss' }
// console.log(regularUser.fullname.userFullName.userSecondName);// access fullname then userFullName then userSecondName => boss



// objects are containing optional chaining when fullname is not exist the we use ? for  protection when we get response from api then we need to sue this (?)

// object merging or combining

const obj1={1:"a", 2:"B"}
const obj2 ={3:"c",4:"d"}
const obj3 ={5:"e",7:"f"}

const object ={obj1,obj2}
// console.log(object)
const object2=Object.assign(obj1,obj2,obj3)
// console.log(object2)


const obS = {...obj1,...obj2}
// console.log(obS)


// when value came from databases it came as array of object 

const users= [
    {
   
    id:1,
    name:"namo",
    email:"h@gmail.com",
    phone:788787809
},

{
    id:2,
    name:"tamo",
    email:"t@gmail.com",
    phone:998787800
},
{
    id:3,
    name:"amo",
    email:"a@gmail.com",
    phone:785687209
}
]

users[1].email
// console.log(tinderUser1)

// console.log(Object.keys(tinderUser1))  //it give an output value data type is - array ==> [ 'id', 'name', 'age' ]
// console.log(Object.values(tinderUser1))  //it give an output value data type is - array ==> [ '123asdfgh', 'binod', 20 ]
// console.log(Object.entries(tinderUser1)) // it give output for every element in key value => [ [ 'id', '123asdfgh' ], [ 'name', 'binod' ], [ 'age', 20 ] ]
// console.log(tinderUser1.hasOwnProperty('age'));
// console.log(tinderUser1.hasOwnProperty('logged in')); //output in boolean format 


// destructuring


const course={
    courseName:"js",
    price:"999",
    courseInstructor:"Hitesh"
}
// when you want to use this value then you use this 
course.courseInstructor
// due to repitadelly call the object name is little weird for code writing 

// another method is 
const {courseInstructor}= course

console.log(courseInstructor)

// destructuring means changing naming convention and formation
const {courseInstructor :teacher}=course

console.log(teacher)
