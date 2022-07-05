//Seleciona as divs onde estão os campos de preenchimento e botões de envio
const inputs = document.querySelectorAll('[data-perguntas]');

//Seleciona os campos de preenchimento
const listaDeInputs = document.querySelectorAll('input[type=text]');

//Seleciona os botões de OK
const oks = document.querySelectorAll('[data-ok]');

//Seleciona o botão de Finalizar
const botaoEnviar = document.querySelector('input[value=Finalizar]');

// Função para mostrar as divs ocultas e adicionar o nome do usuário às perguntas
function mostrarInput(aux) {
  // Seleciona a div cujo data attribute 'perguntas' tem valor igual à aux
  const algumInput = document.querySelector(`[data-perguntas="${aux}"]`);

  //Seleciona o a tag label com data attribute 'poeNome' cujo valor é igual à aux
  const lacunaNome = document.querySelector(`[data-poeNome=${aux}]`);

  // seleciona o texto no campo de entrada referente a tag label obtida na linha acima
  const legendAntigo = lacunaNome.innerHTML;
  algumInput.classList.remove('hide');
  algumInput.classList.add('questao');

  // adiciona ao texto o nome do usuário
  lacunaNome.innerHTML = legendAntigo + listaDeInputs[0].value + "?";
}

//Para cada botão de OK clicado, chama a função mostrarInput()
oks.forEach(ok => ok.addEventListener('click', () => {
  const aux = ok.dataset.ok

  mostrarInput(aux);
}))

// Seleciona o espaço onde será inserida a primeira mensagem
const divMsgNomeIdadeLing = document.querySelector(".mensagem-NomeIdadeLinguagem");

// Insere a primeira mensagem e retira a classe hide do fieldset com classe gostaDaLinguagem após ativar o botão Enviar
botaoEnviar.onclick = function() {
  divMsgNomeIdadeLing.innerHTML = `Olá, ${listaDeInputs[0].value}, você tem ${listaDeInputs[1].value} anos e já está aprendendo ${listaDeInputs[2].value}!`;
}