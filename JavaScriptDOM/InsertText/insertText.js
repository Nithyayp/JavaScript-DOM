let section = document.querySelector("section");
let article = document.querySelector("article");
console.log(section);

let p = document.createElement("p");
p.textContent = "para";

section.insertBefore(p, article);
section.insertAdjacentElement("beforebegin", p);
section.insertAdjacentElement('afterbegin', p);
section.insertAdjacentElement("afterend", p);

section.insertAdjacentText("afterbegin", "shashi");
section.insertAdjacentHTML("afterbegin", "<h1>shashi</h1>");