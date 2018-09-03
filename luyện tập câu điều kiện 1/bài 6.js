function icone() {
    var salaryOverTime = parseInt(prompt("nhập tiền"));
    var revenue = parseInt(prompt("nhập doanh thu"));
    var debtCollection = parseInt(prompt("nhập công nợ thu về "));
    var allowance = parseInt(prompt("nhập phụ cấp "));
    var income;

    income = salaryOverTime + revenue + debtCollection + allowance;

    alert("hoa hồng nhập được là : " + income)
}
icone()