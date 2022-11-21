const submit_email = document.querySelector('.submit_button');
const email_input = document.querySelector('.email_input')
const email_error_message = document.querySelector('.email_error_message')
const email_accept_message = document.querySelector('.email_accept_message')



submit_email.addEventListener('click', function validateForm() {
    var emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;//regex for most email validation
    var formdata = document.getElementById('email').value;// grab form data
    const regexTest = emailRegex.test(formdata); //tests regex again formdata

    email_error_message.classList.remove('error_display')
    email_input.classList.remove('email_error_border')

    if (regexTest === false){
        email_accept_message.classList.remove('error_display')
        email_error_message.classList.add('error_display')
        email_input.classList.add('email_error_border')
        return;
    } else {
        email_error_message.classList.remove('error_display')
        email_input.classList.remove('email_error_border')
        document.getElementById('email_form').reset();
        email_accept_message.classList.add('error_display')
        return;
    };
});
 
