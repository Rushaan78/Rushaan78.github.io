//to validate the username
function validateUsername() {
    var username = document.getElementById("name");   //variable declarations
    var textU = document.getElementById("textU");

    if (username.value === "") {      //if username is empty, returns to default settings
        textU.innerHTML = "";
        username.style.borderColor = "";
    }

    else if (username.value.trim() === "") {  //if username consists of all spaces 
        textU.innerHTML = "Please Enter a Valid Username";   //prompts user to add a valid input
        username.style.borderColor = "#8b0000";  //changes border and text colour to red
        textU.style.color = "#8b0000";
    }

    else if (username.value) {  //if textbox has input
        textU.innerHTML = "Your Username is Valid";  //informs user about their valid input
        username.style.borderColor = "#006400";  //changes border and text colour to green
        textU.style.color = "#006400";
    }
}

//to validate the email address
function validateEmail() {
    var email = document.getElementById("email");   //variable declarations
    var textE = document.getElementById("textE");
    var correctFormat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;  //the correct format for emails

    if (email.value.match(correctFormat)) {  //if the input matches the correct format of emails
        textE.innerHTML = "Your Email Address is Valid"; //informs user about their valid input
        email.style.borderColor = "#006400";   //changes border and text colour to green
        textE.style.color = "#006400";
    }

    else if (email.value === "") { //if email is empty, returns to default settings
        textE.innerHTML = "";
        email.style.borderColor = "";
    }

    else if (!email.value.match(correctFormat)) { //if the input does not match the correct format of emails
        textE.innerHTML = "Please Enter a Valid Email Address";  //prompts user to add a valid input
        email.style.borderColor = "#8b0000";   //changes border and text colour to red
        textE.style.color = "#8b0000";
    }
}

//to validate the password
function validatePassword() {
    var password = document.getElementById("password");  //variable declarations
    var textP = document.getElementById("textP");

    if (password.value === "") {  //if password is empty, returns to default settings
        textP.innerHTML = "";
        password.style.borderColor = "";
    }

    else if (password.value.trim() === "" || password.value.length < 8) {  //if password consists of all spaces or is less than 8 letters
        textP.innerHTML = "Please Enter a Valid Password that consists of ATLEAST 8 letters all of which CANNOT be spaces";  //prompts user to add a valid input
        password.style.borderColor = "#8b0000";   //changes border and text colour to red
        textP.style.color = "#8b0000";
    }

    else if (password.value.length >= 8) {  //if password is 8 letters or more
        textP.innerHTML = "Your Password is Valid";  //informs user about their valid input
        password.style.borderColor = "#006400";  //changes border and text colour to green
        textP.style.color = "#006400";
    }
}

//to validate confirm password
function confirmedPassword() {  
    var password = document.getElementById("password");  //variable declarations
    var confirmed = document.getElementById("cPassword");
    var textCP = document.getElementById("textCP");

    if (confirmed.value === "") {  //if C-password is empty, returns to default settings
        textCP.innerHTML = "";
        confirmed.style.borderColor = "";
    }

    else if ((confirmed.value === password.value)) {  //if C-password is the same as the password
        textCP.innerHTML = "Passwords Match";  //informs user about their valid input
        confirmed.style.borderColor = "#006400";  //changes border and text colour to green
        textCP.style.color = "#006400";
    }

    else if (!(confirmed.value === password.value)) {   //if C-password is not the same as the password
        textCP.innerHTML = "Passwords DO NOT Match";   //prompts user to add a valid input
        confirmed.style.borderColor = "#8b0000";   //changes border and text colour to red
        textCP.style.color = "#8b0000";
    }
}

//to validate the entire form (evaluates correctly and submits if necessary)
function validateForm() {
    var username = document.getElementById("name");  //variable declarations
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confirmed = document.getElementById("cPassword");
    var correctFormat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if ( username.value && email.value.match(correctFormat) && password.value.length >= 8 && confirmed.value === password.value ) {  //if all the conditions are met
        return true;  //submits the form
    }

    else {
        alert("Please Fill In All Fields As Per The Requirements.");   //prompts user to fill in all the boxes correctly
        return false;  //form does not submit
    }
}
