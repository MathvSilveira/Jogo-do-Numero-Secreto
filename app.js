let numeroSorteado = [];
let numeroLimite = 100;
let numeroSecreto = randomNumber();
let contador = 1;

console.log(numeroSecreto);
function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}
function exibirMensagemInicial(){
    exibirTextoTela ('h1', 'Jogo do numero secreto');
    exibirTextoTela ('p', `Escolha um numero entre 1 e ${numeroLimite}`);
}
exibirMensagemInicial();

function randomNumber(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let qtdElementosLista = numeroSorteado.length;
    if(qtdElementosLista == 10){
        numeroSorteado = [];
    }
    if(numeroSorteado.includes(numeroEscolhido)){
        return randomNumber();
    } else{
        numeroSorteado.push(numeroEscolhido);
        console.log(numeroSorteado);
        return numeroEscolhido;
    }
}
function limparCampo(){
    chute = document.querySelector('input')
    chute.value = '';
}
function resetarJogo(){
    exibirMensagemInicial();
    numeroSecreto = randomNumber();
    console.log(numeroSecreto);
    limparCampo();
    contador = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function verificarChute() {
    let chute = document.querySelector ('input').value;

    if(chute == numeroSecreto){
        exibirTextoTela('h1', 'Acertou');
        let palavraTentativa = contador > 1 ? 'tentativas' : 'tentativa'; 
        let mensagemTentativas = `voce descobriu o numero secreto com ${contador} ${palavraTentativa}!`;
        exibirTextoTela('p', mensagemTentativas); 
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if(chute > numeroSecreto){
        exibirTextoTela('p', 'o numero e menor ');
        contador++
        limparCampo();
    }else{
        exibirTextoTela('p', 'o numero e maior ');
        contador++
        limparCampo();
    }
    
    
}