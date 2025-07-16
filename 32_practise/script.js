document.getElementsByClassName("navbar-brand")[0].style.color = "red"
document.getElementsByTagName("nav")[1].firstElementChild.style.color = "red"
document.getElementsByTagName("nav")[1].lastElementChild.style.color = "yellow"
document.querySelector(".container-fluid").style.background = "cyan"

Array.from(document.getElementsByTagName("li")).forEach((element)=>{
    element.style.color ="red"
    
}
)