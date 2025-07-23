let p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
            resolve("value 1")
    },1000)
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
            resolve("value 2")
    },2000)
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
            resolve("value 3")
    },3000)
})

// p1.then((value)=>{
//     console.log(value)
// })
// p2.then((value)=>{
//     console.log(value)
// })
// p.then((value)=>{
//     console.log(value)
// })

/////////////////////////   promise API    ///////////////////////////////////////
// let promise_all = Promise.all([p1,p2,p3])

// promise_all.then((value)=>{
//     console.log(value)
// })

// let p4 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//             resolve("value 4")
//     },3000)
// })
// let p5 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//             reject(new Error("there is some problem"))
//     },3000)
// })
// let p6 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//             resolve("value 6")
//     },3000)
// })

// let promise2_all = Promise.allSettled([p4,p5,p6])  // tell the status

// promise2_all.then((value)=>{
//     console.log(value)
// })
let promise_all = Promise.race([p1,p2,p3])

promise_all.then((value)=>{
    console.log(value)
})

// promise.any does not return error (if any) it is similar to race
