//without event delegation
// let div = document.querySelectorAll("div");
// div.forEach(val => {
//     val.addEventListener("click", e => {
//         console.log(e.target);
//         e.target.style.background = "green";
//         e.target.innerText = "new Content";
//     })
// });

//with event Delegation

let Block = document.querySelector("#Block");
Block.addEventListener("click", e => {
    e.target.style.background = "green";
    e.target.innerText = "new Content";
})