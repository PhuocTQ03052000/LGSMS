function confirmFunction() {
    // if (InvalidMsg == true) {
        Fnon.Ask.Dark({
            width: 'nl', // sm//lg//nl//xl
            // closeButton: true,
            animation: 'slide-top',//'fade', 'slide-top', 'slide-bottom', 'slide-right' and 'slide-left'
            closeButton: false,
            // callback: undefined,
            // icon: undefined,
            // iconColor: '#4e73df',
            // showIcon: true,
            message: 'Are you sure?',
        
            title: 'Confirmation',
            titleColor: '#fff',
            titleBackground: '#4e73df',
        
            btnOkText: 'Ok',
            btnOkColor: '#fff',
            btnOkBackground: '#4e73df',
            btnOkShadow: 'rgba(0, 0, 0, 0.2)',
            btnOkBorderColor: '#d4d4d4',
        
            btnCancelText: 'Cancel',
            btnCancelColor: '#fff',
            btnCancelBackground: '#4e73df',
            btnCancelShadow: 'rgba(0, 0, 0, 0.1)',
            btnCancelBorderColor: '#d4d4d4',
        
            color: '#2b2b2b',
            background: 'rgba(0, 0, 0, 0.1)',
            callback: (result) => {
                console.log('result is: ', result);
                if (result == true) {
                    Fnon.Alert.Primary({
                        title: 'Alert Title',
                        message: 'Alert Dialog',
                        callback: () => {
                            document.getElementById("form").submit();
                            console.log('Dismissed');
                        }
                    });
                } else {
                    console.log('nah')
                }
            }
        });
}

// Fnon.Ask.Init({
//     fontFamily: defaultFont,
//     width: 'nl', // sm//lg//nl//xl
//     closeButton: true,
//     animation: 'slide-top',//'fade', 'slide-top', 'slide-bottom', 'slide-right' and 'slide-left'
//     closeButton: false,
//     callback: undefined,
//     icon: undefined,
//     iconColor: '#fff',
//     showIcon: false,
//     message: 'Are you sure?',

//     title: 'Confirmation',
//     titleColor: '#fff',
//     titleBackground: '#fff',

//     btnOkText: 'Ok',
//     btnOkColor: '#fff',
//     btnOkBackground: '#fff',
//     btnOkShadow: 'rgba(0, 0, 0, 0.2)',
//     btnOkBorderColor: '#d4d4d4',

//     btnCancelText: 'Cancel',
//     btnCancelColor: '#fff',
//     btnCancelBackground: '#fff',
//     btnCancelShadow: 'rgba(0, 0, 0, 0.1)',
//     btnCancelBorderColor: '#d4d4d4',

//     color: '#2b2b2b',
//     background: 'rgba(0, 0, 0, 0.1)',

//     zIndex:4000,

    // Functions
//     beforeShow: undefined,
//     afterShow: undefined,

// });
function confirmChangePass() {
    if (confirm("Bạn có chắc chắn với việc thay đổi mật khẩu này?") == true) {
        alert("Lưu thành công!");
        location.reload();
    }
}

// $('.example1').on('click', function(){
//     $.alert({
//         title: 'Alert!',
//         content: 'Simple alert!',
//     });
// });

$('#notify').on('click', function () {
    Fnon.Hint.Dark('CSSScript Toast', {
        position: 'right-top',
        fontSize: '14px',
        width: '300px'
    });
})

$('#loading').on('click', function () {
    Fnon.Wait.Liquid('Please Wait', {
        textSize: '14px',
        clickToClose: true,
    });
})

$('#alert').on('sumbit', function () {
    Fnon.Alert.Dark({
        title: 'Alert Title',
        message: 'Alert Dialog',
        callback: () => {
            // do some thing
            console.log('Dismissed');
        }
    });
})

$('#confirm').on('click', function () {
    Fnon.Ask.Danger({
        title: 'Confirmation',
        message: 'Are you sure?',
        callback: (result) => {
            // do some thing
            console.log('result is: ', result);
        }
    });

})

$('#dialog').on('click', function () {
    Fnon.Dialogue.Success('Message', 'Title', 'Sure', 'Naah', (closer, html) => {
        return false; // this will avoid closing the model.
        closer();// will force the closing.
        // html is simply the body container where you can use it to do some validation, querying,...etc.
    });

})
