// Array methods in JavaScript
let numbers = [1, 2, 34, 4, 5];
// 1. toString() - Converts the array to a string
let b= numbers.toString();  
console.log(b, typeof b); // Output: "1,2,34,4,5"

// 2. join() - Joins all elements of the array into a string with a specified separator
let c = numbers.join(" - ");
console.log(c, typeof c); // Output: "1 - 2 - 34 - 4 - 5"

// 3. pop() - Removes the last element from the array and returns it
let d = numbers.pop();
console.log(d, typeof d); // Output: 5 "number"
console.log(numbers); // Output: [1, 2, 34, 4]

// 4. push() - Adds one or more elements to the end of the array and returns the new length
let e = numbers.push(6, 7);
console.log(e, typeof e); // Output: 6 "number"
console.log(numbers); // Output: [1, 2, 34, 4, 6, 7]

// 5. shift() - Removes the first element from the array and returns it
let f = numbers.shift();
console.log(f, typeof f); // Output: 1 "number"
console.log(numbers); // Output: [2, 34, 4, 6, 7]

// 6. unshift() - Adds one or more elements to the beginning of the array and returns the new length
let g = numbers.unshift(0);
console.log(g, typeof g); // Output: 6 "number"
console.log(numbers); // Output: [0, 2, 34, 4, 6, 7]

// 7. delete - Deletes an element at a specified index
let num = [1, 2, 3, 4, 5];
delete num[2]; // Deletes the element at index 2    // delete does not change the length of the array
console.log(num); // Output: [1, 2, <1 empty item>,

// 8. concat() - Merges two or more arrays and returns a new array
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);
console.log(arr3); // Output: [1, 2, 3, 4, 5, 6]

// 9. sort() - Sorts the elements of an array in place and returns the sorted array
let arr4 = [3, 1, 4, 2];
arr4.sort(); // sort changes the original array
console.log(arr4); // Output: [1, 2, 3, 4]// The array is sorted in ascending order on the basis of string Unicode code points
                   // Note: For numerical sorting, use a compare function
let compare = (a, b) => {
    return a - b; // For ascending order
}
arr4.sort(compare);
console.log(arr4); // Output: [1, 2, 3, 4

let compareDesc = (a, b) => {
    return b - a; // For descending order
}

arr4.sort(compareDesc);
console.log(arr4); // Output: [4, 3, 2, 1]

// 10. reverse() - Reverses the elements of an array in place and returns the reversed array
let arr5 = [1, 2, 3, 4];
arr5.reverse();
console.log(arr5); // Output: [4, 3, 2, 1]

// 11. splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements
let arr6 = [1, 2, 3, 4, 5];
let deletedItems = arr6.splice(2, 3, 5, 6, 7); // Inserts 5, 6, 7 at index 2 without removing any elements
console.log(arr6); // Output: [1, 2, 5, 6, 7]
console.log(deletedItems); // Output: [3, 4, 5] (removed items)

// 12. slice() - Returns a shallow copy of a portion of an array into a new array object
let arr7 = [1, 2, 3, 4, 5];
let slicedArray = arr7.slice(1, 4); // Extracts elements from index 1 to index 4 (not including index 4)
console.log(slicedArray); // Output: [2, 3, 4]

