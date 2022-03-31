let x = 0;
const form = document.getElementById('form');
const price = document.getElementById('order-deposit');

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

//Chạy hàm validate form add
form.addEventListener('submit', e => {
    e.preventDefault();
    x = 0;
    validateInputs();
    if (x == 1) {
        Fnon.Ask.Danger({
            width: 'nl',
            animation: 'slide-top',
            closeButton: false,
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
                        width: 'nl',
                        animation: 'slide-top',
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
                }
            }
        });
    }
});


//Trim input và các thông báo form add
const validateInputs = () => {
    const priceValue = price.value.trim();
    //Thông báo tên nhà cung cấp
    if (priceValue === '') {
        setError(price, 'Yêu cầu nhập giá sản phẩm');
    }else if (priceValue < 0) {
        setError(price, 'Yêu cầu nhập đúng giá sản phẩm'); 
    } else {
        setSuccess(price);
    }
};

