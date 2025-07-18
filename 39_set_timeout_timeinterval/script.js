// alert("hello world");

// let a = setTimeout(() => {
//     alert("you are in the set time out function");
// },5000);
// let b= prompt("whether you want to cancel the alert?");
// if(b === "y"){
//     clearTimeout(a);
// }
// console.log(a);

// const sum = (a, b) => {
//     console.log("yes i am running"+ (a + b));
// }
// setTimeout(sum, 2000, 5, 6); // this will run after 2 seconds

setInterval(() => {
    alert("this is an interval alert");
}, 3000); // this will run every 3 seconds