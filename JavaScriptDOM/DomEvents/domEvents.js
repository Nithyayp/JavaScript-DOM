//dom events

// let btn = document.getElementById("btn");
// let input = document.querySelector("input");

//event property way
// btn.onclick = function (event) {
//     console.log(event);
// };

// btn.onmouseenter = function (event) {
//     document.body.style.background = "red";
// }

// btn.onmouseleave = function (event) {
//     document.body.style.background = "green";
    
// }

//event method way
// btn.addEventListener("mouseenter", event => {
//     document.body.style.background = "red";
// })

// btn.addEventListener("mouseleave", event => {
//   document.body.style.background = "green";
// });

//event method
// btn.addEventListener("click", e => {
//     if (e.pointerType === "mouse") {
//         console.log("mouse event");
//     } else {
//         console.log("touch event");
//     }
// })

// input.addEventlistener("keyup", e => {
//     console.log(e);
//     if (e.type === "keyup") {
//         console.log("this is keyup event");
//     } else {
//         console.log("its not keyup type here");
//     }
// })

// input.addEventlistener("keydown", e => {
//   console.log(e);
//   if (e.type === "keydown") {
//     console.log("this is keydown event");
//   } else {
//     console.log("its not keydown type here");
//   }
// });

// input.addEventlistener("keypress", e => {
//   console.log(e);
//   if (e.type === "keypress") {
//     console.log("this is keypress event");
//   } else {
//     console.log("its not keypress type here");
//   }
// });

// let input = document.querySelector("input");
// let btn = document.querySelector("button");

// input.addEventListener("keyup", e => {
//     if (e.key === "Enter") {
//         console.log(e.key);
//         console.log("enter key presses")
//     }
// })

//or
// if (e.keyCode === 13) {
//     console.log(e.key);
//     console.log("enter key presses");
// }

// input.addEventListener("keyup", e => {
//   if (e.key === "Enter") {
//     console.log(e.target.value);
//     console.log("enter key presses");
//   }
// });


//Change event
let input = document.querySelector("input");
let btn = document.querySelector("button");
let span = document.querySelector("span");
//event handler
input.addEventListener("change", e => {
    if (e.target.value === "") {
        input.style.border = "2px solid red";
        span.classList.add("active");
        span.innerHTML="This field is required"
    } else {
        input.style.border = "2px solid green";
        span.classList.remove("active");
        span.innerHTML="";
    }
})