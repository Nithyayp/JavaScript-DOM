let form = document.querySelector("form");
let span=document.querySelector("span")
form.addEventListener("submit", e => {
    console.log(e);
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;
    // console.log({ email, password });
    if (email === "" && password === "") {
        span.innerHTML = "these fields are required";
    }
    if (password.length < 6) {
        span.innerHTML="minimum 6 characters"
    }
});

