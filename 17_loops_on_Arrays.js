// 17_loops_on_Arrays.js

// for loop - Iterates over each element in the array

let num = [1, 2, 34, 4, 5];
for(let i = 0; i < num.length; i++) {
    console.log(num[i]); // Output: 1, 2, 34, 4, 5
}

// forEach - Executes a provided function once for each array element
num.forEach((element) => {
    console.log(element*element); // Output: 1, 4, 1156, 16, 25
});

// Array.from() - Creates a new array from an array-like or iterable object
let str = "hello";
let arrFromStr = Array.from(str);
console.log(arrFromStr); // Output: ['h', 'e', 'l', 'l', 'o']

// for...of - Iterates over the values of an iterable object (like arrays)
for(let value of num) {
    console.log(value); // Output: 1, 2, 34, 4, 5
}   

// for...in - Iterates over the enumerable properties of an object (not recommended for arrays)
for(let index in num) {
    console.log(index, num[index]); // Output: 0 1, 1 2, 2 34, 3 4, 4 5
}   