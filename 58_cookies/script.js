console.log(document.cookie)
document.cookie = "name1=vidyanshu10"
document.cookie = "name2=vidyanshu20"
let key = prompt("enter you key")
let value = prompt("enter the value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie);
