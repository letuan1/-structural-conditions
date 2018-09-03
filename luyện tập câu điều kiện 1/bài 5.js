var test = parseInt(prompt("nhập điểm bài kiểm tra"));
var test2 = parseInt(prompt("nhập điểm bìa thi gữa kì"));
var test3 = parseInt(prompt("nhập điểm thi cuối kì"));
var diem = (test + test2 + test3) / 3;
alert(diem)


if (diem < 4) {
    document.write('Học Lại');
} else if (diem >= 4 && diem < 5.5) {
    document.write(' Loại D');
} else if (diem >= 5.5 && diem < 7) {
    document.write('Loai C');
} else if (diem >= 7 && diem < 8.5) {
    document.write('Loại B');
} else if (diem >= 8.5 && diem <= 10) {
    document.write('Loai A');
} else {
    document.write('Điểm không hợp lệ');
}