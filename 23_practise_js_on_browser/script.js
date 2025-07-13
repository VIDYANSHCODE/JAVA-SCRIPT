//Q1
// let age;
// let permission ;
// do {
// age = prompt("Enter your age");
// age = Number.parseInt(age);

// if (age < 18 && age > 0) {
//     alert("You cannot drive");
// }
// else if (age >= 18) {
//     alert("You can drive");
// }
// else {
//     console.error("invalid age")// alert("Invalid age");
//     break;
// }
// permission = confirm("Do you want to continue? ");
// }while (permission);

//Q2
// let num;
// let permission= true;
// while(permission) {

//     num = prompt("Enter a number greater than 4 to visit Google");
//     num = Number.parseInt(num);
//     if (num > 4) {
//         location.href = "https://www.google.com";
//     }
//     else {
//         alert("enter a number greater than 4 to visit to Google");
//         }
//     permission = confirm("Do you want to continue? ");
// }

//Q3
let color;
color = prompt("Enter a color to change the background color of the page");
document.body.style.backgroundColor = color;    
