/* -----Changement de thème----- */

const switchElement = document.querySelector('#switch input[type="checkbox"]');
const rootElement = document.querySelector(':root');

switchElement.addEventListener('click', function () {
  if (switchElement.checked) {    /* Foncé */
    rootElement.style.setProperty('--couleur-fond', '#333333');
    rootElement.style.setProperty('--couleur-text', '#BCBDBF');
    rootElement.style.setProperty('--couleur-fonce', '#EDEEF0');
    rootElement.style.setProperty('--couleur-gros-texte', '#FFF');
  }
  else {      /* Claire */
    rootElement.style.setProperty('--couleur-fond', '#EDEEF0');
    rootElement.style.setProperty('--couleur-text', '#555555');
    rootElement.style.setProperty('--couleur-fonce', '#000');
    rootElement.style.setProperty('--couleur-gros-texte', '#FFF');
  }
});

