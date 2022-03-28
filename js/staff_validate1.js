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
//Xét điều kiện để hiện thông báo lỗi form add
const setError = (element, message) => {
    const inputControl = element.parentNode;
    const errorDisplay = inputControl.querySelector('.fail');
    console.log(element.parentNode);
    errorDisplay.innerText = message;
    inputControl.classList.add('failed');
    inputControl.classList.remove('success')
    console.log(x)
}
//Xét điều kiện để hiện thông báo thành công form add
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.fail');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('failed');
    x = x + 1;   
};

//Chạy hàm validate form add
console.log(form);
form.addEventListener('submit', e => {
    e.preventDefault();
    x=0;
    validateInputs();
    console.log('nah',x)
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



//Xét điều kiện để hiện thông báo lỗi form edit
const setError1 = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.fail');
    errorDisplay.innerText = message;
    inputControl.classList.add('failed');
    inputControl.classList.remove('success')
}
//Xét điều kiện để hiện thông báo thành công form edit
const setSuccess1 = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.fail');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('failed');
    y = y + 1;
    
};
//Chạy hàm validate form edit
form1.addEventListener('submit', e => {
    e.preventDefault();
    y = 0;
    validateInputs1();
    if (y == 4) {
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
                            document.getElementById("form1").submit();
                            console.log('Dismissed');
                        }
                    });
                } else {
                    console.log('nah')
                    y = 0;
                    console.log('nah',y)
                }
            }
        });
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
    //Thông báo tên nhà cung cấp
    if (nameValue1 === '') {
        setError1(pname1, 'Yêu cần nhập tên nhà cung cấp');
    } else {
        setSuccess1(pname1);
    }
};


