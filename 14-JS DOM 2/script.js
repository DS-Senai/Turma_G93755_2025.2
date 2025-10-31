// JS DOM

//  APRESENTAÇÃO DA FUNCIONALIDADE DO DOM

/*
    * Iniciar a aula apresnetando o que o dom faz através do console
    * No console do site do Google
    * alert("Estou no Google");
    * document.querySelector("body").style.backgroundColor = 'black';
    * No site da nasa
    * https://www.nasa.gov/
    * document.querySelector('h2.section-heading-md').innerText = "Vem aí nova estação espacial Brasileira";
    * No site da universidade Havard
    * https://www.harvard.edu/
    * document.querySelector('h2.b-hero__title').innerText = "Seja Bem-vindo a Universidade Havard";
    * document.querySelector('p.c-block__underline').innerText = "Neste mês iremos receber os alunos do 3ª módulo do curso Técnico de Desenvolvimento de sistemas da melhor escola técnica do Brasil SENAI.";

    // ============= JAVA SCRIPT DOM ============= //

/*
    * document.querySelector -> Comando
    * click -> Evento
    * onclik="função()" -> Atributo
    * name, placeholder... -> Atributo
    * <html> <body> <h1> -> Elemento html
    * 
    * console.log("Ola, mundo") -> Exibir no terminal do brower
    * document.querySelector('.botao2'); -> Selecionar o elemento que contem a classe .bota2
    * addEventListener('click', fuction(){}) -> Configurar funções a serem chamadas quando um evento específico acontece
    * Listenner -> Adicioanar um Escutador de eventos (Coloque um evento neste botão)
    * document.querySelector -> Comando
    * innerHTML -> Metodo que retorna um conteudo html
    * innerText -> Método que retorna apenas o texto sem formatação html
    * outerHTML -> Conteudo de fora
 */

// JS DOM - 1ª Aula 

// EXECUTAR O CODIGO AO CARREGAR A PAGINA 

// window.onload = function () {  // Espera a página carregar completamente antes de executar o código
//     // Acessa o título <h1> e altera o texto
//     let titulo = document.querySelector('h3');  // Seleciona o primeiro elemento <h1> na página
//     titulo.innerText = "Alterando o título H3!";  // Altera o texto interno do <h1> para "Alterando o título H!"

//     // Acessa o segundo parágrafo e muda a cor do texto
//     let todosParagrafos = document.querySelectorAll('p');
//     let segundoParagrafo = document.querySelectorAll('p')[1];  // Seleciona o segundo parágrafo <p> na página (índice [1])
//     if (segundoParagrafo) {  // Verifica se o segundo parágrafo existe para evitar erro
//         segundoParagrafo.style.color = 'blue';  // Altera a cor do texto do segundo parágrafo para azul
//     }

//     console.log(todosParagrafos);
// };


// 1ª Opção - EXECUTAR CODIGO AO CLICAR NO BOTÃO

// document.getElementById('meuBotao').addEventListener('click', function () { // Adiciona um ouvinte de evento 'click' ao botão com o ID 'meuBotao'
//     let titulo = document.querySelector('h1');
//     titulo.innerText = "Alterando o título com Botão";

//     let segundoParagrafo = document.querySelectorAll('p')[1];
//     if (segundoParagrafo) {
//         segundoParagrafo.style.color = 'red';
//     }
// });


// 2ª Opção - EXECUTAR CODIGO AO CLICAR NO BOTÃO com o atributo Onclick

// let noClique = () => {

//     let titulo = document.querySelector('h1');
//     titulo.innerText = "Alterando o título com Botão";

//     let fundo = document.querySelector("body");
//     fundo.style.backgroundColor = "black";
//     fundo.style.color = "white"

//     let segundoParagrafo = document.querySelectorAll('p')[1];
//     if (segundoParagrafo) {
//         segundoParagrafo.style.color = 'orange';
//         segundoParagrafo.style.fontSize = '20px';
//     }

//     return;
// }



// JS DOM - 2ª Aula 

// const minhaLista = document.querySelector('#lista');
// const ul = minhaLista.querySelector('ul'); // Retorna o conteúdo do elemento

// // DEBUGAR CONTEUDO NO CONSOLE
// console.log(ul.children); // Retorna os filhos da div lista
// console.log(ul.innerText); // Exibe o conteúdo lista
// console.log(ul.innerHTML); // Exibe o conteúdo e HTML

// // ACESSAR OU MODIFICAR O CONTEÚDO DE UM ELEMENTO HTML
// let inner_Text = () => {
//     ul.innerText += "<li>Inner Text</li>"; // Insere apenas o texto sem html
// }

// // Cria um novo elemento e adicionar o item novo
// let innerHtml = () => {
//     ul.innerHTML += "<li>Item adicionado com <b>innerHtml<b></li>"; // Adicionar um novo item na lista
// }

// // Não cria um novo elemento apenas adicionar o item novo
// let append = () => {
//     let newLi = document.createElement("div");
//     newLi.innerHTML = ("Item Adicionado com <b>AppendChild</b>");
//     ul.appendChild(newLi); // é usada especificamente para adicionar um nó filho a um elemento pai
// }



// let novo = "Miquéias <strong>Sousa</strong>"; // Alteração em um item especifico
// ul.children[0].innerHTML = novo;
// // ul.outerHTML = '<section id="novoDiv"><h1>Novo Conteúdo</h1></section>'; // modificar o conteúdo HTML de um elemento


// // Metódos para criar um nó antes ou depois 
// let AfterBefore = () => {
//     lista.before("<<antes>>");
//     lista.after("<<depois>>");
// }

// const newButton = document.createElement('button');
// newButton.innerHTML = "Botãooooooooooooooo";
// ul.before(newButton);

// // Manipular CSS inline
// ul.children[0].style.color = "red";
// ul.children[3].style.fontWeight = "bold";
// minhaLista.style.fontStyle = "italic";

// // Manipulando Atributos
// function mudarAtributo() {
//     const input = document.querySelector('input');
//     input.setAttribute('type', 'text'); // Alterar o placeholder

//     console.log(input.getAttribute('placeholder')); // Pega o atributo e exibi no console

//     // Verificar se tem o atributo
//     if (input.hasAttribute('placeholder')) { // Retorna um booleano
//         console.log('Tem PlaceHolder');
//     } else {
//         console.log('Não tem PlaceHolder');
//     }
// }

// function mudarFundo() {
//     const mudar = document.querySelector('body')
//     // const lista = document.getElementById('lista')
//     mudar.setAttribute('class', 'fundoEscuro')
// }

// function dark() <input id="dobro" type="number">{
//     let fundo = document.querySelector("body");

//     if (fundo.style.backgroundColor == 'black') {
//         fundo.style.backgroundColor = 'white';
//     } else {
//         fundo.style.backgroundColor = "black";
//     }
// }


// function dobroDoValor() {
//     const numero = document.querySelector("#dobro").value;
//     const res = document.querySelector("h3")
//     res.innerHTML = numero * 2;    
// }

function somar() {
    const input = document.getElementsByClassName("quantidade");
    let soma = 0;
    for(let i = 0;i < 3;i++) {
        soma+= parseFloat(input[i].value) || 0;  
     }

    let result = document.getElementById('result')
    result.innerText = soma;

}

function carregarAuto() {
    const somaValores = document.getElementsByClassName("quantidade");
    for (let i = 0; i < somaValores.length; i++) {
        somaValores[i].onchange = somar; 
    }
}

window.onload = carregarAuto;