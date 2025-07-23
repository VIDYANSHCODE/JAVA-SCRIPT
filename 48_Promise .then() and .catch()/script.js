let p1 = new Promise((resolve, reject) => {
    console.log("promise is pending");
    setTimeout(() => {
        // console.log("i am a promise and i am fulfilled");
        resolve(true)
    }, 2000);

})

let p2 = new Promise((resolve, reject) => {
    console.log("promise is pending");
    setTimeout(() => {
        // console.log("i am a promise and i am rejected");
        reject(new Error("error: promise rejected"))
    }, 2000);

})
// to get the value
p1.then((value) => {
    console.log(value);
})
// to catch the error
// p2.catch((error) => { 
//     console.log("some error occured in p2");
// })

p2.then((value, error) => {
    console.log(value);
}, (error) => {
    console.log(error);
})




