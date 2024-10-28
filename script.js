const perguntas = [
    { pergunta: "Em que ano começou a Revolução Francesa?", resposta: ["1789"] },
    { pergunta: "Qual é o continente mais populoso?", resposta: ["Ásia"] },
    { pergunta: "Quem foi o autor de 'Dom Casmurro'?", resposta: ["Machado de Assis"] },
    { pergunta: "Qual é a capital do Brasil?", resposta: ["Brasília"] },
    { pergunta: "Em que ano foi proclamada a independência do Brasil?", resposta: ["1822"] },
    { pergunta: "Qual é o maior animal terrestre?", resposta: ["elefante"] },
    { pergunta: "Quem descobriu o Brasil?", resposta: ["Pedro Álvares Cabral"] },
    { pergunta: "Qual é a língua mais falada no mundo?", resposta: ["mandarim"] },
    { pergunta: "Qual planeta é conhecido como o 'Planeta Vermelho'?", resposta: ["Marte"] },
    { pergunta: "Quem foi o primeiro presidente dos Estados Unidos?", resposta: ["George Washington"] },
    { pergunta: "Qual é o nome do famoso muro que dividiu Berlim?", resposta: ["Muro de Berlim"] },
    { pergunta: "Em que ano ocorreu a queda do Muro de Berlim?", resposta: ["1989"] },
    { pergunta: "Qual é o maior oceano do mundo?", resposta: ["oceano Pacífico"] },
    { pergunta: "Quem pintou a Mona Lisa?", resposta: ["Leonardo da Vinci"] },
    { pergunta: "Qual é o nome do livro que narra as aventuras de um menino chamado Harry?", resposta: ["Harry Potter"] },
    { pergunta: "Em que continente fica o Egito?", resposta: ["África"] },
    { pergunta: "Qual é a principal religião do Japão?", resposta: ["xintoísmo"] },
    { pergunta: "Qual é o nome do famoso monumento em Paris que é uma torre?", resposta: ["Torre Eiffel"] },
    { pergunta: "Qual é o principal gás responsável pelo efeito estufa?", resposta: ["dióxido de carbono"] },
    { pergunta: "Quem foi a primeira mulher a ganhar um Prêmio Nobel?", resposta: ["Marie Curie"] },
    { pergunta: "Qual é o animal símbolo da Austrália?", resposta: ["coala"] }
];

let perguntaAtual = 0;

function mostrarPergunta() {
    document.getElementById("mensagem").innerText = "";
    if (perguntaAtual < perguntas.length) {
        document.getElementById("pergunta").innerText = perguntas[perguntaAtual].pergunta;
        document.getElementById("contadorPergunta").innerText = `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;
    } else {
        document.getElementById("pergunta").innerText = "Parabéns! Você completou o Gênio Quiz!";
        document.getElementById("resposta").style.display = "none";
        document.querySelector("button").style.display = "none";
        document.getElementById("mensagem").innerText = "Você completou todas as perguntas!";
        document.getElementById("contadorPergunta").innerText = "";
    }
    document.getElementById("resposta").value = ""; // Limpa o campo de resposta
}

function verificarResposta() {
    const respostaUsuario = document.getElementById("resposta").value.trim().toLowerCase();
    const respostasValidas = perguntas[perguntaAtual].resposta.map(res => res.toLowerCase());

    if (respostasValidas.includes(respostaUsuario)) {
        document.getElementById("mensagem").innerText = "Resposta correta! 🎉";
        document.getElementById("mensagem").style.color = "green";
        perguntaAtual++;
        mostrarPergunta();
    } else {
        document.getElementById("mensagem").innerText = "Resposta incorreta! ❌ O jogo será reiniciado.";
        document.getElementById("mensagem").style.color = "red";
        perguntaAtual = 0; // Reinicia o jogo ao errar
        setTimeout(mostrarPergunta, 2000); // Aguarda 2 segundos antes de mostrar a primeira pergunta novamente
    }
}

// Iniciar o jogo
mostrarPergunta();
