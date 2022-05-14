var num1 = document.getElementById('nun1');
var num2 = document.getElementById('nun2');
var btn = document.getElementById('calular');
var res = document.getElementById('result');
function calular(n1, n2) {
    return n1 + n2;
}
btn.addEventListener('click', function () {
    res.innerHTML = calular(+num1.value, +num2.value).toString();
});
