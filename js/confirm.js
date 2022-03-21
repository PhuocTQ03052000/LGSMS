function confirmFunction() {
    if (confirm("Bạn có chắc chắn với những thay đổi này?") == true) {
        alert("Lưu thành công!");
        location.reload();
    }
}