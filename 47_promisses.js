// promises are used to handle asynchronous operations in JavaScript.
// They allow you to write cleaner code by avoiding callback hell.
// promises are used for parallel execution of tasks and handling their results or errors.
// A promise can be in one of three states: pending, fulfilled, or rejected.

let promise = new Promise((resolve, reject) => {
    console.log("this is an alert in promise");
    resolve(56);
});
console.log("this is hello 1");
setTimeout(() => {
    console.log("this is hello 2");
}, 1000);
console.log("this is hello 3");
console.log(promise);