var vnd = prompt("nhập số tiền ban đầu");
var interest = 10/100;
var sendMonth = prompt("nhập số tháng gửi");
var interests;

interests = vnd * interest *sendMonth;

alert("số tiền ban đầu : " + vnd + " , số tiền lãi là : " + interests)