let remove = document.querySelectorAll(".delete");
remove.forEach(span => {
    span.addEventListener("click", e => {
        e.target.parentElement.remove();
    });
});
// let list = document.querySelectorAll("li");
// list.forEach(li => {
//     let remove = li.children[1];
//     remove.addEventListener("click", e => {
//         e.target.parentElement.remove();
//     });
// });