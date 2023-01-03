let employees = [
  {
    emp_id: "typ1",
    emp_name: "manu",
    emp_salary: 2000,
  },
  {
    emp_id: "typ2",
    emp_name: "shashi",
    emp_salary: 20000,
  },
  {
    emp_id: "typ3",
    emp_name: "arun",
    emp_salary: 200000,
  },
  {
    emp_id: "typ4",
    emp_name: "vinu",
    emp_salary: 2000000,
  },
];
let output = "";
for (let emp of employees) {
    output += `
    <tr>
    <td>${emp.emp_id}</td>
    <td>${emp.emp_name}</td>
    <td>${emp.emp_salary}</td>
    <td id="remove">
    <span class="delete">delete</span>
    </td>
    </tr>`;
}
let tbody = document.getElementById("tbody");
tbody.innerHTML = output;
document.querySelectorAll(".delete").forEach(span => {
    span.addEventListener("click", e=>{
        e.target.parentElement.parentElement.remove();
    })
})


// let tr = document.querySelector("tr th:nth-child(2)");
// console.log(tr);
// console.log(tr.nextElementSibling);
// console.log(tr.previousElementSibling);
// tr.nextElementSibling.style.color = "red";
// tr.nextElementSibling.nextElementSibling.nextElementSibling.style.color = "red";
// tr.previousElementSibling.style.color = "#fff";
// tr.previousElementSibling.style.background = "green";
