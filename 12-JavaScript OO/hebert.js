// === CONSTANTE ESCOLA ===
const ESCOLA = "SENAI";

// === CLASSE CURSO ===
class Curso {
    constructor(nome, codigo) {
        this.nome = nome;
        this.codigo = codigo; // Pode ser usado para validação ou identificação
    }

    apresentar() {
        return `${this.codigo} - ${this.nome}`;
    }
}

// === CLASSE ALUNO ===
class Aluno {
    constructor(nome, idade, curso) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso; // Objeto Curso
        this.status = idade >= 18 ? "Adulto" : "Menor";
    }

    apresentar() {
        return `Aluno: ${this.nome}, Idade: ${this.idade}, Status: ${this.status}, Escola: ${ESCOLA}, Curso: ${this.curso.nome}`;
    }
}

// === CLASSE SISTEMA DE ALUNOS ===
class SistemaAlunos {
    constructor() {
        this.alunos = [];
        this.cursos = [
            new Curso("Desenvolvimento de Sistemas", "DS"),
            new Curso("Mecânica", "MEC"),
            new Curso("Eletrotécnica", "ELE"),
            new Curso("Administração", "ADM")
        ];
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async adicionarAluno() {
        let nome = prompt("Digite o nome do aluno:");

        // Validação da idade
        let idade;
        do {
            idade = prompt("Digite a idade (somente números):");
            idade = Number(idade);
            if (!Number.isInteger(idade) || idade <= 0) {
                console.log("❌ Digite uma idade válida!");
                await this.delay(50);
            }
        } while (!Number.isInteger(idade) || idade <= 0);

        // Escolha do curso
        let cursosStr = this.cursos.map((c, i) => `${i + 1}. ${c.apresentar()}`).join("\n");
        let cursoIndex = Number(prompt(`Escolha o curso digitando o número:\n${cursosStr}`)) - 1;

        if (cursoIndex < 0 || cursoIndex >= this.cursos.length) {
            console.log("❌ Curso inválido! Aluno não adicionado.");
            await this.delay(50);
            return;
        }

        let aluno = new Aluno(nome, idade, this.cursos[cursoIndex]);
        this.alunos.push(aluno);

        console.log(`✅ Aluno ${aluno.nome} adicionado com sucesso!`);
        await this.delay(50);
    }


    listarAlunos() {
        if (this.alunos.length === 0) {
            console.log("⚠️ Nenhum aluno cadastrado.");
            return;
        }
        console.log("=== LISTA DE ALUNOS ===");
        this.alunos.forEach((aluno, i) => console.log(`${i + 1}. ${aluno.apresentar()}`));
    }

    mediaIdades() {
        if (this.alunos.length === 0) {
            console.log("⚠️ Nenhum aluno cadastrado para calcular média.");
            return;
        }
        let soma = this.alunos.reduce((acc, aluno) => acc + aluno.idade, 0);
        let res = soma / this.alunos.length;
        console.log("📊 Média de idades:", res.toFixed(2));
    }

    procurarAluno(nome) {
        for (let aluno of this.alunos) {
            if (aluno.nome.toLowerCase() === nome.toLowerCase()) {
                console.log(`🔎 Encontrado: ${aluno.apresentar()}`);
                return aluno;
            }
        }
        console.log("⚠️ Aluno não encontrado!");
        return null;
    }

    async menu() {
        let opcao = "";

        while (opcao !== "0") {
            opcao = prompt(
                `=== MENU DE ALUNOS ===
1. Adicionar aluno
2. Listar alunos
3. Média de idades
4. Procurar aluno
0. Sair
Digite o número da opção:`
            );

            switch (opcao) {
                case "1":
                    await this.adicionarAluno();
                    break;
                case "2":
                    this.listarAlunos();
                    await this.delay(50);
                    break;
                case "3":
                    this.mediaIdades();
                    await this.delay(50);
                    break;
                case "4":
                    let nomeBusca = prompt("Digite o nome do aluno para procurar:");
                    this.procurarAluno(nomeBusca);
                    await this.delay(50);
                    break;
                case "0":
                    console.log("👋 Saindo do sistema...");
                    await this.delay(50);
                    break;
                default:
                    console.log("❌ Opção inválida!");
                    await this.delay(50);
            }
        }
    }
}

// === EXECUTAR SISTEMA ===
const sistema = new SistemaAlunos();
sistema.menu();