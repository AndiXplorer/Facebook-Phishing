let loginBtn = document.getElementById("btn");
let emailInput = document.getElementById("email");
let passInput = document.getElementById("password");

function printRes(){
    console.log(`Email: ${emailInput.value.trim()} - Password: ${passInput.value.trim()}`)
}

loginBtn.addEventListener("click", (event) => {
    let emailValue = emailInput.value.trim();
    let passValue = passInput.value.trim();

    event.preventDefault();

    if (emailValue && passValue){
        printRes();
    } else {
        alert("Inputs are empty!");
    }
});