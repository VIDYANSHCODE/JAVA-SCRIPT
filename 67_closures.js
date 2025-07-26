// closure is a function which bound with its lixical environment

// let message = "good Global"
// function hello (){
//     let message = "good morning"
//     {
//         let message = "good afternoon"
//         console.log("Hello1 "+message)
//     }
//     let  c = function hello2 (){
//         console.log("i ma c " + message)
//     }
//     return c

// }
// let c = hello()
// c()
function returnfunc() {
  const x = () => {
    let a = 1;
    console.log(a);
    const y = () => {
    //   let a = 2;
      console.log(a);
      const z = () => {
        // let a = 3;
        console.log(a);
      };
      z();
    };
    a = 999
    y();
  };
  return x;
}

let a = returnfunc();
a()