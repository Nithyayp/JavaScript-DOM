let hide1 = document.getElementsByClassName("hide1")[0];
let hide2 = document.getElementsByClassName("hide2")[0];
let hide3 = document.getElementsByClassName("hide3")[0];
let hide4 = document.getElementsByClassName("hide4")[0];

// let btn = document.getElementById("bgclr");

// function bg() {
//   document.body.style.backgroundColor == "black" ? document.body.style.backgroundColor = "white" : document.body.style.backgroundColor == "black";
// }
// console.dir(hide);

function eff1() {
  if (hide1.className == "hide1") {
    hide1.className = "div1";
    // var img = document.createElement("img");
    // img.style.backgroundSize = "100% ";
    // img.style.width = "100vw";
    // img.src = "./20376340.jpg";
    // document.body.appendChild(img);
  } else {
    hide1.className = "hide1";
    // document.body.removeChild(img)
    // document.body.style.backgroundColor="black"
  }
}
function eff2() {
  if (hide2.className == "hide2") {
    hide2.className = "div2";
    // var img = document.createElement("img");
    // img.style.backgroundSize = "100% ";
    // img.style.width = "100vw";
    // img.src = "./20376340.jpg";
    // document.body.appendChild(img);
  } else {
    hide2.className = "hide2";
    // document.body.removeChild(img);
    // document.body.style.backgroundColor = "black";
  }
}
function eff3() {
  if (hide3.className == "hide3") {
    hide3.className = "div3";
    // var img1 = document.createElement("img");
    // img1.style.backgroundSize = "100% ";
    // img1.style.width = "100vw";
    // img1.src = "./646425611.jpg";
    // document.body.appendChild(img1);
  } else {
    hide3.className = "hide3";
    // document.body.removeChild(img1);
    // document.body.style.backgroundColor = "black";
  }
}
function eff4() {
  if (hide4.className == "hide4") {
    hide4.className = "div4";
    // var img1 = document.createElement("img");
    // img1.style.backgroundSize = "100% ";
    // img1.style.width = "100vw";
    // img1.src = "./646425611.jpg";
    // document.body.appendChild(img1);
  } else {
    hide4.className = "hide4";
    // document.body.removeChild(img1);
    // document.body.style.backgroundColor = "black";
  }
}
