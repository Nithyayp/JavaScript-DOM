//dom methods
// let demo = document.getElementById('demo');//only one node
// let demo1 = document.querySelector('#demo');

// console.log(demo)
// console.log(demo1);

// console.log(typeof demo);
// console.log(typeof demo1);

// console.log(demo.id);
// console.log(demo1.id);

let div = document.getElementsByTagName("div"); //here div is tag name and it returns htmlCollection
// let divWithQuery = document.querySelectorAll("div");//here div is css selector that is element selector and it returns NodeList by default it supports forEach method
// console.log(div);
// console.log(divWithQuery);
// div[0].style.background = "red";
// div[1].style.background = "yellow";

// for (let i = 0; i < div.length; i++){
//     div[i].style.background = "red";
//     div[i].style.margin = "5px";
//     div[i].style.padding = "5px";
//     div[i].style.color = "#fff";
// }

for (let i of div) {
    i.style.background = "red";
    i.style.margin = "5px";
    i.style.padding = "5px";
    i.style.color = "#fff";
}

// [...div].forEach(val => {
//   val.style.backgroundColor = "red";
//   val.style.margin = "10px";
//   val.style.padding = "10px";
//   val.style.color = "#fff";
// });

