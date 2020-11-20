

var form = document.getElementById("contactForm");


/*listen for submit button, execute the following*/
form.addEventListener("submit", (e) => {
    /*grab the input in the name, email, and phone field and store as variables*/
    var name = document.getElementById("name");
    var email = document.getElementById("mail");
    var phone = document.getElementById("phone");
    var comments = document.getElementById("comments");
    var errorElement = document.getElementById("error-message");
  
    var emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let messages = [];
    /*test that name is not empty*/
    if(name.value == null || name.value == "" ){
        messages.push('Name field cannot be left blank');
    }
    if(!(email.value.match(emailRegex))){
        messages.push('Enter valid email address');
    }
    if(comments.length == null){
        messages.push('Comment field cannot be left blank');
    }

    if(messages.length > 0){
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
    }
    else{
        alert(`Thank you, someone will be in contact shortly. ${name.value}`);
        
    }
}  
); /*?closeEventListener*/