var cage = prompt("nhập số tiền thu nhập cá nhân ");
var tax;
if (tax > 15){
    tax = cage*30/100;
    alert( "thuế : " + tax)
}else if (cage >= 7){
    tax = cage*20/100;
    alert("thuế : " + tax)
}else {
    tax = cage*10/100;
    alert("thuế : " + tax)
}