// const loadscript = async (src) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     script.src = src;
//     document.head.appendChild(script);
//     script.onload = () => {
//       resolve(src + "  done success");
//     };
//   });
// };

// const main2 = async () => {
//   console.log(new Date().getMilliseconds());

//   let a = await loadscript(
//     "https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
//   );
//   console.log(a);
//   console.log(new Date().getMilliseconds());
// };
// main2();

// let p = ()=>{
//     return new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error("please this is not"));
//   },3000);
// });
// }
// let a = async ()=>{
//     try{
//         let c = await p()
//         console.log(c)
//     }
//     catch(err){
//         console.log("this is an error");
        
//     }
// }
// a()

let p1 = async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(10)
        },2000)
    })
}
let p2 = async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(20)
        },1000)
    })
}
let p3 = async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(30)
        },3000)
    })
}

const run = async()=>{
    console.time("run")
    let a1 = await p1()
    let a2 = await p2()
    let a3 = await p3()
    let a1a2a3 = await Promise.all([a1,a2,a3])
    console.log(a1a2a3);
    
    // console.log(a1,a2,a3);
    console.timeEnd("run")
 
}
run()