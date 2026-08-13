document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.wisdom-entry blockquote').forEach((quote) => {
  quote.style.color = '#f8f4f3';
});
