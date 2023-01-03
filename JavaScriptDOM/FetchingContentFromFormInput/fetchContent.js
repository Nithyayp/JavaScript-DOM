// let li = document.querySelectorAll("li");
// let input = document.querySelector("input");
//to fetch content
// li.forEach(list => {
    //add event listener
//     list.addEventListener("click", e => {
//         console.log(e.target.innerHTML);
//     })
// })

//to remove content
// li.forEach(list => {
  //add event listener
//   list.addEventListener("click", e => {
//       e.target.remove();
//   });
// });

// input.addEventListener("keyup", e => {
//     if (e.key === "Enter") {
//         let value = e.target.value;
//         GetValue(value);//calling function
//     }
// })
//called function
// function GetValue(value) {
//     console.log(value)
// }

// let form = document.querySelector("form");
// let ul = document.querySelector("ul");
// let list = document.querySelectorAll("li");
// let input = document.querySelector("input");

// form.addEventListener("submit", e => {
//     e.preventDefault();
//     let value = e.target[0].value;
//     console.log(value);

//     let li = document.createElement("li");
//     li.innerText = value;
//     ul.appendChild(li);
// });

// list.forEach(li => {
//     li.addEventListener("click", e => {
//         e.target.remove();
//     });
// });

let form = document.querySelector("form");
let ul = document.querySelector("ul");

//get form value
form.addEventListener("submit", e => {
    e.preventDefault();
    let value = e.target[0].value;
    let li = document.createElement("li");
    li.innerText = value;
    ul.appendChild(li);
});

//remove li's
ul.addEventListener("click", e => {
    if (e.currentTarget) {
        e.target.remove();
    }
})