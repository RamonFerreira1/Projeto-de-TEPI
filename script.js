let pontuacao = 0;
let rodada = 1;
let vitoriasJogador = 0;
let vitoriasComputador = 0;
let jogadasRestantes = 3;

function jogar(escolhaUsuario) {
  if (jogadasRestantes === 0) return;

  const opcoes = ['pedra', 'papel', 'tesoura'];
  const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];

  let resultado;

  if (escolhaUsuario === escolhaComputador) {
    resultado = 'Empate!';
  } else if (
    (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
    (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
    (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')
  ) {
    resultado = 'Você ganhou essa rodada!';
    pontuacao++;
    vitoriasJogador++;
  } else {
    resultado = 'Você perdeu essa rodada!';
    pontuacao--;
    vitoriasComputador++;
  }

  const resultadoElement = document.getElementById('resultado');
  resultadoElement.innerText += `\nRodada ${rodada}: ${resultado}`;
  document.getElementById('pontuacao').innerText = `Pontuação: ${pontuacao}`;

  jogadasRestantes--;
  if (jogadasRestantes === 0) {
    mostrarResultadoFinal();
    document.querySelector('.reset-button').style.display = 'block';
  } else {
    rodada++;
    document.getElementById('rodada').innerText = `Rodada ${rodada}`;
  }
}

function mostrarResultadoFinal() {
  const resultadoElement = document.getElementById('resultado');
  if (vitoriasJogador > vitoriasComputador) {
    resultadoElement.innerText += '\n\nVocê venceu a partida!';
  } else if (vitoriasJogador < vitoriasComputador) {
    resultadoElement.innerText += '\n\nVocê perdeu a partida!';
  } else {
    resultadoElement.innerText += '\n\nA partida terminou em empate!';
  }
}

function reiniciarPartida() {
  pontuacao = 0;
  rodada = 1;
  vitoriasJogador = 0;
  vitoriasComputador = 0;
  jogadasRestantes = 3;
  const resultadoElement = document.getElementById('resultado');
  resultadoElement.innerText = '';
  document.getElementById('pontuacao').innerText = 'Pontuação: 0';
  document.getElementById('rodada').innerText = 'Rodada 1';
  document.querySelector('.reset-button').style.display = 'none';
}
