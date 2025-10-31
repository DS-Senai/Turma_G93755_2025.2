// TIPOS DE VARIAVIES

// var nome = "Marcos";
// var nome = "Maria";
// console.log(nome)

// let fruta = "Uva";
// fruta = "Maça";
// console.log(fruta);

// const carro = "Jeep";

// OPERADORES

// Atribuição e Incremento
// let x = 20;
// console.log(x);
// x += 10;
// console.log(x);

// let i = 1;
// console.log("Cont: " + i);
// console.log(++i);
// console.log(--i);

// Operador Relacionais 
// let a = 3;
// let b = 3;

// console.log(a == b); // Igual
// console.log(a != b); // Diferente
// console.log(a !== b);
// console.log(a >= b);

// CONDICIONAIS

// let x = 10;
// let y = 10;

// if(x > y) {
//     console.log("X é maior")
// }else{
//     console.log("X é menor");
// }

// if(x > y) {
//     console.log("X é maior")
// }else if(x < y){
//     console.log("X é menor");
// }else{
//     console.log("X e Y é igual")
// }

// let cor = "verelho";

// switch(cor) {
//     case "verde":
//         console.log("A cor é verde")
//         break;

//     case "vermelho":
//         console.log("A cor é vermelha");
//         break;
    
//         default:
//         console.log("Não Definido")
// }

// Operador Ternário

// let idade = 18;
// let statusIdade = (idade >=18) ? "Adulto" : "Menor";
// console.log(statusIdade);

// LOOP

// for

// let cont = 0;

// for(let i = 0;i <= 10;i++) {
//     console.log(i)
// }

// while(cont <= 5) {
//     console.log(cont)
//     cont++;
// }

// let numeroDo = 15;

// do {
//     console.log(numeroDo);
//     numeroDo--;
// }while (numeroDo >= 13)

// FUNÇÕES
// function ola() {
//     console.log("ola")
// }
// ola();

// function soma(a,b) {
//     return a + b;
// }
// let x = 20;
// let y = 30;
// console.log("Res: " + soma(x,y))




/**
 * EXERCÍCIO (Parte1):
 * 
 * 1 - Imprimir números de 1 até 10 usando um loop while, for e do-while
 * 2 - Verificar se um número é par ou ímpar
 * 3 - Somar números positivos até que seja digitado um número negativo
 * 4 - Converter real para dollar
 * 5 - Criar um programa em JavaScript que utilize operador switch para determinar exibir o dia da semana
 * 6 - Crie um programa que leia o mês do ano exiba o número correspondente ao mês:
 * 7 - Calcula o salário baseado no número de horas trabalhadas: 
 *    - Se as horas trabalhadas forem 40 ou menos, o salário é calculado multiplicando-se por 10 dólares por hora.
      - Se as horas trabalhadas forem entre 41 e 60, o salário começa com 400 dólares mais 15 dólares por hora extra.
      - Para mais de 60 horas, o salário começa com 400 dólares mais 20 dólares por hora extra até 60 horas, então aumenta pr 25 dólares por hora extra após 60 horas    
 */


let x = 0;
// while(x < 10) {
//      console.log(++x)
// }

// for(let y = 0;y < 10;y++) {
//      console.log(y +1);
// }

// let z = 0;
// do {
//      console.log(++z)

// }while(z < 10);

// let num = 8;
// if(num % 2 == 0) {
//      console.log("Num é par")
// }else{
//      console.log("Num ímpar");
// }

// 

// let dia = 3;
// let dias = ['','Seg','Ter','Qua','Qui','Sex'];
// console.log(dias[dia])

// let mes = "Janeiro";

// switch(mes) {
//      case "Janeiro":
//           console.log(1);
//           break

// }



let horas = 30;
let salario;

if(horas <= 40) {
     salario = horas * 10;
}else if(horas > 40 && horas <= 60) {
     salario = 400 + ((horas - 40)* 15)
}else {
     salario = 400 + (20 * 20) + ((horas - 60)*25);
}

console.log("Salario é $"+salario.toFixed(2))