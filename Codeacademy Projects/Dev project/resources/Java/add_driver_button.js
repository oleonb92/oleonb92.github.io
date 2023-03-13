// function showDriverForm() {
//     let form = document.getElementById("driver-form");
//     form.style.display = "block";

//     let salaryType = document.getElementById("salary-type");
//     salaryType.addEventListener("change", showSalaryInput);
// }
function showDriverForm() {
    let container = document.getElementById("driver_form_container");
    if (container.style.display === "none") {
        container.style.display = "block";
        let salaryType = document.getElementById("salary-type");
        salaryType.addEventListener("change", showSalaryInput);
    } else {
        hideDriverForm();
    }
}

function showSalaryInput() {
    let salaryInput = document.getElementById("salary-input");
    let salaryType = document.getElementById("salary-type");
    if (salaryType.value !== " ") {
        salaryInput.style.display = "block";
    } else {
        salaryInput.style.display = "none";
    }
    salaryType.removeEventListener("change", showSalaryInput);
}

function addDriver() {
    let table = document.getElementById("driver-table");

    // Get form inputs
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let salaryType = document.getElementById("salary-type").value;
    let salary = document.getElementById("salary").value;

    // Create table row
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);

    // Add form inputs to table row
    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = phone;
    cell4.innerHTML = email;
    cell5.innerHTML = address;
    cell6.innerHTML = salaryType;
    cell7.innerHTML = salary;

    // Clear form inputs and hide the form
    document.getElementById("driver-form").reset();
    document.getElementById("salary-input").style.display = "none";
    hideDriverForm();
}

function hideDriverForm() {
    let container = document.getElementById("driver_form_container");
    container.style.display = "none";
    let salaryType = document.getElementById("salary-type");
    salaryType.removeEventListener("change", showSalaryInput);
    // document.getElementById("driver-form").style.display = "none";
}
