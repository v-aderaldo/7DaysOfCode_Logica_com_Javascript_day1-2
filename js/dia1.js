let if1;
let if2;
let if3;

// função com o código do dia 1
function day1() {
  let numeroUm = 1;
  let stringUm = '1';
  let numeroTrinta = 30;
  let stringTrinta = '30';
  let numeroDez = 10;
  let stringDez = '10';

  // comparação entre 1 e "1"
  if (numeroUm == stringUm) {
    if1 = 'As variáveis numeroUm e stringUm têm o mesmo valor, mas tipos diferentes.';
  } else {
    if1 = 'As variáveis numeroUm e stringUm não têm o mesmo valor.';
  }
  // comparação entre 30 e "30"
  if (numeroTrinta === stringTrinta) {
    if2 = 'As variáveis numeroTrinta e stringTrinta têm o mesmo valor e mesmo tipo.';
  } else {
    if2 = 'As variáveis numeroTrinta e stringTrinta não têm o mesmo tipo.';
  }
  // comparação entre 10 e "10"
  if (numeroDez == stringDez) {
    if3 = 'As variáveis numeroDez e stringDez têm o mesmo valor, mas tipos diferentes.';
  } else {
    if3 = 'As variáveis numeroDez e stringDez não têm o mesmo valor.';
  }
}

// seleciona o botão Run
const botaoRun = document.querySelector('input[type=submit]');

// seleciona a área onde a saída do botão Run irá aparecer
const porTexto = document.querySelector('.paraAsaida')

botaoRun.onclick = function() {
  day1();
  porTexto.innerHTML = "<strong>output if1 &#62;</strong> " + if1 + "<br>" + "<strong>output if2 &#62;</strong> " + if2 + "<br>" + "<strong>output if3 &#62;</strong> " + if3;
}