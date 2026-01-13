// for   
// printing tables from 1 to 10

for (let i=1;i<=10;i++){
    console.log("Table of",i)
    for (let j=1;j<=10;j++){
        console.log(`${i}*${j}=${i*j}`)
     }
}

// printing array via for and while
let mrArray = ["flash", "batman","superman"]
for (let i=0;i,i<mrArray.length;i++){
    const elemet = mrArray[i];
    console.log(elemet);
}


let elemetIndex = 0
while (elemetIndex < mrArray.length){
    console.log(mrArray[elemetIndex])
    elemetIndex++
}

//  do while loop

let score = 1
do {
 console.log(`Score is ${score}`)
 score++
} while (score <=10);
// ALWAYS do while loops works atleast once and than condition will decide to move on or not