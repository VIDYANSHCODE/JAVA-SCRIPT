// Q1  write a program to print marks of students in the obkect 
let students = {
    "John": 85,
    "Jane": 92,
    "Jim": 78,
    "Jill": 88
};

for (let i =0; i < Object.keys(students).length; i++) {    //Object.keys(students).length  this give the number of keys in the object
    // using Object.keys to get an array of keys and then iterating over it
    let studentName = Object.keys(students)[i];
    console.log(studentName + ": " + students[studentName]);
}

// Q2  write a program to print the  marks of students in the object using for in loop
for (let student in students) {
    console.log(student + ": " + students[student]);
}

// Q3

// this will only work on browser  

/*let num = parseInt(prompt("Enter a number: ")); // prompt user to enter a number

while (num != 8) {
    alert("try again");
    num = parseInt(prompt("Enter a number: ")); // prompt user to enter a number
}
alert("You entered 8, exiting the loop.");
*/

// Q4
const mean = (a,b,c,d,e) => {
    return (a + b + c + d + e) / 5; // function to calculate mean of five numbers
}
console.log("Mean of 1, 2, 3, 4, 5 is: " + mean(1, 2, 3, 4, 5)); // call the function with five numbers