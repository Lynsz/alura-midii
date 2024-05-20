function tocaSom(seletorAudio) { // Função para reproduzir som
    // Verifica se o seletorAudio é válido e se o elemento é um elemento de áudio
    const elemento = document.querySelector(seletorAudio);
    if (elemento && elemento.localName === 'audio') {
      // Se o elemento for válido e for um elemento de áudio, reproduz o som
      elemento.play();
    } else {
      // Se o elemento não for válido ou não for um elemento de áudio, exibe uma mensagem de erro no console
      console.log('Elemento não encontrado ou seletor inválido');
    }
  }
  
  // Obtém uma lista de todos os elementos com a classe 'tecla'
  const listaDeTeclas = document.querySelectorAll('.tecla');
  
  // Loop para cada tecla na listaDeTeclas
  for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador]; // Armazena o elemento da tecla atual
    const instrumento = tecla.classList[1]; // Obtém o nome do instrumento da classe da tecla (segunda classe)
    const idAudio = `#som_${instrumento}`; // Cria o ID do elemento de áudio usando template string
  
    // Configura um manipulador de evento 'onclick' para a tecla
    tecla.onclick = function() {
      tocaSom(idAudio); // Chama a função tocaSom com o ID do elemento de áudio do instrumento atual
    };
  
    // Configura um manipulador de evento 'onkeydown' para a tecla
    tecla.onkeydown = function(evento) {
      // Verifica se a tecla pressionada é 'Space' ou 'Enter'
      if (evento.code === 'Space' || evento.code === 'Enter') {
        // Adiciona a classe 'ativa' à tecla quando pressionada
        tecla.classList.add('ativa');
      }
    };
  
    // Configura um manipulador de evento 'onkeyup' para a tecla
    tecla.onkeyup = function() {
      // Remove a classe 'ativa' da tecla quando solta
      tecla.classList.remove('ativa');
    };
  }
  