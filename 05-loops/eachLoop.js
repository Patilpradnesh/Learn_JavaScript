const coding =['javascript','c++','ruby','swift','python'];
// first variation
coding.forEach(function (item){
    // console.log(item); // it will print each item in the array
})

//second variation with arrow function
coding.forEach((item)=>{
    // console.log(item); // it will print each item in the array
})


// array name  foreach method in side it use call back function  with item as parameter (it is callback function so it doesn't have name )
// forEach method is used to iterate through each element of the array
// it is not a loop but it is used to iterate through array elements

// suppose we have already written function and we want to perform the forEach loop on that function 
let i=0;
function printMe(item){
    // console.log(`${i} is ${item}`);
    i++;
}

// coding.forEach(printMe); // it will print each item in the array using the printMe function

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
    
})

// we have arr and object are present in it 
const myCoding =[
    {
    languageName:"javaScript",
    languageFile:"js"
},
    {
    languageName:"java",
    languageFile:".java"
},
    {
    languageName:"C++",
    languageFile:"cpp"
},
    {
    languageName:"Ruby",
    languageFile:"r"
}
]

myCoding.forEach((item,index,arr)=>{
    console.log(item.languageName);
    console.log(index);
    console.log(arr);
})