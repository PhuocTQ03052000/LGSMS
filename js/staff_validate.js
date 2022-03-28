// Lấy input
let x = 0;
const form = document.getElementById('form');
const pname = document.getElementById('provider-name');
const email = document.getElementById('provider-email');
const phone = document.getElementById('provider-phone');
const address = document.getElementById('provider-address');
//Điều kiện email
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
//Điều kiện số điện thoại
const isValidPhone = phone => {
    const re = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    return re.test(String(phone).toLowerCase());
}
//Xét điều kiện để hiện thông báo lỗi
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.fail');
    errorDisplay.innerText = message;
    inputControl.classList.add('failed');
    inputControl.classList.remove('success')
    x = 0;
}
//Xét điều kiện để hiện thông báo thành công
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.fail');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('failed');
    x = x + 1;
    
};
//Chạy hàm validate
form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
    if (x == 4) {
        Fnon.Ask.Danger({
            title: 'Confirmation',
            message: 'Are you sure?',
            callback: (result) => {
                console.log('result is: ', result);
                if (result == true) {
                    Fnon.Alert.Dark({
                        title: 'Alert Title',
                        message: 'Alert Dialog',
                        callback: () => {
                            document.getElementById("form").submit();
                            console.log('Dismissed');
                        }
                    });
                } else {
                    console.log('nah')
                    x = 0;
                    console.log('nah',x)
                }
            }
        });
    }
});

//Trim input và các thông báo
const validateInputs = () => {
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    const nameValue = pname.value.trim();
    const addressValue = address.value.trim();
    // Thông báo nhập số điện thoại
    if (phoneValue === '') {
        setError(phone, 'Yêu cầu nhập số điện thoại');
    } else if (!isValidPhone(phoneValue)) {
        setError(phone, 'Nhập đúng định dạng số điện thoại');
    } else {
        setSuccess(phone);
    }
    //Thông báo nhập địa chỉ email
    if (emailValue === '') {
        setError(email, 'Yêu cầu nhập địa chỉ email');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Nhập đúng định dạng email');
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
        setError(pname, 'Yêu cần nhập tên nhà cung cấp');
    } else {
        setSuccess(pname);
    }
};

