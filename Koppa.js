tab = ["rigoureux .", "motivé .", "dynamique ."];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function change(){
    n = getRandomInt(3);
    document.getElementById('DescriptionChangement').innerHTML = tab[n];
}
setInterval(change, 1500);   



// const questionContainer = document.querySelector(".vitrineimage");

// questionContainer.addEventListener("click", () => {
//     console.log("Click !");
// });

