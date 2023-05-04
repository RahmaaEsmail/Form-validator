const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('Confirm-password');
const submitBtn = document.querySelector('button');
const inputs = document.querySelectorAll('input');
let userInfoList = [];


const getUserInfo = function () {
    inputs.forEach(input=>{
        if(input.value === '') {
            input.closest('.input').querySelector('p').classList.add('wrong-value');
        }
        else {
            input.closest('.input').querySelector('p').classList.remove('wrong-value');
        }
    })

    if(validateInputs()){
    const info = {
        name: userName.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value
    }

    userInfoList.push(info);
    inputs.forEach(input=>input.classList.add('success'))
    return true;
}
return false;
}


const validateUserName = function () {
    const alertUserName = document.querySelector('.alert-user-name');

    const regex = /^[A-Z][a-z]{3,}./;
    if (regex.test(userName.value) && userName.value != '') {
        userName.classList.add('success')
        userName.classList.remove('wrong')
        alertUserName.classList.remove('wrong-value')
        return true
    }
    else {
        userName.classList.add('wrong')
        alertUserName.classList.add('wrong-value')
        userName.classList.remove('success')
        return false;
    }
}

const validateEmail = function () {
    const alertEmail = document.querySelector('.alert-email')

    const regex = /[a-zA-Z0-9]@(gmail|yahoo).com$/;
    if (regex.test(email.value) && email.value != '') {
        email.classList.add('success')
        email.classList.remove('wrong')
        alertEmail.classList.remove('wrong-value');
        return true;
    }
    else {
        email.classList.add('wrong')
        email.classList.remove('success')
        alertEmail.classList.add('wrong-value');
        return false;
    }
}

const validatePassword = function () {
    const alertPass = document.querySelector('.alert-password');
    if (password.value.length >= 6) {
        password.classList.add('success');
        password.classList.remove('wrong');
        alertPass.classList.remove('wrong-value')
        return true;
    }
    else {
        password.classList.remove('success');
        password.classList.add('wrong');
        alertPass.classList.add('wrong-value');
        return false;
    }
}

const validateConfirmPass = function() {
    const alertConfirmPassword = document.querySelector('.alert-confirm-password');

    if(confirmPassword.value.length === password.value.length && confirmPassword.value === password.value && confirmPassword.value.length >=6 && password.value.length>=6 ) {
           confirmPassword.classList.add('success')
           confirmPassword.classList.remove('wrong')
           alertConfirmPassword.classList.remove('wrong-value')
    }
    else {
        confirmPassword.classList.remove('success')
        confirmPassword.classList.add('wrong')
        alertConfirmPassword.classList.add('wrong-value')
    }
}

const validateInputs = function() {
    if(validateUserName() && validateEmail() && validatePassword() &&  validateConfirmPass()) 
      return true;
    else 
      return false;
}

submitBtn.addEventListener('click',getUserInfo)
