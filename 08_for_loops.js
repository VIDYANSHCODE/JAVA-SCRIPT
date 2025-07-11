for (let i = 0; i < 5; i++) {
  console.log(i);
}

//program to add first 10 natural numbers
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i; // sum = sum + i
}
console.log("Sum of first 10 natural numbers is: " + sum);

let obj = {
  name: "John",
  age: 30,
  city: "New York"
};

//for in loop to iterate over object properties
for (let key in obj) {
  console.log(key + ": " + obj[key]);
}
// for of loop to iterate over object values
for (let value of Object.values(obj)) {      // using Object.values to get an array of values
  console.log(value);
}