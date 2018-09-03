var a,b,c,x1,x2, delta;
a = prompt("nhập a");
b = prompt("nhập b");
c = prompt("nhập c");
delta = (b*b) - (4*a*c);
if (a == 0 ) {
    alert("phương trình vô nghiệm vui long nhập biến khác" );
} else if (delta <0){
    alert("phương trình vô nghiệm ");
} else if (delta ==0){
    x1 = -b/(2*a);
    alert("nghiệm là " + x);
}else {
    x1 = (-b + Math.sqrt(delta))/(2*a);
    x2 = (-b - Math.sqrt(delta))/(2*a);
    alert("nghiệm là" + x1 + x2);
}