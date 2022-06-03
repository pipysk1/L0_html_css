const btnShowModalLogin = document.getElementById('btn-js-modal');
const modal = document.querySelector('.js-modal');
const modalClose = document.getElementById('js-modal-close');
const modalContainer = document.getElementById('js-modal-container');
const btnLogin = document.getElementById('btn-login');
const btnForgetPassword = document.querySelector('.modal-forget-password');
var username = document.getElementById('username');
var password = document.getElementById('password');
var passOld = 'admin';

function showModal() {
    modal.classList.add('open');
}

function hideModal() {
    modal.classList.remove('open');
}
btnForgetPassword.addEventListener('click', function() {
    alert("Đang phát triển")
})

btnShowModalLogin.addEventListener('click', showModal);
modalClose.addEventListener('click', hideModal);
modalContainer.addEventListener('click', (event) => {
    event.stopPropagation();
})
btnLogin.addEventListener('click', validator);

function validator() {
    if (username && password) {
        username.onblur = function() {
            if (username.value.trim().length == 0) {
                document.querySelector('.message-username').innerHTML = "Vui lòng nhập tài khoản";
                username.parentElement.classList.add('invalid')
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
    btnLogin.onclick = function() {
        if (username.value !== "admin" && username.value != null) {
            document.querySelector('.message-username').innerHTML = "Sai tài khoản";
        }
        if (password.value !== passOld && password.value != null) {
            document.querySelector('.message-password').innerHTML = "Sai mật khẩu";
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
}
validator();