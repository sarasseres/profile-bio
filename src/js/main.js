import Typed from 'typed.js';
import confetti from 'canvas-confetti';

new Typed('#heading', {
  strings: ['Hey There !', 'I am Frontend Developer', 'and Software Engineer'],
  typeSpeed: 50,
  backSpeed: 100,
  cursorChar: '_',
  loop: true,
});

const form = document.getElementById('form');

form.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const myCanvas = document.createElement('canvas');
    document.body.appendChild(myCanvas);
    confetti.create(myCanvas, {
      resize: true,
      useWorker: true,
    });
    confetti({
      particleCount: 160,
      spread: 160,
      // any other options from the global
      // confetti function
    });
  }
});

const checkbox = document.querySelector('#toggle');
const html = document.querySelector('html');

checkbox.addEventListener('click', () => {
  checkbox.checked ? html.classList.add('dark') : html.classList.remove('dark');
});
