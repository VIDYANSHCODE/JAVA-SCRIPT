// string methods  // strings are immutable in javascript, meaning that once a string is created, it cannot be changed. However, we can create a new string by using string methods. Here are some commonly used string methods:
// 1. length
let name = "vidyanshu patel";
console.log(name.length); // prints the length of the string    
// 2. toUpperCase
console.log(name.toUpperCase()); // converts the string to uppercase
// 3. toLowerCase
console.log(name.toLowerCase()); // converts the string to lowercase
// 4. indexOf
console.log(name.indexOf("p")); // returns the index of the first occurrence of the specified value
// 5. lastIndexOf
console.log(name.lastIndexOf("p")); // returns the index of the last occurrence of the specified value
// 6. slice
console.log(name.slice(0, 5)); // extracts a section of the string and returns
console.log(name.slice(2));
// 7. replace
console.log(name.replace("vidyanshu", "pranjal")); // replaces the first occurrence of the specified value 
// 8. trim
console.log(name.trim()); // removes whitespace from both ends of the string
// 9. concat
let name2 = "Pranjal";
console.log(name.concat(" ", name2)); // concatenates two strings

// QUIZ : USEA FOR LOOP TO PRINT THE STRING
let str = ""
for (let i = 0; i < name.length; i++) {
    str += name[i]; // using for loop to print the string
}
console.log(str);