var a = prompt("nhập cạnh a");
var b = prompt("nhập cạnh b");
var c = prompt("nhập cạnh c");

if (a > 0 && b > 0 && c > 0 && (a + b ) > c && (b + c) > a && (a + c) > b){
    alert("ba cạnh a,b,c là 3 cạnh của tam gác")
}else {
    alert("3 ạnh trên không phải là 3 cạnh của tam giác")
}