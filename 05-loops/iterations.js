//for loop
//syntax: for (initialization; condition; increment) { statements }


// for(let j=0;j<5;j++){
//     const element =j*j;
//     if(element==4){
//         console.log("Found square of 2:", element);
//     }
//     console.log(element); 
// }

// for(let i=1;i<=10;i++){
//     console.log(`----table of ${i}---`);
//     for(let j=1;j<=10;j++){
//         // console.log(`outer loop value:${i} and inner loop ${j}`);
        
//         console.log(i+'*'+ j + '='+ i*j); 
//     }
// }


let myArray=["hanuman ji","pawan putra","bajrang bali","ram bhakt"];

for(let i=0;i<myArray.length;i++){
    const ele = myArray[i];
    // console.log(ele);
}


// based on loop use we want to control the loop also for that we use break and continue

// for(let index=0;index<=20;index++){
//     if (index==5){
//         console.log(`${index} : is gold number`);
//         break;  // it stop executing further after this break key word
//     }
//     console.log(`value of i is : ${index}`);
// }


// for(let index=0;index<=20;index++){
//     if (index==5){
//         console.log(`${index} : is gold number`);
//         continue; // it skip that particular condition and move on 
//     }
//     console.log(`value of i is : ${index}`);
// }