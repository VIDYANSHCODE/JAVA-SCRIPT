// Q1
console.log("har\"".length); // prints the length of the string "har" with a double quote in it
// output will be 4 because the double quote is also counted as a character

// Q2

// explore includes , startsWith, endsWith methods
let str2 = "Hello, world!";
console.log(str2.includes("world")); // checks if the string contains "world" - output will be true
console.log(str2.startsWith("Hello")); // checks if the string starts with "Hello" - output will be true
console.log(str2.endsWith("!")); // checks if the string ends with "!" - output will be true

const sentence = "The quick brown fox jumps over the lazy dog.";
const word = "fox";
console.log(sentence.includes(word)); // checks if the sentence contains the word "fox" - output will be true
console.log(`the word "${word}" is ${sentence.includes(word) ? '' : 'not '}found in the sentence.`);    

// Q3
let str3 = "Hello, world!";
console.log(str3.toLowerCase());
console.log(str3.toUpperCase());

// Q4
let str4 = "please give Rs 1000";
let amount = Number.parseInt(str4.slice(("please give Rs ".length)));
console.log(amount); // prints "1000"

