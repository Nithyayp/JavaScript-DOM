// let container = document.getElementsByClassName("container");
// let convertIntoArray = Array.from(container);
// console.dir(convertIntoArray);
// convertIntoArray.forEach((val, i) => {
//     console.log(val);
//     val.textContent = `Demo ${i + 1}`;
// });

// let mainSection = document.getElementById("MainSection");
// let container = mainSection.getElementsByClassName("container");
// console.log(container);
// convert array like object into array
// Array.prototype.forEach()
// let convertIntoArray = Array.from(container);
// console.dir(convertIntoArray);
// convertIntoArray.forEach((val, i) => {
//     console.log(val);
//     val.innerHTML = `Demo ${i + 1}`;
// });

// let sectionBlock = document.querySelector("#MainSection");
// sectionBlock.querySelectorAll(".container").forEach((val, i) => {
//     val.innerHTML = `DEMO ${i}`;

// });

let MainSection = document.getElementById("MainSection");
MainSection.querySelectorAll(".container:nth-child(odd)").forEach(val => {
  val.className = "odd";
  val.innerHTML = "odd";
});

MainSection.querySelectorAll(".container:nth-child(even)").forEach(val => {
  val.className = "even";
  val.innerHTML = "even";
});
