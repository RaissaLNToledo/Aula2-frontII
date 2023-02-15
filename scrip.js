// Sala 08

//Escolha usuário
//let escolhaUsuario = prompt("Pedra, papel ou Tesoura. 1-Pedra, 2-Papel, 3-Tesoura");

//Função para Jogada da Máquina
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function analiseDaJogada(a, b) {
    // Pedra ganha de Tesoura.
    // Tesoura ganha de Papel.
    // Papel ganha de Pedra.
    let ganhadorRodada = 0
    
    //a escolhe pedra
    if (a == 1) {
        if (b == 1) {
            alert("Rodada empatada, ninguém ganha ponto")
        }
        else if (b == 2){
            ganhadorRodada = b;
        }
        else if (b==3) {
            ganhadorRodada = a
        }
    }
    
    //a escolhe Papel
    else if (a == 2) {
        if (b == 1) {
            ganhadorRodada = a
        }
        else if (b == 2){
            alert("Rodada empatada, ninguém ganha ponto")
        }
        else if (b==3) {
            ganhadorRodada = b;
        }
    }

    //a escolhe Tesoura
    else if (a == 3) {
        if (b == 1) {
            ganhadorRodada = b;
        }
        else if (b == 2){
            ganhadorRodada = a
        }
        else if (b==3) {
            alert("Rodada empatada, ninguém ganha ponto");
        }
    }
    else {
        alert("Valor incorreto. Jogo encerrado");
        ganhador = true;
    }
    return ganhadorRodada
}

function traducao(a) {
    let nome = ''
    if (a == 1) {
        nome = 'Pedra'
    }
    else if (a==2) {
        nome = 'Papel'
    }
    else if (a ==3) {
        nome = 'Tesoura'
    }
    return nome
}

//Parametros de parada
let ganhador = false;
let pontosUsuario = 0;
let pontosComputador = 0;

//Looping
while (ganhador == false){
    //Escolhendo
    let escolhaUsuario = parseInt(prompt("Pedra, papel ou Tesoura? \n 1 - Pedra, 2 - Papel, 3 - Tesoura"));
    let escolhaComputador = getRandomIntInclusive(1, 3);
    let traduzido = traducao(escolhaComputador)
    
    //Analisando o resultado
    let resultado = analiseDaJogada(escolhaUsuario, escolhaComputador);
    
    if (resultado == escolhaUsuario) {
        pontosUsuario = pontosUsuario + 1;
        alert(`O Computador jogou ${traduzido} \n Você ganhou essa rodada. \n Usuario: ${pontosUsuario} \n Computador: ${pontosComputador}`);
    }
    else if (resultado == escolhaComputador) {
        pontosComputador = pontosComputador + 1;
        alert(`O Computador jogou ${traduzido} \n O computador ganhou essa rodada. \n Usuario: ${pontosUsuario} pontos \n Computador: ${pontosComputador} pontos`);
    }
    
    //Condição de finalização
    if (pontosUsuario == 2) {
        alert("Você venceu o jogo");
        ganhador = true;
    }
    else if (pontosComputador == 2) {
        alert("O computador venceu o jogo");
        ganhador = true;
    }
}

    



