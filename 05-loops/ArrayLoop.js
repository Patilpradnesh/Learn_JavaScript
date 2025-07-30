// for of loop 

const arr =[1,2,3,4,5,6]

for(const num of arr){
    // console.log(num);
    
}

const greeting= "hello world"

for(const greet of greeting){
    // console.log(greet);
}

// maps it object it hold key value pair ,it remember the order of insertion 
// it knows for its unique values coz it store the values only one time and it remain in its order as the entry of it 


const map = new Map()
map.set('in',"India")
map.set('usa',"united state of america")
map.set('fr',"france")

// console.log(map);

// thing is can we iterate through loop in map if yes then how 
// use for of loop
for (const key of map){
    // console.log(key); // it give whole values of array in key value pair 
}

// for separate access of key and values we can map them in for of loop like this 
for (const [key, value] of map){
    // console.log(key);
    // console.log("-----------------------------");
    // console.log(value);
    // console.log("-----------------------------");
    // console.log(key ,"==>", value);

}


const myObj=
{
    'game1':'GTA',
    'game2':'GtA5',
    'game3':'spider',
}
// this syntax is not working for object

for(const[key,value] of myObj){
    console.log(key,":=>",value);  // TypeError: myObj is not iterable
}

