let ul = document.querySelectorAll("ul");
ul.forEach(list => {
    let li = list.getElementsByTagName("li");
    [...li].forEach((val, index)=> {
        val.className = `demo-${index + 1}`;
        val.innerHTML = `DEMO-${index + 1}`;
    })
})

let section = document.getElementById("mainSection");
let divs = section.getElementsByTagName("div");
console.log(divs);
[...divs].forEach((div, i) => {
    div.className = "container";
    div.innerHTML = `
    <h1>TestYantra</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
    <button class="btn">Next</button>`;
})

