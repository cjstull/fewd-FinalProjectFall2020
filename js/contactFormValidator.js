function isFieldEmpty () {
    const field = document.querySelector('#');
    if (field.value === "") {
        return true;
    } else {
        return false;
    }
}

const fieldTest = isFieldEmpty();

if (fieldTest === true) {
    alert('Please provide your information')
}

/*grab the input in the name, email, and phone field and store as variables*/
var name = document.getElementById("name");
var email = document.getElementById("mail");
var phone = document.getElementById("phone");

function validateForm() {
    if ( !name.value ) {
    alert("Enter Name.");
    name.focus();
    } else if ( !email.value ) {
    alert("Enter email.");
    email.focus();
    } else if ( !phone.value ) {
    alert("Enter phone number.");
    phone.focus();
    }
 }

 submitButton.addEventListener("click", validateForm());