let listadeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

 function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do numero secreto'); 
    exibirTextoNaTela('p','Escolha um número entre 1 e 10');  
 }

 exibirMensagemInicial();

 function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'o número secreto é menor');
        }  else{
            exibirTextoNaTela('p', 'número secreto e maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listadeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite) {
        listadeNumerosSorteados = [];
    }

    if(listadeNumerosSorteados.includes(numeroEscolido)) {
        return gerarNumeroAleatorio();
    } else {
        listadeNumerosSorteados.push(numeroEscolido);
        console.log(listadeNumerosSorteados);
        return numeroEscolido;
    }
}

 function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
 }

 function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
 }