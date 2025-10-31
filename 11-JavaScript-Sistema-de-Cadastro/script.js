/**
 * ================================
 * ATIVIDADE
 * ================================
 * 
 * Sistema de Cadastro de Alunos em JavaScript
 * 
 * Criar um sistema em JavaScript que simula o cadastro de alunos de uma escola, 
 * utilizando variáveis, funções, objetos, arrays, condicionais e loops.
 * 
 * O sistema deve permitir:
 * - Cadastrar alunos com as informações DE nome, idade, curso e status se é adulto ou menor
 * - Armazenar os alunos em um array.
 * - Calcular a média de idades dos alunos.
 * - Pesquisar um aluno pelo nome
 * 
 * Criar as seguintes funções:
 * - criarAluno()
 * - adicionarAluno()
 * - listarAlunos()
 * - mediaIdades()
 * 
 */

let alunos = [];   // Array para armazenar objetos-aluno
const cursosDisponiveis = ["Desenvolvimento de Sistemas", "Mecânica", "Eletrotécnica", "Administração"];
const escola = "SENAI"; // Constante

// Função para criar aluno (objeto)
function criarAluno(nome, idade, curso) {
    return {
        nome,
        idade,
        curso,
        status: idade >= 18 ? "Adulto" : "Menor",  // operador ternário
        apresentar: function () {
            return `Aluno: ${this.nome}, Idade: ${this.idade}, Curso: ${this.curso}, Status: ${this.status}, Escola: ${escola}`;
            
        }
    };
}

function adicionarAluno() {
    let nome = prompt("Digite o nome do aluno:");
    let idade = Number(prompt("Digite a idade:"));

    // Mostra os cursos disponíveis
    let cursosStr = cursosDisponiveis.map((c, i) =>  `${i + 1}. ${c}`).join("\n");

    let cursoIndex = Number(prompt(`Escolha o curso digitando o número:\n${cursosStr}`)) - 1;

    // Validação simples
    if (cursoIndex < 0 || cursoIndex >= cursosDisponiveis.length) {
        console.log("❌ Curso inválido! Aluno não adicionado.");
        return;
    }

    let curso = cursosDisponiveis[cursoIndex];
    let aluno = criarAluno(nome, idade, curso);
    alunos.push(aluno);

    console.log(`✅ Aluno ${aluno.nome} adicionado com sucesso!`);
}

function listarAlunos() {
    console.log("=== LISTA DE ALUNOS ===");
    alunos.forEach((aluno, i) => {
        console.log(`${i + 1}. ${aluno.apresentar()}`);
    });
}

function mediaIdades() {
    if (alunos.length === 0) return 0;
    let soma = alunos.reduce((acc, aluno) => acc + aluno.idade, 0);
    let res = soma / alunos.length;
    return console.log("📊 Média de idades:", +res)
}


function procurarAluno(nome) {
    for (let aluno of alunos) {
        if (aluno.nome === nome) {
            console.log(`🔎 Encontrado: ${aluno.apresentar()}`);
            return aluno;
        }
    }
    console.log("Aluno não encontrado!");
    return null;
}


adicionarAluno();
listarAlunos();
mediaIdades();