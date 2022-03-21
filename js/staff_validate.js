function InvalidMsg(textbox) {
    
    if (textbox.value == '') {
        textbox.setCustomValidity('Xin hãy nhập email của bạn.');
    }
    else if(textbox.validity.typeMismatch){
        textbox.setCustomValidity('Xin hãy nhập đúng định dạng email.');
    }
    else {
        textbox.setCustomValidity('');
    }
    return true;
}

function InvalidNum(textbox) {
    
    if (textbox.value == '') {
        textbox.setCustomValidity('Xin hãy nhập số sản phẩm.');
    }
    else if(textbox.value <= 0){
        textbox.setCustomValidity('Xin hãy nhập số dương.');
    }
    else {
        textbox.setCustomValidity('');
    }
    return true;
}

function InvalidPrice(textbox) {
    
    if (textbox.value == '') {
        textbox.setCustomValidity('Xin hãy nhập giá sản phẩm.');
    }
    else if(textbox.value <= 0){
        textbox.setCustomValidity('Xin hãy nhập đúng giá.');
    }
    else {
        textbox.setCustomValidity('');
    }
    return true;
}

function InvalidPhone(textbox) {
    const re = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    if (textbox.value == '') {
        textbox.setCustomValidity('Xin hãy nhập số điện thoại.');
    }
    else if(textbox.value != re){
        textbox.setCustomValidity('Xin hãy nhập đúng số điện thoại.');
    }
    else {
        textbox.setCustomValidity('');
    }
    return true;
}
