// Q1 
/*arr1 = [1, 2, 3, 4, 5];
a = prompt("Enter a number to add to each element of the array:");
arr1.push(Number(a));
console.log(arr1); // Output: [1, 2, 3, 4, 5, a]
*/
// Q2
/*
let arr1 = [1, 2, 3, 4, 5];
let a;
do {
    a = prompt("Enter a number to add to each element of the array (or 0 to stop):");
    arr1.push(Number.parseInt(a));
    
}while(Number.parseInt(a) !== 0);

console.log(arr1); // Output: [1, 2, 3, 4, 5, a]
*/
// Q3
let arr = [10, 2, 34, 40, 500];

let newarr = arr.filter((element, index, array) => {
    return element%10 === 0; // filters elements that are integers
});
console.log(newarr); // Output: [10, 40, 500] - only elements that are multiples of 10 are included

// Q4
let arr2 = [1, 2, 3, 4, 5];
let newarr2 = arr2.map((element, index, array) => {
    return element ** 2; // squares each element in the array
});
console.log(newarr2); // Output: [1, 4, 9, 16, 25] - each element squared

// Q5
let arr3 = [1, 2, 3, 4, 5];
let newarr3 = arr3.reduce((a1,a2 ) => {
    return a1 *a2;
});
console.log(newarr3); // Output: 120 - product of all elements in the array