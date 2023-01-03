//create section
let section = document.createElement("section");
section.id = "mainSection";

//create article
let article = document.createElement("article");
article.classList.add("container");

//insert between section
section.appendChild(article);

//create two div's
let logoDiv = document.createElement("div");
logoDiv.className = "logoBlock";
//insert some text between logo
logoDiv.innerHTML = "LOGO";

let menuDiv = document.createElement("div");
//insert some text between menu
menuDiv.innerHTML = "MENU"

//insert these div to article
article.appendChild(logoDiv);
article.appendChild(menuDiv);

document.body.appendChild(section);
console.log(section)

