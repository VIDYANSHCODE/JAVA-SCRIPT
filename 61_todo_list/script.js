let abtn = document.getElementById("add-btn")
let todokeyinput = document.getElementById("todokey-input")
let todovalueinput = document.getElementById("todovalue-input")

abtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let key = todokeyinput.value;
    let value = todovalueinput.value;
    let cont = document.getElementById("todo-list")
    localStorage.setItem(key,value)
    todokeyinput.value = ""
    todovalueinput.value = ""

    cont.innerHTML += `<li>${localStorage.getItem(key)}</li>`



})