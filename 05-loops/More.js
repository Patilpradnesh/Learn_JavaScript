// const coding =['javascript','java','c++','python','ruby'];
// it does not return values
// const values =coding.forEach((item)=>{
//     console.log(item);
//     return item;
// })
// console.log(values);


const number =[1,2,3,4,5,6,7,8,9,10];
// when we use scope so must use return key word 
const newNum= number.filter((num)=>{
   return num>4
})
// console.log(newNum);

// one more method  with out scope of curly brace

const Nums = number.filter((num)=>num>5)
// console.log(Nums);

// if this work is done using foreach loop 
// const newNumbers =[];

// number.forEach((item)=>{
//     if(item<5){
//         newNumbers.push(item);
//     }
// })

// console.log(newNumbers);

// suppose this is the user data an user want to perform operation
const book=[
    {title:'book one',genre:'fiction',publish:1971,edition:2004},
    {title:'book two',genre:'action',publish:1966,edition:2014},
    {title:'book three',genre:'horror',publish:2018,edition:2012},
    {title:'book four',genre:'comedy',publish:2021,edition:2006},
    {title:'book five',genre:'Drama',publish:1941,edition:2009},
    {title:'book six',genre:'science',publish:2001,edition:2010}
]

const userBook =book.filter((bk)=>bk.genre==='action') // we can not reuse it cose its const value 

// when we use let we can reuse it
let userBooks =book.filter((bk)=>{
    return bk.publish>=2004  && bk.genre=="comedy"
})
// userBooks = book.filter((bk)=> bk.title=='book five')
console.log(userBooks);

