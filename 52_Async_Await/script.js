async function harry() {
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 degrees");
    }, 2000);
  });

  let mumbaiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(" 32degrees");
    }, 5000);
  });
  console.log("fetching delhi weather please wait...")
  let delhiW = await delhiWeather
    console.log("fetching delhi weather is"+delhiW);

  console.log("fetching mumbai weather please wait...")
  let mumbaiW = await mumbaiWeather
  console.log("fetching mumbai weather is"+mumbaiW);
  

  return [delhiW,mumbaiW]

}

const cherry = ()=>{
    console.log("hey i am cherry and i ma not waiting")
}
console.log("welcome to the weather cantrol room");

let  a = harry()
a.then((value)=>{
    console.log(value)
})
cherry()

