// Q1
let age;
age = 7; // You can change this value to test different cases
if (age > 10 && age < 20) {
    console.log("thats the number");
}
else {
    console.log("thats not the number");
}

// Q2
const num =1; // You can change this value to test different cases
// Using a switch statement to categorize age

switch (num) {
    case 1:
        console.log("You are a child");
        break;
    case 2:
        console.log("You are a teenager");
        break;
    case 3:
        console.log("You are an adult");
        break;
    default:
        console.log("Age not recognized");
        break;                                  
}
// Q3
const num1 = 6; // You can change this value to test different cases
if (num1 % 2 == 0 && num1% 3 == 0) {
    console.log("the number is divisible by 2 and 3 ");
}
else {
    console.log("the number is not divisible by 2 and 3");
}
//Q4
const num2 = 3;
if (num2 % 2 == 0 || num2 % 3 == 0) {
    console.log("the number is divisible by 2 or 3");
}
else {
    console.log("the number is not divisible by 2 or 3");
}

// Q5
const age1 = 15; // You can change this value to test different cases
console.log(age1 >= 18 ? "You are an adult" : "You are a minor");