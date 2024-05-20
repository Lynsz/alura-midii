function tocaSom(idElementoAudio) { // Função para reproduzir som
    document.querySelector(idElementoAudio).play(); // Reproduz o som do elemento de áudio com o ID especificado
  }
  
  const listaDeTeclas = document.querySelectorAll('.tecla'); // Obtém uma lista de todos os elementos com a classe 'tecla'
  
  // Loop para cada tecla
  for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador]; // Armazena o elemento da tecla atual
    const instrumento = tecla.classList[1]; // Obtém o nome do instrumento da classe da tecla (segunda classe)
    const idAudio = `#som_${instrumento}`; // Cria o ID do elemento de áudio usando template string
  
    // Configura um manipulador de evento 'onclick' para a tecla
    tecla.onclick = function() {
      tocaSom(idAudio); // Chama a função tocaSom com o ID do elemento de áudio do instrumento atual
    };
  }
  
