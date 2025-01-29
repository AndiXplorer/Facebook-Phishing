let loginBtn = document.getElementById("btn");
let emailInput = document.getElementById("email");
let passInput = document.getElementById("password");

function printRes(email, password){
    console.log(`Email: ${emailInput.value.trim()} - Password: ${passInput.value.trim()}`)
}

loginBtn.addEventListener("click", (event) => {
    event.preventDefault();

    let emailValue = emailInput.value.trim();
    let passValue = passInput.value.trim();

    if (emailValue && passValue){
        localStorage.setItem("email", emailValue);
        localStorage.setItem("password", passValue);
        
        window.location.href = "./pages/hacked.html";
    } else {
        alert("Inputs are empty!");
    }
});