let x = 0;
const form = document.getElementById('form');
const price = document.getElementById('order-deposit');


//Chạy hàm validate form add
form.addEventListener('submit', e => {
    e.preventDefault();
    x = 0;
    validateInputs();
    if (x == 1) {
        alertFunction();
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

