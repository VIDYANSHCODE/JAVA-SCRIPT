console.log("operations in js");
let a = 16;
let b = 3;
console.log("a + b = " , (a+b));
console.log("a - b = " , (a-b));
console.log("a * b = " , (a*b));
console.log("a / b = " , (a/b));
console.log("a ** b = " , (a**b));
console.log("a % b = " , (a%b));

console.log("a++ = " , a++);  // this will first print a and then increment it by 1 
console.log("a =", a)

console.log("++b = ", ++b);
console.log("b = ", b);

//Q  tell the output

let c = 10;

console.log("++c = ", ++c); //  11
console.log("c++ = ", c++); // 11
console.log("--c = ", --c); // 11
console.log("c-- = ", c--); // 11
console.log("c = ", c);     // 10
console.log("c-- = ", c--); //10

// Assignments operators
let d = 5;
d += 5; // same as d = d+5
console.log(d)

// comparison operators 
let comp1 = 6
let comp2 = "6";
console.log("comp1 == comp2 is", comp1 == comp2)
console.log("comp1 != comp2 is", comp1 != comp2)
console.log("comp1 === comp2 is", comp1 === comp2)        // it also checks the type of data type 
console.log("comp1 !== comp2 is", comp1 !== comp2)
console.log("comp1 > comp2 is", comp1 > comp2)

// logical operators
let x = 5;
let y = 6;
console.log(x<y && x ==5)

console.log(x>y || x==5)

console.log(!true)
