const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


// Button ko ID se select karein
const button = document.getElementById('color-change-button');

// Body element ko select karein
const body = document.body;

// Colors ki ek list banayein
const colors = ['#3498db', '#e74c3c', '#2ecc71', '#9b59b6', '#f1c40f'];

// Event Listener add karein
button.addEventListener('click', () => {
    // Colors array se ek random color select karein
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Body ka background-color change karein
    body.style.backgroundColor = randomColor;
});