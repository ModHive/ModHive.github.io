// Dark mode toggle
const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Simple search filter
const searchInput = document.getElementById('searchInput');
const appCards = document.querySelectorAll('.app-card');

searchInput.addEventListener('input', () => {
  const filter = searchInput.value.toLowerCase();
  appCards.forEach(card => {
    const title = card.querySelector('h2').innerText.toLowerCase();
    if (title.includes(filter)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
});