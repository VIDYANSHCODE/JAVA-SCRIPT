// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Promise 1 resolved after 2 second");
//         resolve(56);
//     }, 2000);
// })

// p1.then((value) => {
//     console.log(value);
//     let p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("promise 2");
//         }, 2000);
        
//     });
//     return p2;
// }).then((value) => {
//     console.log("we are done")
//     return 2
// }).then((value) => {
//     console.log("now we are pakka done");
// })

const loadscript = (src) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);

        script.onload = () => {
            resolve(1);
        };
        script.onerror = () => {
            reject(new Error(0));
        };
    });
}

let p1 = loadscript("https://.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js");
p1.then((value) => {
    console.log(value);
    // return loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js");
}).catch((error) => {
    console.log("we are sorry but we cannot load the script");
})


    
    