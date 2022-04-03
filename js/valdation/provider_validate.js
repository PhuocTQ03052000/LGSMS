// Lấy input
let x = 0;
let y = 0;
const form = document.getElementById('form');
const pname = document.getElementById('provider-name');
const email = document.getElementById('provider-email');
const phone = document.getElementById('provider-phone');
const address = document.getElementById('provider-address');

const form1 = document.getElementById('form1');
const pname1 = document.getElementById('provider-name1');
const email1= document.getElementById('provider-email1');
const phone1 = document.getElementById('provider-phone1');
const address1 = document.getElementById('provider-address1');

//Chạy hàm validate form add
form.addEventListener('submit', e => {
    e.preventDefault();
    x = 0;
    validateInputs();
    if (x == 4) {
        alertFunction();
    }
});

//Trim input và các thông báo form add
const validateInputs = () => {
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    const nameValue = pname.value.trim();
    const addressValue = address.value.trim();

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
        setError(address, 'Yêu cầu nhập địa chỉ nhà cung cấp');
    } else {
        setSuccess(address);
    }
    //Thông báo tên nhà cung cấp
    if (nameValue === '') {
        setError(pname, 'Yêu cầu nhập tên nhà cung cấp');
    } else {
        setSuccess(pname);
    }
};

//Chạy hàm validate form edit
form1.addEventListener('submit', e => {
    e.preventDefault();
    y = 0;
    validateInputs1();
    if (y == 4) {
        alertFunction();
    }
});
//Trim input và các thông báo form edit
const validateInputs1 = () => {
    const phoneValue1 = phone1.value.trim();
    const emailValue1 = email1.value.trim();
    const nameValue1 = pname1.value.trim();
    const addressValue1 = address1.value.trim();
    // Thông báo nhập số điện thoại
    if (phoneValue1 === '') {
        setError1(phone1, 'Yêu cầu nhập số điện thoại');
    } else if (!isValidPhone(phoneValue1)) {
        setError1(phone1, 'Nhập đúng định dạng số điện thoại có 10 chữ số');
    } else {
        setSuccess1(phone1);
    }
    //Thông báo nhập địa chỉ email
    if (emailValue1 === '') {
        setError1(email1, 'Yêu cầu nhập địa chỉ email');
    } else if (!isValidEmail(emailValue1)) {
        setError1(email1, 'Nhập đúng định dạng email your@example.com');
    } else {
        setSuccess1(email1);
    }
    //Thông báo nhập địa chỉ
    if (addressValue1 === '') {
        setError1(address1, 'Yêu cầu nhập địa chỉ nhà cung cấp');
    } else {
        setSuccess1(address1);
    }
    //Thông báo tên nhà cung cấp
    if (nameValue1 === '') {
        setError1(pname1, 'Yêu cầu nhập tên nhà cung cấp');
    } else {
        setSuccess1(pname1);
    }
};


