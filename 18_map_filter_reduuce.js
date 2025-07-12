let arr = [1, 2, 34, 4, 5];
// 1. map() - Creates a new array with the results of calling a provided function
let newarr = arr.map((element,index, array) => { // it creates a new array with the results of calling a provided function on every element in the calling array
    console.log(element,index,array); // Output: 1, 2, 34, 4, 5
    return element +1; // each element is incremented by 1
});
console.log(newarr); // Output: [2, 3, 35, 5, 6] - each element is incremented by 1

// 2. filter() - Creates a new array with all elements that pass the test implemented by the provided function
let arr2 = [1, 23, 34, 4, 5];
let newarr2 = arr2.filter((element, index, array) => {
    console.log(element, index, array); // Output: 1, 23, 34, 4, 5
    return element > 10; // filters elements greater than 10
});
console.log(newarr2); // Output: [23, 34] - only elements greater than 10 are included

// 3. reduce() - Executes a reducer function on each element of the array, resulting in a single output value
let arr3 = [1, 2, 3, 4, 5];
let newarr3 = arr3.reduce((h1 , h2) => {
    console.log(h1, h2); // Output: 1, 2; 3, 4; 5
    return h1 + h2; // sums up all elements
}, 0);
console.log(newarr3); // Output: 15 - the sum of all elements