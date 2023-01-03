// let mainSection = document.getElementById('demoSection');
// console.log(mainSection);

// mainSection.className = 'active';
// mainSection.setAttribute('class', 'demo');

//DOMTOKENLIST
// mainSection.classList.add();
// mainSection.classList.remove();
// mainSection.classList.toggle();
// mainSection.classList.contains();
// mainSection.classList.entries();
// mainSection.classList.forEach();
// mainSection.classList.values();
// console.dir(mainSection.classList);
// mainSection.classList.add("demo", "qsp", "testyantra");
// mainSection.className = "active demo ty qsp";//not recommended this method

// let text = document.getElementById("block");
// let showBtn = document.getElementById("showBtn");
// let hideBtn = document.getElementById("hideBtn");

//1st method
// showBtn.onclick = function () {
//     text.classList.add("active");
//     text.style.display = "block";
// }

// hideBtn.onclick = function () {
//     text.classList.remove("active");
//     text.style.display = "none";
// }

//2nd method
// showBtn.onclick = function () {
//     if (text.classList.contains("active")) {
//         text.style.display = "block";
//     }
// };
// hideBtn.onclick = function () {
//     text.style.display="none"
// }

//3rd method
let text = document.getElementById("block");
let btn = document.getElementById("btn");

btn.onclick = function () {
    let toggle = text.classList.toggle("active");
    if (toggle === true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
};