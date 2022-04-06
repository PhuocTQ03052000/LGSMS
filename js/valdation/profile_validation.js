// Lấy input
let x = 0;
let y = 0;
const form = document.getElementById('form');
const aname = document.getElementById('user-name');
const email = document.getElementById('user-email');
const phone = document.getElementById('user-phone');
const address = document.getElementById('user-address');
const dob = document.getElementById('user-dob');

const form1 = document.getElementById('form1');
const oldpass = document.getElementById('old-password');
const newpass = document.getElementById('new-password');
const repass = document.getElementById('re-password');

//Chạy hàm validate form add
form.addEventListener('submit', e => {
    e.preventDefault();
    x = 0;
    validateInputs();
    if (x == 5) {
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
        setError(address, 'Yêu cầu nhập địa chỉ');
    } else {
        setSuccess(address);
    }
    //Thông báo tên nhân viên
    if (nameValue === '') {
        setError(aname, 'Yêu cầu nhập họ và tên');
    } else {
        setSuccess(aname);
    }
    //Thông báo ngày sinh 
    if (dobValue === '') {
        setError(dob, 'Yêu cầu chọn ngày sinh');
    } else {
        setSuccess(dob);
    }
};

//Chạy hàm validate form change password
form1.addEventListener('submit', e => {
    e.preventDefault();
    y = 0;
    validateInputs1();
    if (y == 3) {
        
        //form đã được submit tôi chưa biết so sánh form với database tn nên bạn thử sau đây noti trong if hoạt động oke
        console.log(oldpass.value)
        if(oldpass.value!=123456){
            Fnon.Hint.Dark('Đổi mật khẩu thất bại', {
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
        }else{
            console.log("yes")
            alertFunction();
        // document.getElementById("form").submit();
        }
    }
});

//Trim input và các thông báo form change password
const validateInputs1 = () => {
    const oldpassValue = oldpass.value.trim();
    const newpassValue = newpass.value.trim();
    const repassValue = repass.value.trim();

    //Thông báo nhập mật khẩu
    if (oldpassValue === '') {
        setError1(oldpass, 'Yêu cầu nhập mật khẩu');
    } else {
        setOkay1(oldpass);
    }

    //Thông báo nhập mật khẩu
    if (newpassValue === '') {
        setError1(newpass, 'Yêu cầu nhập mật khẩu');
    } else if (newpassValue.length < 8) {
        setError(newpass, 'Mật khẩu tối thiểu 8 kí tự.')
    } else {
        setOkay1(newpass);
    }
    //Thông báo xác nhận mật khảu
    if (repassValue === '') {
        setError1(repass, 'Yêu cầu xác nhận mật khẩu');
    } else if (repassValue !== newpassValue) {
        setError1(repass, "Không trùng với mật khẩu");
    } else {
        setOkay1(repass);
    }

}