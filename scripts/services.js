function highlightService(card) {
  // Remove highlight from all
  document.querySelectorAll('.service-card').forEach(el => el.classList.remove('selected'));
  // Highlight clicked one
  card.classList.add('selected');
}
