document.addEventListener('DOMContentLoaded', function() {
  const changeViewBtn = document.querySelector('.change-view');
  const cards = document.querySelectorAll('.card');
  const flexDeck = document.querySelector('.flex-deck');
  const backBtn = document.querySelector('.back');
  const hoverSound9 = document.getElementById('hover-sound9');
  const hoverSound12 = document.getElementById('hover-sound12');
  const clickSound1 = document.getElementById('click-sound1');
  const changeViewSound = document.getElementById('change-view');

  changeViewBtn.addEventListener('click', function() {
      cards.forEach(function(card) {
          card.classList.toggle('large');
      });
      flexDeck.classList.toggle('column-direction');
      changeViewSound.play();
  });

  backBtn.addEventListener('mouseover', function() {
      hoverSound9.play();
  });

  backBtn.addEventListener('mouseleave', function() {
      hoverSound9.pause();
      hoverSound9.currentTime = 0;
  });

  cards.forEach(function(card) {
      const soundId = card.dataset.sound;
      const hoverSound = document.getElementById(soundId);

      card.addEventListener('mouseover', function() {
          hoverSound.play();
      });

      card.addEventListener('mouseleave', function() {
          hoverSound.pause();
          hoverSound.currentTime = 0;
      });
  });

  const arrow = document.querySelector('.arrow');
  arrow.addEventListener('mouseover', function() {
      hoverSound12.play();
  });
 
  arrow.addEventListener('mouseleave', function() {
      hoverSound12.pause();
      hoverSound12.currentTime = 0;
  });

  arrow.addEventListener('click', function() {
      clickSound1.play();
  });
});
