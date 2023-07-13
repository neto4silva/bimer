const chk = document.getElementById('chk');
const cardImagem = document.querySelector('.card-imagem');
const originalImageSrc = cardImagem.src;

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  
  if (document.body.classList.contains('dark')) {
    cardImagem.src = "./assets/Bimer-logo.svg"; // Substitua pelo caminho da imagem para modo escuro
  } else {
    cardImagem.src = originalImageSrc; // Restaura o src da imagem original
  }
});

const loginButton = document.getElementById('loginButton');
loginButton.addEventListener('click', () => {
  window.location.href = 'inicial.html';
});
