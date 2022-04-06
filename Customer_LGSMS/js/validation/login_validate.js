let x = 0;
const form = document.getElementById('loginForm');
const account = document.getElementById('username');
const password = document.getElementById('password');

const form1 = document.getElementById('registerForm');
const regiacc = document.getElementById('refiUsername');
const reemail = document.getElementById('regiEmail');
const regipass = document.getElementById('regiPass');
const repass = document.getElementById('regiRepass');
//Chạy hàm validate form add
form.addEventListener('submit', e => {
    e.preventDefault();
    x = 0;
    validateInputs();
    if (x == 2) {
        document.getElementById("form").submit();
        //form đã được submit tôi chưa biết so sánh form với database tn nên bạn thử sau đây noti trong if hoạt động oke

    }
});


//Trim input và các thông báo form add
const validateInputs = () => {
    const accValue = account.value.trim();
    const passValue = password.value.trim();
    //Thông báo tên tài khoản
    if (accValue === '') {
        setError(account, 'Yêu cầu tên tài khoản');
    } else {
        setOkay(account);
    }
    //Thông báo mặt khẩu
    if (passValue === '') {
        setError(password, 'Yêu cầu nhập mật khẩu');
    } else {
        setOkay(password);
    }
};

form1.addEventListener('submit', e => {
    e.preventDefault();
    y = 0;
    validateInputs1();
    if (y == 4) {
        document.getElementById("form").submit();
        //form đã được submit tôi chưa biết so sánh form với database tn nên bạn thử sau đây noti trong if hoạt động oke

    }
});

const validateInputs1 = () => {
    const regiaccValue = regiacc.value.trim();
    const regimailValue = reemail.value.trim();
    const regipassValue = regipass.value.trim();
    const repassValue = repass.value.trim();
    //Thông báo tên tài khoản
    if (regiaccValue === '') {
        setError(regiacc, 'Yêu cầu tên tài khoản');
    } else {
        setOkay(regiacc);
    }
    //Thông báo nhập mật khẩu
    if (regipassValue === '') {
        setError(regipass, 'Yêu cầu nhập mật khẩu');
    } else if (regipassValue.length < 8) {
        setError(regipass, 'Mật khẩu tối thiểu 8 kí tự.')
    } else {
        setSuccess(regipass);
    }
    //Thông báo xác nhận mật khảu
    if (repassValue === '') {
        setError(repass, 'Yêu cầu xác nhận mật khẩu');
    } else if (repassValue !== regipassValue) {
        setError(repass, "Không trùng với mật khẩu");
    } else {
        setSuccess(repass);
    }
    //Thông báo nhập địa chỉ email
    if (regimailValue === '') {
        setError(reemail, 'Yêu cầu nhập địa chỉ email');
    } else if (!isValidEmail(regimailValue)) {
        setError(reemail, 'Nhập đúng định dạng email your@example.com');
    } else {
        setSuccess(reemail);
    }
};
