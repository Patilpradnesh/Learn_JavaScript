const object={
    js:'javascript',
    cpp:'c++',
    rb:"Ruby",
    swift:"swift bu apple",

}

// for access the object through a loop for that  we use "For In " which use here an for other operation also

for(const key in object){
    // console.log(key); // it give proper ans
    // for access the values we use name of object with key parameter
    // console.log(object[key]);
    // combine representation is like this 
    // console.log(`${key} short cut of ${object[key]}`);


}


// is that this for in loop work on array also

const programming=["js","cpp","java","ruby","c#"];

for (const key in programming){
    // console.log(key); // it give key of array (array has key start with zero and bay default it is number );
   // console.log(programming[key]); // it give value of array
    // console.log(`${key} is a key for the array object ${programming[key]}`); // it give combined representation
}

//  can we use for in loop on map function ;

const map =new Map();
map.set('01',"bmw")
map.set('02',"Audi")
map.set('03',"Mercedes")
map.set('04','Tata')
map.set('05',"mahendra")

for(const [key,value] in map){
    console.log(key); // TypeError: map is not iterable
    console.log(value);
}
