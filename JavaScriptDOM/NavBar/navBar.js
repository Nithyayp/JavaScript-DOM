let btn = document.getElementById("btn");
let dropdown = document.querySelector(".dropdown");

//event method way
btn.addEventListener("mouseenter", event => {
    dropdown.style.display = "block";
});

btn.addEventListener("mouseleave", event => {
  dropdown.style.display = "none";
});

