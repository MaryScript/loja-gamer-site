// Mensagem ao clicar no botão "Comprar"
document.addEventListener("DOMContentLoaded", function () {
  const botoesComprar = document.querySelectorAll(".btn-primary");

  botoesComprar.forEach((botao) => {
    botao.addEventListener("click", function (event) {
      event.preventDefault(); // Evita que a página recarregue
      alert("Produto adicionado ao carrinho!");
    });
  });
});
