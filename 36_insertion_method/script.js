let a = document.getElementsByTagName('div')[0]
a.innerHTML = a.innerHTML +'<h1>HELLO WORLD</h1>'
let div = document.createElement("div")
div.innerHTML = '<h1>i created a new div</h1>'
// a.append(div)
// a.prepend(div)
// a.before(div)
// a.after(div)
a.replaceWith(div)