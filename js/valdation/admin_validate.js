// Lấy input
let x = 0;
let y = 0;
const form = document.getElementById('form');
const aname = document.getElementById('staff-name');
const email = document.getElementById('staff-email');
const phone = document.getElementById('staff-phone');
const address = document.getElementById('staff-address');
const dob = document.getElementById('staff-dob');
const username = document.getElementById('username');
const pass = document.getElementById('staff-password');

const form1 = document.getElementById('form1');
const aname1 = document.getElementById('staff-name1');
const email1 = document.getElementById('staff-email1');
const phone1 = document.getElementById('staff-phone1');
const address1 = document.getElementById('staff-address1');
const dob1 = document.getElementById('staff-dob1');
const username1 = document.getElementById('username1');



//Chạy hàm validate form add
form.addEventListener('submit', e => {
    e.preventDefault();
    x = 0;
    validateInputs();
    if (x == 7) {
        alertFunction();
    }
});
//Trim input và các thông báo form add
const validateInputs = () => {
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    const nameValue = aname.value.trim();
    const addressValue = address.value.trim();
    const dobValue = dob.value.trim();
    const usernameValue = username.value.trim();
    const passValue = pass.value.trim();

    // Thông báo nhập số điện thoại

    if (phoneValue === '') {
        setError(phone, 'Yêu cầu nhập số điện thoại');
    } else if (!isValidPhone(phoneValue)) {
        setError(phone, 'Nhập đúng định dạng số điện thoại có 10 chữ số');
    } else {
        setSuccess(phone);
    }

    //Thông báo nhập địa chỉ email
    if (emailValue === '') {
        setError(email, 'Yêu cầu nhập địa chỉ email');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Nhập đúng định dạng email your@example.com');
    } else {
        setSuccess(email);
    }
    //Thông báo nhập địa chỉ
    if (addressValue === '') {
        setError(address, 'Yêu cầu nhập địa chỉ nhân viên');
    } else {
        setSuccess(address);
    }
    //Thông báo tên nhân viên
    if (nameValue === '') {
        setError(aname, 'Yêu cầu nhập tên nhân viên');
    } else {
        setSuccess(aname);
    }
    //Thông báo ngày sinh 
    if (dobValue === '') {
        setError(dob, 'Yêu cầu chọn ngày sinh');
    } else {
        setSuccess(dob);
    }
    //Thông báo tên đăng nhập
    if (usernameValue === '') {
        setError(username, 'Yêu cầu nhập tên đăng nhập của nhân viên');
    } else {
        setSuccess(username);
    }
    //Thông báo mật khẩu
    if (passValue === '') {
        setError(pass, 'Yêu cầu nhập mật khẩu cho nhân viên');
    } else {
        setSuccess(pass);
    }
};



//Chạy hàm validate form edit
form1.addEventListener('submit', e => {
    e.preventDefault();
    y = 0;
    validateInputs1();
    if (y == 6) {
        alertFunction();
    }
});
//Trim input và các thông báo form edit
const validateInputs1 = () => {
    const phoneValue1 = phone1.value.trim();
    const emailValue1 = email1.value.trim();
    const nameValue1 = aname1.value.trim();
    const addressValue1 = address1.value.trim();
    const dobValue1 = dob1.value.trim();
    const usernameValue1 = username1.value.trim();
    // Thông báo nhập số điện thoại
    if (phoneValue1 === '') {
        setError1(phone1, 'Yêu cầu nhập số điện thoại');
    } else if (!isValidPhone(phoneValue1)) {
        setError1(phone1, 'Nhập đúng định dạng số điện thoại');
    } else {
        setSuccess1(phone1);
    }
    //Thông báo nhập địa chỉ email
    if (emailValue1 === '') {
        setError1(email1, 'Yêu cầu nhập địa chỉ email');
    } else if (!isValidEmail(emailValue1)) {
        setError1(email1, 'Nhập đúng định dạng email');
    } else {
        setSuccess1(email1);
    }
    //Thông báo nhập địa chỉ
    if (addressValue1 === '') {
        setError1(address1, 'Yêu cầu nhập địa chỉ nhà cung cấp');
    } else {
        setSuccess1(address1);
    }

    //Thông báo tên nhân viên
    if (nameValue1 === '') {
        setError1(aname1, 'Yêu cầunhập tên nhân viên');
    } else {
        setSuccess1(aname1);
    }
    //Thông báo ngày sinh 
    if (dobValue1 === '') {
        setError1(dob1, 'Yêu cầuchọn ngày sinh');
    } else {
        setSuccess1(dob1);
    }
    //Thông báo tên đăng nhập
    if (usernameValue1 === '') {
        setError1(username1, 'Yêu cầunhập tên đăng nhập của nhân viên');
    } else {
        setSuccess1(username1);
    }

};


