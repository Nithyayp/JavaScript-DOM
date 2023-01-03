let form = document.querySelector("form");
let input = document.querySelector("input");

form.addEventListener("submit", e => {
    e.preventDefault();
    let username = e.target[0].value;
    let email = e.target[1].value;
    let password = e.target[2].value;
    console.log({ username, email, password });
})