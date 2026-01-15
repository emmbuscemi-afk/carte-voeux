document.addEventListener('DOMContentLoaded', () => {
  const carte = document.querySelector('.carte');

  carte.addEventListener('click', () => {
    carte.classList.toggle('is-flipped');
  });
});


