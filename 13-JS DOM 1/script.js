// // EXECUTAR CODIGO AO CARREGAR A PAGINA
// window.onload = function () {
//     let titulo = document.querySelector("h3");
//     titulo.innerText = "SENAI";

//     let segundoParagrafo = document.querySelectorAll("p")[1];
    
//     if(segundoParagrafo) {
//         segundoParagrafo.style.color = 'blue'
//     }
    
//     let todosParagrafos = document.querySelectorAll("p")[0]
//     // console.log(todosParagrafos);
//     todosParagrafos.style.color = "green"
// }

// EXECUTAR CODIGO AO CLICAR NO BOTÃO COM ID 
// document.getElementById('botao').addEventListener('click', function() {
//     let titulo = document.querySelector("h3");
//     titulo.innerText = "DESENVOLVIMENTO DE SISTEMAS";
// })

// // EXECUTAR CODIGO AO CLICA NO BOTÃO COM ATRIBUTO ONCLIK
// const mudarTexto = () => {
//     let titulo = document.querySelector("h3");
//     titulo.innerText = "JOVEM APRENDIZ";

//     return;
// }


const minhaLista = document.querySelector("#minhaLista")
const ul = minhaLista.querySelector("ul")
// console.log(ul.children) // Retorna array
// console.log(ul.innerText) // Retorna Texto
// console.log(ul.innerHTML) // Retorna Html

let novoItem = () => {
    // ul.innerText += "<li>Harpa</li>"; // Adiciona apenas o texto
    // ul.innerHTML += "<li>Harpa</li>"; // Adiciona o texto com html
    
    let add = document.createElement('li');
    add.innerHTML = ("Harpa")
    ul.appendChild(add);
}

