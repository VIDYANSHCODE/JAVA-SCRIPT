// change the card title to red
// let c_title = document.getElementsByClassName("card-title")[0]
let c_title = document.getElementById("firsttitle")
c_title.style.color = "red"

let c_titles = document.querySelectorAll(".card-title")// . for class & # for id 
c_titles[0].style.color = "red"
c_titles[1].style.color = "green"
c_titles[2].style.color = "blue"

document.querySelector(".this").style.color = "yellow"
document.querySelector(".this").style.background = "red"                  

console.log(document.getElementsByTagName("a"));


 