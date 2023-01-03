//how to create custom event
let demo = document.querySelector("#demo");
let customEvent = new CustomEvent("mern", {
    detail: {
        frontend: {
            mark: "html",
            style: "css"
        },
        backend: {
            server: "nodejs",
            framework: "express",
        }
    }
});

//call event listener
demo.addEventListener("mern", e => {
    console.log(e);
});
demo.dispatchEvent(customEvent);