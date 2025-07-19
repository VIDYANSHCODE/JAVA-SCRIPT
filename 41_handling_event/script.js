let x = (e) => {
    alert("Hello, World 1");
    console.log(e.target);
    console.log(e);
}
// let y = () => {
//     alert("Hello, World 2");
// }
btn.addEventListener("click", x)
// btn.addEventListener("click", y)

// let choice = prompt("Choose 1 or 2");
// if (choice === "1") {
//     btn.removeEventListener("click", y);
// }
// else if (choice === "2") {
//     btn.removeEventListener("click", x);
// }   
// let coordinates = (e) => {
//     console.log(`X: ${e.clientX}, Y: ${e.clientY}`);
// }

// document.addEventListener("mousemove", coordinates);

