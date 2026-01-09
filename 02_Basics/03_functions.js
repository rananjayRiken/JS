// adding two numbers

function addTwoNumbers(num1,num2) {
    return (num1+num2);
}

const add = addTwoNumbers(3,6)
console.log(add);

// --------------------------------------

//  SCOPES

let a = 10
var b = 33

if(true){
    
    let a = 12
    console.log("a is ",a)

    var b = 45
    console.log("b is ",b)
}

console.log("outer a is ",a)
console.log("outer b is ",b)

