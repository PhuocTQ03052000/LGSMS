let x = 0;
const form = document.getElementById('form');
const account = document.getElementById('email');
const password = document.getElementById('password');

//Xét điều kiện để hiện thông báo lỗi form add
const setError = (element, message) => {
    const inputControl = element.parentNode;
    const errorDisplay = inputControl.querySelector('.fail');
    errorDisplay.innerText = message;
    inputControl.classList.add('failed');
    
}
//Xét điều kiện để hiện thông báo thành công form add
const setOkay = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.fail');
    errorDisplay.innerText = '';
    inputControl.classList.remove('failed');
    x = x + 1;
};

//Chạy hàm validate form add
form.addEventListener('submit', e => {
    e.preventDefault();
    x = 0;
    validateInputs();
    if (x == 2) {
        // alertFunction();
        // document.getElementById("form").submit();
        //form đã được submit tôi chưa biết so sánh form với database tn nên bạn thử sau đây noti trong if hoạt động oke
        if(password!=123456){
            Fnon.Hint.Dark('Đăng nhập thất bại', {
                fontFamily:'"Quicksand", sans-serif',
                position: 'center-top',
                spacing: '16px',
                svgSize: { w: '160px', h: '160px' },
                textColor: '#fff',
                fontSize: '16px',
                backgroundColor: '#ff4444',
                shadowColor: 'rgba(2, 158, 255, 0.3)',
                width: '300px',
                zindex: 4000,
                animation: 'slide-top',
                animationDuration: 500,
                displayDuration: 3000,
                progressColor: 'rgba(255,255,255,0.9)',
                callback:undefined,
              });
        }
    }
});


//Trim input và các thông báo form add
const validateInputs = () => {
    const accValue = account.value.trim();
    const passValue = password.value.trim();
    //Thông báo tên tài khoản
    if (accValue === '') {
        setError(account, 'Yêu cầu tên tài khoản');
    }else {
        setOkay(account);
    }
    //Thông báo mặt khẩu
    if (passValue === '') {
        setError(password, 'Yêu cầu nhập mật khẩu');
    } else {
        setOkay(password);
    }
};
