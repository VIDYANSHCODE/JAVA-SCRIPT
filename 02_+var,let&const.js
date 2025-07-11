let a = 45;                // let cannot be redeclare but updated
 a = "vidyanshu"
var b = "Harry";            // var can be redeclared as well as updated
var b = "patel"
var c = null

{
   var b = "vidyanshu"
    console.log(b)
}
 console.log(b)

 
{
    let a = 90
    console.log(a)
}
console.log(a)

const name = "vidyanshu patel"  // it can neither be redeclared nor updated

console.log(name)