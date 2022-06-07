const btnShowModalLogin = document.getElementById('btn-js-modal');
const modal = document.querySelector('.js-modal');
const modalClose = document.getElementById('js-modal-close');
const modalClosePassword = document.getElementById('js-modal-close-password');
const modalContainer = document.getElementById('js-modal-container');
const btnLogin = document.getElementById('btn-login');
const btnForgetPassword = document.getElementById('submit-change-password');
const modaChangPassword = document.querySelector('.js-modal-change-pass');
const btnChangePassword = document.getElementById('btn-change-password');
var username = document.getElementById('username');
var password = document.getElementById('password');
var passwordOld = document.getElementById('password-old');
var passwordNew = document.getElementById('password-new');
var rePasswordNew = document.getElementById('re-password-new')
var passOld = 'admin';

function showModal() {
    modal.classList.add('open');
}

function hideModal() {
    modal.classList.remove('open');
}

function showModalChangePassword() {
    modaChangPassword.classList.add('open');
}

function hideModalChangePassword() {
    modaChangPassword.classList.remove('open');
}
btnForgetPassword.addEventListener('click', function() {
    showModalChangePassword();
    hideModal();
});
btnShowModalLogin.addEventListener('click', showModal);
modalClose.addEventListener('click', hideModal);
modalClosePassword.addEventListener('click', function() {
    hideModalChangePassword();
    showModal();
});
modalContainer.addEventListener('click', (event) => {
    event.stopPropagation();
});

btnLogin.addEventListener('click', validator);
btnChangePassword.addEventListener('click', validatePassword);

function onBlur() {
    if (username && password) {
        username.onblur = function() {
            if (username.value.trim().length == 0) {
                document.querySelector('.message-username').innerHTML = "Vui lòng nhập tài khoản";
                username.parentElement.classList.add('invalid');
            } else {
                document.querySelector('.message-username').innerHTML = "";
                username.parentElement.classList.remove('invalid')
            }
        }
        password.onblur = function() {
            if (password.value.trim().length == 0) {
                document.querySelector('.message-password').innerHTML = "Vui lòng nhập mật khẩu";
                password.parentElement.classList.add('invalid')
            } else {
                document.querySelector('.message-password').innerHTML = "";
                password.parentElement.classList.remove('invalid')
            }
        }
    }
    if (passwordOld && passwordNew && rePasswordNew) {
        passwordOld.onblur = function() {
            if (passwordOld.value.trim().length == 0) {
                document.querySelector('.message-password-old').innerHTML = "Vui lòng nhập mật khẩu cũ";
                passwordOld.parentElement.classList.add('invalid')
            } else {
                document.querySelector('.message-password-old').innerHTML = "";
                passwordOld.parentElement.classList.remove('invalid')
            }
        }
        passwordNew.onblur = function() {
            if (passwordNew.value.trim().length == 0) {
                document.querySelector('.message-password-new').innerHTML = "Vui lòng nhập mật khẩu mới";
                passwordNew.parentElement.classList.add('invalid')
            } else {
                document.querySelector('.message-password-new   ').innerHTML = "";
                passwordNew.parentElement.classList.remove('invalid')
            }
        }
        rePasswordNew.onblur = function() {
            if (rePasswordNew.value.trim().length == 0) {
                document.querySelector('.message-re-password-new').innerHTML = "Nhập lại mật khẩu mới";
                rePasswordNew.parentElement.classList.add('invalid')
            } else {
                document.querySelector('.message-re-password-new').innerHTML = "";
                rePasswordNew.parentElement.classList.remove('invalid')
            }
        }
    }
}

onBlur();

function validator() {
    if (username.value.trim().length == 0) {
        document.querySelector('.message-username').innerHTML = "Vui lòng nhập tài khoản";
    }
    if (password.value.trim().length == 0) {
        document.querySelector('.message-password').innerHTML = "Vui lòng nhập mật khẩu";
        return false;
    }
    if (username.value != "admin" && username.value != null) {
        document.querySelector('.message-username').innerHTML = "Sai tài khoản";
        return false;
    }
    if (password.value != passOld && password.value != null) {
        document.querySelector('.message-password').innerHTML = "Sai mật khẩu";
        return false;
    } else {
        document.querySelector('.form-message').innerHTML = "";
    }
    if (true) {
        btnLogin.innerHTML = "Loading..."
        setTimeout(function() {
            hideModal();
            btnShowModalLogin.innerHTML = "Đăng nhập thành công"
        }, 3000)
    }

}

function validatePassword() {
    if (passwordOld.value.trim().length == 0) {
        document.querySelector('.message-password-old').innerHTML = "Vui lòng nhập mật khẩu cũ";
    }
    if (passwordNew.value.trim().length == 0) {
        document.querySelector('.message-password-new').innerHTML = "Vui lòng nhập mật khẩu mới";
    }
    if (rePasswordNew.value.trim().length == 0) {
        document.querySelector('.message-re-password-new').innerHTML = "Vui lòng nhập lại mật khẩu mới";
        return false;
    }

    if (passOld != passwordOld.value && passwordOld.value != null) {
        document.querySelector('.message-password-old').innerHTML = "Sai mật khẩu cũ";
    }
    if (passwordNew.value != rePasswordNew.value && rePasswordNew.value != null) {
        document.querySelector('.message-re-password-new').innerHTML = "Mật khẩu mới nhập lại sai";
    }
    if (true) {
        passOld = passwordNew.value;
        console.log(passOld);
        btnChangePassword.innerHTML = "Loading"
        document.querySelector('.message-re-password-new').innerHTML = "Đổi mật khẩu thành công";
        document.querySelector('.message-re-password-new').style.color = "blue"
        setTimeout(function() {
            hideModalChangePassword();
            showModal();

        }, 2000)
    }
}