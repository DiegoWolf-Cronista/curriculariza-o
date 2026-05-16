let nomeAluno = "";
let perguntaAtual = 0;
let acertos = 0;
let somAcerto = new Audio("audios/certa.mp3");
let somErro = new Audio("audios/errada.mp3");
let audioPergunta = new Audio();

const fundosQuiz = [
    "imagens/imgPerguntasFundo.png",
    "imagens/cen2.png",
    "imagens/cen3.png"
];

function aplicarFundoAleatorioQuiz() {
    const aleatorio = Math.floor(Math.random() * fundosQuiz.length);

    document.getElementById("quiz").style.backgroundImage =
        `url('${fundosQuiz[aleatorio]}')`;
}

function pararAudios() {
    audioPergunta.pause();
    audioPergunta.currentTime = 0;

    somAcerto.pause();
    somAcerto.currentTime = 0;

    somErro.pause();
    somErro.currentTime = 0;
}

const perguntas = [
    {
        pergunta: "Quem foi o fundador de Brusque?",

        audio: "audios/per1.mp3",

        respostas: [
            { texto: "Fazendeiro",imagem:"imagens/imgQuestao1LetraA.jpeg", correta: false },
            { texto: "Maximilian von Schneeburg", imagem:"imagens/imgArrumada.png", correta: true }
        ]
    },
    {
        pergunta: "Brusque é conhecida por produzir o quê?",

        audio: "audios/per2.mp3",

        respostas: [
            { texto: "Sapatos",imagem:"imagens/imgquetao2letraA.png", correta: false },
            { texto: "Roupas e tecidos", imagem:"imagens/imgQuestao2LetraB.png", correta: true }
        ]
    },
    {
        pergunta: "Qual personagem faz parte da Fenarreco?",

        audio: "audios/per3.mp3",

        

        respostas: [
            { texto: "Pelznickel", imagem:"imagens/imgQuestao3LetraA.png", correta: false },
            { texto: "Marrequinho", imagem:"imagens/imgQuestao3LetraB.png", correta: true }
        ]
    },
    {
        pergunta: "Em qual estado fica Brusque?",

        audio: "audios/per4.mp3",

        imagemPergunta: "imagens/imgQuestao4.png",

        respostas: [
            { texto: "Santa Catarina", correta: true },
            { texto: "Paraná", correta: false }
        ]
    },
    {
        pergunta: "Quem nasce em Brusque é chamado de:",

        audio: "audios/per5.mp3",

        respostas: [
            { texto: "Batistense", correta: false },
            { texto: "Trentino", correta: false },
            { texto: "Alemão", correta: false },
            { texto: "Brusquense", correta: true }
        ]
    },
    {
        pergunta: "Qual é o time de futebol de Brusque?",

        audio: "audios/per6.mp3",

        respostas: [
            { texto: "Flamengo", imagem:"imagens/imgQuestao6LetraA.png", correta: false },
            { texto: "Brusque Futebol Clube", imagem:"imagens/imgQuestao6LetraB.png", correta: true }
        ]
    },
    {
        pergunta: "Qual instituição fica em Brusque?",

        audio: "audios/per7.mp3",

        respostas: [
            { texto: "UNIFEBE", imagem:"imagens/imgQuestao7LetraA.png", correta: true },
            { texto: "UFSC", imagem:"imagens/imgQuestao7LetraB.png", correta: false }
        ]
    },
    {
        pergunta: "Qual dessas bandeiras é de Brusque?",

        audio: "audios/per8.mp3",

        respostas: [
            { texto: "Bandeira de Brusque", imagem: "imagens/imgQuestao8LetraA.png", correta: true },
            { texto: "Bandeira do Japão", imagem: "imagens/imgQuestao8LetraB.png", correta: false }
        ]
    },
    {
        pergunta: "Qual é uma comida típica de Brusque?",

        audio: "audios/per9.mp3",

        respostas: [
            { texto: "Sushi", imagem:"imagens/imgQuestao9LetraA.png", correta: false },
            { texto: "Cuca", imagem:"imagens/imgQuestao9LetraB.png", correta: true },
            { texto: "Hot-dog", imagem:"imagens/imgQuestao9LetraC.png", correta: false }
        ]
    },
    {
        pergunta: "Essa é a entrada do Parque Zoobotânico de Brusque?",

        imagemPergunta: "imagens/imgQuestao10.png",

        audio: "audios/per10.mp3",

        respostas: [
            { texto: "Verdadeiro", correta: true },
            { texto: "Falso", correta: false }
        ]
    },
    {
        pergunta: "Esse estilo de construção pertence a Brusque?",

        audio: "audios/per11.mp3",

        imagemPergunta: "imagens/imgQuestao11N1.png",

        respostas: [
            { texto: "Verdadeiro", correta: true },
            { texto: "Falso", correta: false }
        ]
    },
    {
        pergunta: "Essas construções são comuns em Brusque?",

        audio: "audios/per12.mp3",

        imagemPergunta:"imagens/imgQuestao12.png",

        respostas: [
            { texto: "São facilmente encontradas", correta: false },
            { texto: "Não são", correta: true }
        ]
    },
    {
        pergunta: "Qual lugar tem muitos animais para visitar?",

        audio: "audios/per13.mp3",

        respostas: [
            { texto: "Zoo Botânico", imagem:"imagens/imgQuestao13LetraA.png", correta: true },
            { texto: "Shopping", imagem:"imagens/imgQuestao13LetraB.png", correta: false }
        ]
    },
    {
        pergunta: "Onde ficam muitas estátuas em Brusque?",

        audio: "audios/per14.mp3",

        respostas: [
            { texto: "Havan", imagem:"imagens/imgQuestao14LetraA.png", correta: false },
            { texto: "Parque das Esculturas", imagem:"imagens/imgQuestao14LetraB.png", correta: true }
        ]
    },
    {
        pergunta: "Qual imagem mostra o telescópio do parque?",

        audio: "audios/per15.mp3",

        respostas: [
            { texto:"A) ",imagem:"imagens/imgQuestao15LetraA.png", correta: true },
            { texto:"B)",imagem:"imagens/img15B.png", correta: false }
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

    const video = document.getElementById("videoIntro");
    const telaVideo = document.getElementById("telaVideo");

    telaVideo.style.display = "flex";

    video.currentTime = 0;

    video.muted = false;
    video.volume = 1;

    video.play();

    video.onended = () => {
        telaVideo.style.display = "none";
    };
}

function pularVideo() {

    const video = document.getElementById("videoIntro");
    const telaVideo = document.getElementById("telaVideo");

    video.pause();
    video.currentTime = 0;

    telaVideo.style.display = "none";
}


// COMEÇAR QUIZ
function comecar() {
    nomeAluno = document.getElementById("nome").value;

    // if (nomeAluno === "") {
    //     alert("Digite seu nome!");
    //     return;
    // }

    perguntaAtual = 0;
    acertos = 0;


    mostrarPergunta();
    trocarTela("quiz");
}


// MOSTRAR PERGUNTA
function mostrarPergunta() {

    aplicarFundoAleatorioQuiz();

    let botaoAudio = document.getElementById("botaoAudio");

    let p = perguntas[perguntaAtual];

    let perguntaTexto = document.getElementById("pergunta");
    let imagemPergunta = document.getElementById("imagemPergunta");

    if (p.audio) {

    audioPergunta.src = p.audio;

    botaoAudio.style.display = "inline-flex";

    botaoAudio.onclick = () => {

        audioPergunta.currentTime = 0;

        pararAudios();
        audioPergunta.play();

        botaoAudio.classList.add("tocando");

        audioPergunta.onended = () => {
            botaoAudio.classList.remove("tocando");
        };
    };

} else {

    botaoAudio.style.display = "none";
}

    perguntaTexto.innerText = p.pergunta;

    if (p.imagemPergunta) {
        imagemPergunta.src = p.imagemPergunta;
        imagemPergunta.style.display = "block";
    } else {
        imagemPergunta.style.display = "none";
    }

    let respostasDiv = document.getElementById("respostas");
    respostasDiv.innerHTML = "";

    respostasDiv.className = "";

    if (p.respostas.length === 2) {
        respostasDiv.classList.add("duas");

    } else if (p.respostas.length === 3) {
        respostasDiv.classList.add("tres");

    } else if (p.respostas.length === 4) {
        respostasDiv.classList.add("quatro");
    }

    p.respostas.forEach((resposta) => {

        let btn = document.createElement("div");
        btn.className = "resposta";

        if (resposta.imagem) {

            btn.innerHTML = `
                <img src="${resposta.imagem}" class="img-resposta">
                <p>${resposta.texto}</p>
            `;

        } else {

            btn.classList.add("sem-imagem");

            btn.innerHTML = `
                <p>${resposta.texto}</p>
            `;
        }

        btn.onclick = () => verificarResposta(resposta.correta);

        respostasDiv.appendChild(btn);
    });
}



// VERIFICAR RESPOSTA
function verificarResposta(acertou) {


    if (acertou) {
        acertos++;

        pararAudios();
        somAcerto.currentTime = 0;
        somAcerto.play();


        document.getElementById("mensagem").innerText =
            nomeAluno + " Boa!, Você acertou!!! ";


    } else {

        pararAudios(); 
        somErro.currentTime = 0 ;
        somErro.play();

        document.getElementById("mensagem").innerText =
            nomeAluno + " Quase!, continue tentando!!";
    }


    trocarTela("feedback");
}


// PRÓXIMA
function proximaPergunta() {
    pararAudios();
    audioPergunta.pause();
    audioPergunta.currentTime = 0;
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
        nomeAluno + " VOCÊ ACERTOU " + acertos + " de " + perguntas.length + " perguntas, Parabéns!!!";


    trocarTela("final");
}


function reiniciar() {
    trocarTela("inicio");
}
