// reduce method 
// ite perform operation on array and other 
// it provide functionality of adding the values of num most of the time and add it with the previous sum 
const nums=[1,2,3];

const number =nums.reduce(function (acc,currVal){
    console.log(`acc:${acc} and currVal:${currVal}`)
    return acc+currVal
},0)
console.log(number);

//  use it with arrow function 

const num2= nums.reduce((acc,currVal)=>{
    return acc+currVal;
},1)
console.log(num2);

// example

const shoppingCart=[
    {
        itemName:'js course',
        price:3000,
    },{
         itemName:'html',
        price:500,
    },{
         itemName:'css course',
        price:900,
    },{
         itemName:'php course',
        price:1500,
    },{
         itemName:'java course',
        price:10000,
    }

]

// now we have to add this with help of reduce function

const ans = shoppingCart.reduce((acc,currVal)=>{
    return acc+currVal.price;
},0);
console.log(ans);