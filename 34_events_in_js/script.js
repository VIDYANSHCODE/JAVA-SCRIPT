console.log(document.getElementsByTagName("span")[0]);
console.dir(document.getElementsByTagName("span")[0]);
console.log(document.body.firstChild.nodeName)
console.log(document.body.firstElementChild.nodeName)

let x = document.getElementById("first")
console.log(x.innerHTML)
x.innerHTML = " i changed the inner html "
console.log(x.innerHTML)

console.log(x.outerHTML)
x.outerHTML = "<div> hey i changed the outer HtMl</div>"

console.log(document.body.firstChild.data)
console.log(document.body.firstChild.nodeValue)
console.log(document.body.textContent)

document.getElementById("second").hidden = false

