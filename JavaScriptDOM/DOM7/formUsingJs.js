let form = document.createElement("form");
let usernameLabel = document.createElement("label");
let usernameInput = document.createElement("input");
let emailLabel = document.createElement("label");
let emailInput = document.createElement("input");
let passwordLabel = document.createElement("label");
let passwordInput = document.createElement("input");
let submitBtn = document.createElement("button");
let resetBtn = document.createElement("button");

form.style.border = "1px solid";
form.style.padding = "30px"
form.style.position = "absolute";
form.style.top = "50%";
form.style.left = "50%";
form.style.transform = "translate(-50px,-50px)"
form.style.display = "flex"
form.style.flexDirection = "column"
form.action = "#";
form.method="GET"
document.body.appendChild(form)

usernameLabel.innerText = "Username:";
form.appendChild(usernameLabel);
usernameInput.placeholder = "Enter an username";
form.appendChild(usernameInput);

emailLabel.innerText = "Email:";
form.appendChild(emailLabel);
emailInput.type = "email";
emailInput.name = "email";
emailInput.placeholder="Enter an email"
form.appendChild(emailInput);

passwordLabel.innerText = "Password:";
form.appendChild(passwordLabel);
passwordInput.placeholder = "Enter an password";
form.appendChild(passwordInput);


submitBtn.innerText = "Submit";
submitBtn.style.marginTop="20px"
resetBtn.innerText = "Reset";
resetBtn.style.marginTop = "10px";

form.appendChild(submitBtn);
form.appendChild(resetBtn);








