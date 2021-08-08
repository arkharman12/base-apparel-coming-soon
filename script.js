const emailInput = document.querySelector("#email");
const submitBtn = document.querySelector("#submit-btn");
const errorMsg = document.querySelector("#error-message");
const successMsg = document.querySelector("#success-message");
const errorIcon = document.querySelector("#error-icon");

submitBtn.addEventListener("click", function() {
    // Get the value of the input field with id="numb"
    let inputValue = emailInput.value;
    let error = "";
    let success = "";
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (inputValue.match(mailFormat)) {
        success = "Success";
        errorIcon.style.display = "none";
        emailInput.style.border = "1px solid hsl(0, 36%, 70%)";
    } else if (inputValue === "") {
        error = "Please provide a valid email";
        errorIcon.style.display = "block";
        emailInput.style.border = "2px solid hsl(0, 93%, 68%)";
    } else {
        error = "Please provide a valid email";
        errorIcon.style.display = "block";
        emailInput.style.border = "2px solid hsl(0, 93%, 68%)";
    }
    
    successMsg.innerHTML = success;
    errorMsg.innerHTML = error;
})





    