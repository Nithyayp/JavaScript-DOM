// let AjaxRequest = new XMLHttpRequest();
// let URL = "https://api.github.com/users"; //API END POINT

// AjaxRequest.open("GET", URL);
// AjaxRequest.onload = function () {
//     let data = JSON.parse(this.response);
//     let output = "";
//     for (let user of data) {
//         output += `
//         <div>
//         <img src=${user.avatar_url}/>
//         <h1>${user.login}</h1>
//         <a href=${user.html_url} target="_blank">View Profile</a>
//         </div>`;
//     }
//     document.getElementById("template").innerHTML = output;
// };
// AjaxRequest.send();

// let AjaxRequest = new XMLHttpRequest();
// let URL = "https://fakestoreapi.com/products"; //API END POINT

// AjaxRequest.open("GET", URL);
// AjaxRequest.onload = function () {
//   let data = JSON.parse(this.response);
//   let output = "";
//   for (let user of data) {
//     output += `
//         <div>
//         <img src=${user.avatar_url}/>
//         <h1>${user.login}</h1>
//         <a href=${user.html_url} target="_blank">View Profile</a>
//         </div>`;
//   }
//   document.getElementById("template").innerHTML = output;
// };
// AjaxRequest.send();

window.fetch("https://fakestoreapi.com/products").then(data => {
    //readable stream
    //convert stream into JSON
    data.json().then(product => {
        console.log(product);
    })
})
    .catch()
    .finally(_ => {
        console.log("finally data")
    });