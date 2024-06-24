// Seleciona todos os elementos div dentro de .provas
document.addEventListener('DOMContentLoaded', function() {
  // Seleciona todos os elementos div dentro de .provas
  const divs = document.querySelectorAll('.provas > div');

  // Adiciona um listener de clique a cada elemento div
  divs.forEach(div => {
    div.addEventListener('click', () => {
      div.classList.toggle('clicked');
    });
  });
});


// function expandProva(prova) {
//   // O parâmetro prova irá receber a localidade da prova que será expandida
//   // Exemplo: expandProva(document.getElementByClass("prova0"))
  
// }