//event delegation
let grandParent = document.querySelector(".grandParent");
let Parent = document.querySelector(".parent");
let Child = document.querySelector(".child");

Child.addEventListener("click", e => {
    console.log("i am child")
    e.stopPropagation()//to stop propagation
});
Parent.addEventListener("click", e => {
    console.log("i am parent");
    e.stopPropagation();

})
grandParent.addEventListener("click", e => {
    console.log("i am grandParent");
    e.stopPropagation();
    
});