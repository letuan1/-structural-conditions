var int1 = prompt("nhập số đầu tiên");
var int2 = prompt("nhập số thứ hai");
var int3 = prompt("nhập số thứ ba");

var max = int1;
if (max < int2){
    max = int2;
}
if (max < int3){
    max = int3;
}
alert("số lớn nhất là  " + max);