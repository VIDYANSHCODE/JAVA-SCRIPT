/*let a = prompt("hey whats yourage")
a = Number.parseFloat(a)
if(a>=18){
    alert("you are an adult")
}
*/

let a = 18;
if (a > 0) {
    console.log("it is a valid age");
}
else{
    console.log("it is not a valid age");
}

let b = 19;
if (b > 0 && b <= 12) {
    console.log("you are a child");
}
else if (b > 12 && b < 18) {
    console.log("you are a teenager");
}
else {
    console.log("you are an adult");
}

// switch statement
const expr = "Papayas";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
// ternary operator
const age = 19;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(`You are served ${beverage}.`);