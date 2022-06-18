tab = ["rigoureux .", "motivé .", "dynamique ."];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function change(){
    n = getRandomInt(3);
    document.getElementById('t').innerHTML = tab[n];
}
setInterval(change, 1500);   