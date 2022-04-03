function alertFunction() {
    Fnon.Ask.Danger({
        width: 'nl', // sm//lg//nl//xl
        // closeButton: true,
        animation: 'slide-top',//'fade', 'slide-top', 'slide-bottom', 'slide-right' and 'slide-left'
        closeButton: false,
        // callback: undefined,
        // icon: undefined,
        // iconColor: '#4e73df',
        // showIcon: true,
        message: 'Bạn có chắc chắn lưu thay đổi này?',

        title: 'Thông báo xác nhận',
        titleColor: '#fff',
        titleBackground: '#4e73df',

        btnOkText: 'Lưu',
        btnOkColor: '#fff',
        btnOkBackground: '#4e73df',
        btnOkShadow: 'rgba(0, 0, 0, 0.5)',
        btnOkBorderColor: '#d4d4d4',

        btnCancelText: 'Hủy',
        btnCancelColor: '#fff',
        btnCancelBackground: '#4e73df',
        btnCancelShadow: 'rgba(0, 0, 0, 0.5)',
        btnCancelBorderColor: '#d4d4d4',

        color: '#2b2b2b',
        background: 'rgba(0, 0, 0, 0.1)',
        callback: (result) => {
            if (result == true) {
                Fnon.Alert.Dark({
                    message: 'Đã lưu thành công',
                    title: 'Xác nhận',
                    titleBackground: '#4e73df',
                    btnOkColor: '#fff',
                    btnOkBackground: '#4e73df',
                    color: '#2b2b2b',
                    background: 'rgba(0, 0, 0, 0.1)',
                    width: 'nl', // sm, lg, nl, xl
                    // closeButton: true,
                    animation: 'slide-top', // 'fade', 'slide-top', 'slide-bottom', 'slide-right' and 'slide-left'
                    // closeButton: false,
                    // icon: undefined,
                    // iconColor: '#000',
                    // showIcon: false,
                    btnOkText: 'Ok',
                    btnOkColor: '#fff',
                    btnOkBackground: '#4e73df',
                    btnOkShadow: 'rgba(0, 0, 0, 0.5)',
                    btnOkBorderColor: '#d4d4d4',
                    callback: () => {
                        document.getElementById("form").submit();
                    }
                });
        } else {
            x = 0;
            y = 0;
        }
    }
});
}
function confirmFunction() {
    alertFunction();
}

function confirmChangePass() {
    Fnon.Ask.Dark({
        width: 'nl', // sm//lg//nl//xl
        // closeButton: true,
        animation: 'slide-top',//'fade', 'slide-top', 'slide-bottom', 'slide-right' and 'slide-left'
        closeButton: false,
        // callback: undefined,
        // icon: undefined,
        // iconColor: '#4e73df',
        // showIcon: true,
        message: 'Bạn có chắc chắn với việc thay đổi mật khẩu này?',

        title: 'Thông báo xác nhận',
        titleColor: '#fff',
        titleBackground: '#4e73df',

        btnOkText: 'Lưu',
        btnOkColor: '#fff',
        btnOkBackground: '#4e73df',
        btnOkShadow: 'rgba(0, 0, 0, 0.5)',
        btnOkBorderColor: '#d4d4d4',

        btnCancelText: 'Hủy',
        btnCancelColor: '#fff',
        btnCancelBackground: '#4e73df',
        btnCancelShadow: 'rgba(0, 0, 0, 0.5)',
        btnCancelBorderColor: '#d4d4d4',

        color: '#2b2b2b',
        background: 'rgba(0, 0, 0, 0.1)',
        callback: (result) => {
            if (result == true) {
                Fnon.Alert.Dark({
                    message: 'Đã thay đổi thành công',
                    title: 'Xác nhận',
                    titleBackground: '#4e73df',
                    btnOkColor: '#fff',
                    btnOkBackground: '#4e73df',
                    color: '#2b2b2b',
                    background: 'rgba(0, 0, 0, 0.1)',
                    width: 'nl', // sm, lg, nl, xl
                    // closeButton: true,
                    animation: 'slide-top', // 'fade', 'slide-top', 'slide-bottom', 'slide-right' and 'slide-left'
                    // closeButton: false,
                    // icon: undefined,
                    // iconColor: '#000',
                    // showIcon: false,
                    btnOkText: 'Ok',
                    btnOkColor: '#fff',
                    btnOkBackground: '#4e73df',
                    btnOkShadow: 'rgba(0, 0, 0, 0.5)',
                    btnOkBorderColor: '#d4d4d4',
                    callback: () => {
                        location.reload();
                    }
                });
            } else {
            }
        }
    });
}

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
    errorDisplay.innerText = message;
    inputControl.classList.add('failed');
    inputControl.classList.remove('success')
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