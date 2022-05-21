/**
 * =-=-=-=-=-=-=-=-=-=-=-=-=
 * = comando de compilação =
 * =-=-=-=-=-=-=-=-=-=-=-=-=
 *
 * $-> tsc src/script.ts --outDir public/assets/js
 *
 * * =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * = whatchMode, compila automatico a cada save  =
 * =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 *
 *  $-> tsc src/script.ts --outDir public/assets/js -w
 *
*/
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
function fistUperCase(name) {
    var fiest = name.charAt(0).toUpperCase();
    return fiest + name.substring(1);
}
fistUperCase('jr');
function resumo(user) {
    if (user.idade !== undefined) {
        return "Ol\u00E1 ".concat(user.nome, ", tudo bem? Voc\u00EA tem ").concat(user.idade, " anos");
    }
    else {
        return "Ol\u00E1 ".concat(user.nome, ", tudo bem?");
    }
}
var u = {
    nome: 'Jr',
    idade: 41
};
resumo(u);
//Union Types (múltiplos types)
var age = 42;
age = document.getElementById('idade').innerHTML;
var nome = '41';
function resumo2(usuario) {
    return "Ol\u00E1 ".concat(usuario.nome, ", voc\u00EA tem ").concat(usuario.idade, " status").concat(usuario.status);
}
resumo2({
    nome: 'Jr',
    idade: 41,
    status: true
});
//Type Assertions
var idadeField = document.getElementById('id');
console.log(idadeField.value);
function config(props) {
}
config({ width: 100, height: 100 });
config('auto');
//inferencia literal
function fazerRequisicao(url, method) { }
var req = {
    url: 'https://www.google.com.br',
    method: 'GET'
};
fazerRequisicao(req.url, req.method);
var somar = function (n1, n2) {
    return n1 + n2;
};
var subitrair = function (n1, n2) {
    return n1 - n2;
};
var multiplicar = function (n1, n2) {
    return n1 * n2;
};
var divir = function (n1, n2) {
    return n1 / n2;
};
