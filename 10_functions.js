const hello = () => {
    console.log("Hello, World!"); // arrow function to print hello world
}

function getOnePlusAverage(num1, num2) {                      /// make a function to get one plus average of two numbers 
    let average = (num1 + num2) / 2;
    console.log("done")
    return Math.round(average) + 1; // return the average plus one
}

const sum = (p,q) => {
    return p + q; // arrow function to sum two numbers
}

let a = 1;
let b = 2;
let c = 3;

let result = getOnePlusAverage(a, b); // call the function with a and b
console.log("One plus average of " + a + " and " + b + " is: " + result);

hello (); // call the hello function