// let p = fetch("https://goweather.herokuapp.com/weather/Ny")
// p.then((response)=>{
//     console.log(response.status);
//     return response.json()
// }).then((value2)=>{
//     console.log(value2);

// })

// const createToDO = async () => {
//   let options = {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({
//       title: "foo",
//       body: "bar",
//       userId: 1,
//     }),
//   };
//   let p = await fetch("https://jsonplaceholder.typicode.com/posts", options)
//   let response = await p.json()
//   return response
// };
// const  mainFunc = async ()=>{
//     let todo = await createToDO()
//     console.log(todo);

// }
// mainFunc()
const createToDO = async (todo) => {
  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(todo),
  };
  let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
  let response = await p.json();
  return response;
};

const getToDo = async (id) => {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  let r = await response.json()
  return r
};
const mainFunc = async () => {
  let todo = {
    title: "harry",
    body: "fat",
    userId: 101,
  };
  let todor = await createToDO(todo);
  console.log(todor);
  console.log(await getToDo(76));
};
mainFunc();
 