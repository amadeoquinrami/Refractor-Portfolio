const InputName = document.getElementById("name");
const InputEmail = document.getElementById("email");
const InputComment = document.getElementById("Comment");
// creating afunction and grabbiing it by ID 
const nameError = document.getElementById("err-name");
const emailError = document.getElementById("err-email");
const commentError = document.getElementById("err-comment");
// creating a function for error

const ContactForm = document.getElementById("Contact-form");
//  creating a function tto grab the id Form
// ContactForm.addEventListener("submit", function(event){
    // event.preventDefault(); 
    // prevents the page froom submitting until the fields are filled.

    function validateName () {
        if(InputName.value.length < 3) {
            InputName.style.border = "2px solid red";
            nameError.textContent = "Name must be at least 3 characters long"
            return false;
    } else {
        InputName.style.border = "2px solid green"
        nameError.textContent = "";
        return true;
    }
}

function validateEmail() {
    if(
    InputEmail.value.length < 6 ||
    InputEmail.value.length > 35 ||
    !InputEmail.value.includes("@")
 ) {
    InputEmail.style.border = "2px solid red";
    emailError.textContent = "Enter a valid email address"
    return false;
}else {
    InputEmail.style.border = "2px solid green";
    emailError.textContent = "";
    return true;
    }
}
function validateComment () {
    if (InputComment.value.length < 4) {
        InputComment.style.border = "2px solid red";
        commentError.textContent = "Comment is too short";
        return false;
    } else {
        InputComment.style.border = "2px solid green";
        commentError.textContent = "";
        return true;
    }
}

// ---------- LIVE INPUT LISTENERS ----------

InputName.addEventListener("input", validateName);
InputEmail.addEventListener("input", validateEmail);
InputComment.addEventListener("input", validateComment);

//-----
ContactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isCommentValid = validateComment();

    if (isNameValid && isEmailValid && isCommentValid) {
        alert("Submitted! Thank you (*0*)/");
        ContactForm.reset();
        InputName.style.border = "";
        InputEmail.style.border = "";
        InputComment.style.border = "";
        nameError.textContent = "";
        emailError.textContent = "";
        commentError.textContent = "";

    } else {
        if (!isNameValid) InputName.focus();
        else if (!isEmailValid) InputEmail.focus();
        else if (!isCommentValid) InputComment.focus();
    }
});

//     if (InputName.value.length < 5 ) {
//         InputName.style.border = "2px solid red";
//         nameError.textContent = ("Name is invalid");
//         return false;
//     }
//     if (InputEmail.value.length > 35  || InputEmail.value.length < 6) {
//         InputEmail.style.border = "2px solid red";
//         emailError.textContent = ("email is Too short or too long or needs an @");
//         return true;
//     }
//     if (!InputEmail.value.includes("@") ) {
//         InputEmail.style.border = "2px solid red";
//         emailError.textContent = ("Needs an '@'");
//         return;
//     }
//     if (InputComment.value.length < 4 ) {
//         InputComment.style.border = "2px solid red";
//         commentError.textContent = ("comment is too short");
//         return;
//     }
    
//         alert("Submitted! Thank you (*0*)/");
// });




