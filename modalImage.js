// Função para abrir o modal e exibir a imagem ampliada
function openModal(imageUrl) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('expandedImage');

  modal.style.display = 'block';
  modalImg.src = imageUrl;

  // Rola a página para o topo do modal
  modal.scrollIntoView();
}

// Função para fechar o modal ao clicar no botão "x" ou fora da imagem expandida
function closeModal() {
  const modal = document.getElementById('imageModal');
  modal.style.display = 'none';
}

// Adicionando evento de clique no botão de fechamento
const closeButton = document.getElementById('product-modal-close');
closeButton.addEventListener('click', closeModal);

// Adicionando eventos de clique nas imagens
const productImages = document.querySelectorAll('.product-list .product-image img');
productImages.forEach(image => {
  image.addEventListener('click', function(event) {
    const imageUrl = this.getAttribute('src');
    openModal(imageUrl);

    event.preventDefault();
  });

});

// Função para fechar o modal se o usuário clicar fora da imagem expandida
window.onclick = function(event) {
  const modal = document.getElementById('imageModal');
  if (event.target === modal) {
    closeModal();
  }
};
