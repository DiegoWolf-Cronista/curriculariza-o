let nomeAluno = "";
let perguntaAtual = 0;
let acertos = 0;
let somAcerto = new Audio("audios/acerto.mp3");

const perguntas = [
    {
        pergunta: "Quem foi o fundador de Brusque?",
        respostas: [
            { texto: "Pocoyo",imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSQwX7oa9w_Ymtpf-_BwOkn1I9y9FRD9AuzQ&s", correta: false },
            { texto: "Maximilian von Schneeburg", imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtsNJV7N60HIlkxQhvaJxaEWLvY-auPvOyfQ&s", correta: true }
        ]
    },
    {
        pergunta: "Brusque é conhecida por produzir o quê?",
        respostas: [
            { texto: "Sapatos", correta: false },
            { texto: "Roupas e tecidos", correta: true }
        ]
    },
    {
        pergunta: "Qual personagem faz parte da Fenarreco?",
        respostas: [
            { texto: "Pelznickel", correta: false },
            { texto: "Marrequinho", correta: true }
        ]
    },
    {
        pergunta: "Em qual estado fica Brusque?",
        respostas: [
            { texto: "Santa Catarina", correta: true },
            { texto: "Paraná", correta: false }
        ]
    },
    {
        pergunta: "Quem nasce em Brusque é chamado de:",
        respostas: [
            { texto: "Batistense", correta: false },
            { texto: "Trentino", correta: false },
            { texto: "Alemão", correta: false },
            { texto: "Brusquense", correta: true }
        ]
    },
    {
        pergunta: "Qual é o time de futebol de Brusque?",
        respostas: [
            { texto: "Flamengo", correta: false },
            { texto: "Brusque Futebol Clube", correta: true }
        ]
    },
    {
        pergunta: "Qual instituição fica em Brusque?",
        respostas: [
            { texto: "UNIFEBE", correta: true },
            { texto: "UFSC", correta: false }
        ]
    },
    {
        pergunta: "Qual dessas bandeiras é de Brusque?",
        respostas: [
            { texto: "Bandeira de Brusque", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmolYqTiAQadbz60HVv1-07pV-MVTnjpLtqg&s", correta: true },
            { texto: "Bandeira do Japão", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2f3SGAZlmRjtFv14Ei3ta57Mh-HBkSRxyCA&s", correta: false }
        ]
    },
    {
        pergunta: "Qual é uma comida típica de Brusque?",
        respostas: [
            { texto: "Sushi", correta: false },
            { texto: "Cuca", correta: true },
            { texto: "Hot-dog", correta: false }
        ]
    },
    {
        pergunta: "Essa é a entrada do Parque Zoobotânico de Brusque?",
        respostas: [
            { texto: "Verdadeiro", correta: true },
            { texto: "Falso", correta: false }
        ]
    },
    {
        pergunta: "Esse estilo de construção pertence a Brusque?",
        respostas: [
            { texto: "Verdadeiro", correta: true },
            { texto: "Falso", correta: false }
        ]
    },
    {
        pergunta: "Essas construções são comuns em Brusque?",
        respostas: [
            { texto: "São facilmente encontradas", correta: false },
            { texto: "Não são", correta: true }
        ]
    },
    {
        pergunta: "Qual lugar tem muitos animais para visitar?",
        respostas: [
            { texto: "Zoo Botânico", correta: true },
            { texto: "Shopping", correta: false }
        ]
    },
    {
        pergunta: "Onde ficam muitas estátuas em Brusque?",
        respostas: [
            { texto: "Havan", correta: false },
            { texto: "Parque das Esculturas", correta: true }
        ]
    },
    {
        pergunta: "Qual imagem mostra o telescópio do parque?",
        respostas: [
            { texto: "Imagem A", correta: true },
            { texto: "Imagem B", correta: false }
        ]
    }
];

// TROCAR TELAS
function trocarTela(id) {
    document.querySelectorAll(".tela").forEach(t => t.classList.remove("ativa"));
    document.getElementById(id).classList.add("ativa");
}

// INICIAR
function iniciarJogo() {
    trocarTela("login");
}

// COMEÇAR QUIZ
function comecar() {
    nomeAluno = document.getElementById("nome").value;

    if (nomeAluno === "") {
        alert("Digite seu nome!");
        return;
    }

    perguntaAtual = 0;
    acertos = 0; 

    mostrarPergunta();
    trocarTela("quiz");
}

// MOSTRAR PERGUNTA
function mostrarPergunta() {
    let p = perguntas[perguntaAtual];
    document.getElementById("pergunta").innerText = p.pergunta;

    let respostasDiv = document.getElementById("respostas");
    respostasDiv.innerHTML = "";

    // REMOVE classes antigas
    respostasDiv.classList.remove("duas", "quatro");

    // ADICIONA classe baseada na quantidade
    if (p.respostas.length === 2) {
        respostasDiv.classList.add("duas");
    } else if (p.respostas.length === 4) {
        respostasDiv.classList.add("quatro");
    }

    p.respostas.forEach((resposta) => {
        let btn = document.createElement("div");
        btn.className = "resposta";

        btn.innerHTML = `
            <img src="${resposta.imagem}" class="img-resposta">
            <p>${resposta.texto}</p>
        `;

        btn.onclick = () => verificarResposta(resposta.correta);

        respostasDiv.appendChild(btn);
    });
}

// VERIFICAR RESPOSTA
function verificarResposta(acertou) {

    if (acertou) {
        acertos++;

        somAcerto.currentTime = 0; // reinicia som
        somAcerto.play();

        document.getElementById("mensagem").innerText =
            nomeAluno + ", Boa!, Você acertou!!! ";

    } else {
        document.getElementById("mensagem").innerText =
            nomeAluno + ", Quase!, continue tentando!!";
    }

    trocarTela("feedback");
}

// PRÓXIMA
function proximaPergunta() {
    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
        trocarTela("quiz");
    } else {
        mostrarResultadoFinal();
    }
}

function mostrarResultadoFinal() {
    document.getElementById("resultadoFinal").innerText =
        nomeAluno + ", você acertou " + acertos + " de " + perguntas.length + " perguntas, Parabéns!!!";

    trocarTela("final");
}

function reiniciar() {
    trocarTela("inicio");
}