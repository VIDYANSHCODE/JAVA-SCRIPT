first.className = "red text-dark";
first.classList.remove("red");
first.classList.add("yellow");
first.classList.toggle("yellow");
first.classList.toggle("red");
console.log(first.classList.contains("text-dark"));