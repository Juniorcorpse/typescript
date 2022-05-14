let num1 = document.getElementById('nun1') as HTMLInputElement; 
let num2 = document.getElementById('nun2') as HTMLInputElement;

let btn = document.getElementById('calular');
let res = document.getElementById('result');

function calular(n1: number, n2: number)
{
    return n1+n2;
}

btn.addEventListener('click', function(){
    res.innerHTML = calular(+num1.value, +num2.value).toString();
});

function fistUperCase(name: string): string{
    let fiest = name.charAt(0).toUpperCase();
    return fiest+name.substring(1);
}

fistUperCase('jr');

function resumo(user: {nome: string, idade?:number}){
    if (user.idade !== undefined) {
        return `Olá ${user.nome}, tudo bem? Você tem ${user.idade} anos`;
    }else{
        return `Olá ${user.nome}, tudo bem?`;
    }
    
}

let u = {
    nome: 'Jr',
    idade: 41
}
resumo(u);

//Union Types (múltiplos types)
let age: string | number = 42

age = document.getElementById('idade').innerHTML;

//Type e Interface: Como usar e diferenças
type Idade = string | number ;
let nome: Idade = '41';

// type User = {
//     nome: string,
//     idade: number
// }

interface User {
    nome: string;
    idade: number;
}

interface User {
    status: boolean;
}

function resumo2(usuario: User){
    return `Olá ${usuario.nome}, você tem ${usuario.idade} status${usuario.status}`;
}
resumo2({
    nome: 'Jr',
    idade:41,
    status:true
})

//Type Assertions
let idadeField = document.getElementById('id') as HTMLInputElement;

console.log(idadeField.value);
