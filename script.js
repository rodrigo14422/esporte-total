
// Lógica do Filtro Dinâmico
const botoesFiltro = document.querySelectorAll('.btn-filtro');
const cards = document.querySelectorAll('.card');

botoesFiltro.forEach(botao => {
  botao.addEventListener('click', () => {
    // Remove classe ativa de todos e adiciona no clicado
    botoesFiltro.forEach(b => b.classList.remove('active'));
    botao.classList.add('active');

    const categoria = botao.getAttribute('data-categoria');

    // Mostra ou esconde os cards com base na categoria
    cards.forEach(card => {
      const categoriaCard = card.getAttribute('data-categoria');
      if (categoria === 'todos' || categoriaCard === categoria) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Lógica do Quiz
function responder(correto) {
  const painelResultado = document.getElementById('resultado-quiz');
  if (correto) {
    painelResultado.textContent = 'Resposta correta! O Skate estreou em Tóquio 2020.';
    painelResultado.style.color = 'green';
  } else {
    painelResultado.textContent = 'Incorreto! Tente novamente.';
    painelResultado.style.color = 'red';
  }
}
