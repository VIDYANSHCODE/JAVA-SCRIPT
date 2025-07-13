console.log("console")
console.info("info")
console.warn("warn")
console.error("error")
console.assert("err" != false)
console.assert("err" == false)

console.time("forloop")
for (let i = 0; i<5;i++){
    console.log(255)
}
console.timeEnd("forloop")

// alert confirm and prompt in detail


alert("enter the vsalue of a ")

let a = prompt("enter here", 0)  // we can also add a default value
a = Number.parseInt(a)
alert(`you enetered a of type of  ${typeof a}`)

let write = confirm("do you want towrite it to the page")   // this basically asks for permission


if(write){
  document.write(a)

}
else{
    document.write("please allow me to write")
}

