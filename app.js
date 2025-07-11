let listaDeNumerosSortesdos = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function exibirTextoNatela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNatela('h1', 'jogo do numero secreto');
    exibirTextoNatela('p', 'Escoleha um número entre 1 e 10');
}

exibirMensagemInicial();


function verificarChute() {  
    let chute = document.querySelector('input').value;
    

    if (chute == numeroSecreto) {
        exibirTextoNatela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobril o número secreto!Com ${tentativas} ${palavraTentativa}`; 
        exibirTextoNatela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNatela('p', 'O número secreto é menor');
        } else {
            exibirTextoNatela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}
        
function gerarNumeroAleatorio() {
    let numeroEscolido = parseInt(Math.random() * numeroLimite + 1);
    let quatidadeDeElementosNaLista = listaDeNumerosSortesdos.length;

    if (quatidadeDeElementosNaLista == 3) {
        listaDeNumerosSortesdos = [];
    }
    if (listaDeNumerosSortesdos.includes(numeroEscolido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSortesdos.push(numeroEscolido);
        console.log(listaDeNumerosSortesdos);
        return numeroEscolido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}