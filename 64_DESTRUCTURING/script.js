let arr = [1,2,9,3,5,4,7]
// let [a,b,...rest] = arr
// console.log(a,b);
// if i nedd to assign 1 to a and start rest from 3
let[a, , ,...rest] = arr
console.log(a,rest);

let {c,d} = {c :1,d:2}
console.log(c,d);

// spread syntax

let arr1 = [1,2,3]
let obj1 = {...arr1}
console.log(obj1);

// if i have 3 value in array and i want to use them in tthe function 

let sum = (v1,v2,v3)=>{
    return v1+v2+v3

}

console.log(sum(...arr1));

let obj2 = {
    name: "harry",
    company: "AMAZON",
    experience: 3
}
console.log({...obj2, name:"vidyanshu"});
console.log({...obj2, company:"APPLE", name:"vidyanshu"});


