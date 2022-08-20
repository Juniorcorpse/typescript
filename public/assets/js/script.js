"use strict";
let num1 = document.getElementById('nun1');
let num2 = document.getElementById('nun2');
let btn = document.getElementById('calular');
let res = document.getElementById('result');
function calular(n1, n2) {
    return n1 + n2;
}
btn.addEventListener('click', function () {
    res.innerHTML = calular(+num1.value, +num2.value).toString();
});
function fistUperCase(name) {
    let fiest = name.charAt(0).toUpperCase();
    return fiest + name.substring(1);
}
fistUperCase('jr');
function resumo(user) {
    if (user.idade !== undefined) {
        return `Olá ${user.nome}, tudo bem? Você tem ${user.idade} anos`;
    }
    else {
        return `Olá ${user.nome}, tudo bem?`;
    }
}
let u = {
    nome: 'Jr',
    idade: 41
};
resumo(u);
let age = 42;
age = document.getElementById('idade').innerHTML;
let nome = '41';
function resumo2(usuario) {
    return `Olá ${usuario.nome}, você tem ${usuario.idade} status${usuario.status}`;
}
resumo2({
    nome: 'Jr',
    idade: 41,
    status: true
});
let idadeField = document.getElementById('id');
console.log(idadeField.value);
function config(props) {
}
config({ width: 100, height: 100 });
config('auto');
function fazerRequisicao(url, method) { }
let req = {
    url: 'https://www.google.com.br',
    method: 'GET'
};
fazerRequisicao(req.url, req.method);
const somar = (n1, n2) => {
    return n1 + n2;
};
const subitrair = (n1, n2) => {
    return n1 - n2;
};
const multiplicar = (n1, n2) => {
    return n1 * n2;
};
const divir = (n1, n2) => {
    return n1 / n2;
};
