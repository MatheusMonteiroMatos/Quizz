const perguntas = [
    { pergunta: "Qual a data da call em que a gente dormiu junto?", resposta: ["09/10", "09 de outubro"] },
    { pergunta: "Qual é o meu louvor favorito?", resposta: ["Santo Espírito"] },
    { pergunta: "Qual time eu torço de Futebol?", resposta: ["Flamengo"] },
    { pergunta: "Qual time eu torço de Basquete?", resposta: ["Rockets", "Houston Rockets"] },
    { pergunta: "Quanto é 7+8?", resposta: ["15", "quinze"] },
    { pergunta: "Qual meu personagem favorito de naruto?", resposta: ["Kakashi Hatake", "Kakashi"] },
    { pergunta: "Quem descobriu o Brasil?", resposta: ["Pedro Álvares Cabral"] },
    { pergunta: "Qual meu meu main no lol?", resposta: ["Ekko", "ekko"] },
    { pergunta: "Qual minha música favorita do NewJeans?", resposta: ["Hurt"] },
    { pergunta: "Qual é melhor, frio e calor?", resposta: ["Frio"] },
    { pergunta: "Qual a capital do Canadá?", resposta: ["Ottawa"] },
    { pergunta: "Qual meu Super-Herói favorito (ficção)?", resposta: ["Miranha", "Homem Aranha"] },
    { pergunta: "Vem sempre aqui?", resposta: ["Sim", "Não", "As vezes"] },
    { pergunta: "O meu recado do zap faz referência a qual versículo da bíblia?", resposta: ["Pv 2:11", "Provérbios 2:11"] },
    { pergunta: "Qual o nome do protagonista do anime Dragon Ball?", resposta: ["Goku", "Kakaroto"] },
    { pergunta: "Quem é o amor da minha vida?", resposta: ["Eu", "Minha princesa", "Ela", "Ana Clara", "Ana Clara Schimite", "Ana Clara Schimite dos Santos"] },
    { pergunta: "Quem pegou o meu coração pra si?", resposta: ["Eu", "você", "Minha princesa", "Ela", "Ana Clara", "Ana Clara Schimite", "Ana Clara Schimite dos Santos"] },
    { pergunta: "Quem é a princesa mais linda do mundo?", resposta: ["Eu", "você", "Minha princesa", "Ela", "Ana Clara", "Ana Clara Schimite", "Ana Clara Schimite dos Santos"] },
    { pergunta: "Quem é a garota mais incrível do mundo?", resposta: ["Eu", "você", "Minha princesa", "Ela", "Ana Clara", "Ana Clara Schimite", "Ana Clara Schimite dos Santos"] },
    { pergunta: "bjo amor", resposta: ["bjo", "bjo amor", "te amo"] },
    
    ];


let perguntaAtual = 0;

function mostrarPergunta() {
    if (perguntaAtual < perguntas.length) {
        document.getElementById("pergunta").innerText = perguntas[perguntaAtual].pergunta;
        document.getElementById("contadorPergunta").innerText = `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;
    } else {
        document.getElementById("pergunta").innerText = "Parabéns! Você completou o Gênio Quiz!";
        document.getElementById("resposta").style.display = "none";
        document.querySelector("button").style.display = "none";
        document.getElementById("mensagem").innerText = "Quer namorar comigo? ❤";
        document.getElementById("contadorPergunta").innerText = "";
    }
   // document.getElementById("mensagem").innerText = "";
    document.getElementById("resposta").value = "";
}

function verificarResposta() {
    const respostaUsuario = document.getElementById("resposta").value.trim().toLowerCase();
    const respostasValidas = perguntas[perguntaAtual].resposta.map(res => res.toLowerCase());

    if (respostasValidas.includes(respostaUsuario)) {
        perguntaAtual++;
        mostrarPergunta();
    } else {
        document.getElementById("mensagem").innerText = "Resposta incorreta! O jogo será reiniciado.";
        setTimeout(reiniciarJogo, 2000); // Aguarda 2 segundos antes de reiniciar o jogo
    }
}


function reiniciarJogo() {
    perguntaAtual = 0;
    mostrarPergunta();
}

// Iniciar o jogo
mostrarPergunta();
