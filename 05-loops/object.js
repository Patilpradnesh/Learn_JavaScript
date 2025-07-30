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
    console.log(`${key} short cut of ${object[key]}`);


}
