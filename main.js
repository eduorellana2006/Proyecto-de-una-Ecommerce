// Aceptar o Rechazar cookies

const btn = document.getElementById('cookies__cerrar');
const lista = document.querySelector('.cookies');
btn.addEventListener('click', () => {
  lista.classList.toggle('visible');
});

//

const abrir_lista = document.getElementById('abrir_lista');
const abrir_header = document.querySelector('.header__lista');
abrir_lista.addEventListener('click', () => {
  abrir_header.classList.toggle('visible');
});

const svg = abrir_lista.querySelector('svg');

const hamburgerSVG = `
  <svg class="nav__menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
  </svg>
`;

const closeSVG = `
  <svg class="nav__menu__cerrar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
  </svg>
`;

abrir_lista.addEventListener('click', () => {
  abrir_lista.classList.toggle('visible');
  
  if (abrir_lista.classList.contains('visible')) {
    // lista abierta → muestra ícono de cerrar
    abrir_lista.innerHTML = closeSVG;
  } else {
    // lista cerrada → muestra ícono de menú
    abrir_lista.innerHTML = hamburgerSVG;
  }
});