// let marks_class_12 = [90, 85, 78, 88, 92, 76, 95, 89, 84, 91,true, "A+", null, undefined];// Array with mixed data types
let marks_class_12 = [90, 85, 78, 88, 92, 76, 95, 89, 84, 91]; // Array with numbers only
console.log( marks_class_12);
console.log(marks_class_12[0]); // First element of the array

console.log("the length of marks_class_12 is: " + marks_class_12.length); // Second element of the array
 marks_class_12[10] = 95; // Adding a new element to the array

 marks_class_12[0] = 96; // Updating the first element of the array

 console.log(marks_class_12); // Display the updated array

 console.log(typeof marks_class_12); // Display the type of the array

 // QUIZ
 let Arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 for(let i = 0; i < Arry.length; i++) {
    console.log(Arry[i]); // Display each element of the array  
 }