const submit_email = document.querySelector('.submit_button');



submit_email.addEventListener('click', function validateForm() {
    var emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;//regex for most email validation
    var formdata = document.getElementById('email').value;// grab form data
    const regexTest = emailRegex.test(formdata); //tests regex again formdata

    if (regexTest === false){
        alert('Please enter a valid email');
        return;
    } else {
        alert('Your e-mail has been submitted');
        return;
    };
});
 
