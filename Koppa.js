tab = ["rigoureux .", "motivé .", "dynamique ."];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function change(){
    n = getRandomInt(3);
    document.getElementById('Description2').innerHTML = tab[n];
}
setInterval(change, 1500);   



// const questionContainer = document.querySelector(".vitrineimage");

// questionContainer.addEventListener("click", () => {
//     console.log("Click !");
// });

function tournerLaCarte() {
  var elements = this.parentNode.querySelectorAll("div[class^='card']");
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].className == "card-single") {
      elements[i].className += " rotated";
    } else {
      elements[i].className = "card-single";
    }
  }
}

window.onload = function() {
  buttons = document.querySelectorAll("button");
  for (i = 0; i < buttons.length; i++) {
    element = buttons[i];
    element.addEventListener("click", tournerLaCarte);
  }
};




function scroll(){
    var larg = (document.body.clientWidth);
    if(larg > 1100){
        var y = window.scrollY;
        if(y < 300){
            document.getElementById('header');
            // document.getElementById('portfolio').style.fontSize = '30px';
            // document.getElementById('portfolio').style.width = '110px';
            // document.getElementById('decoration').style.width = '210px';
            // document.getElementById('decoration').style.marginTop = '15px';
        }
        else{
            document.getElementById('header');
            // document.getElementById('portfolio').style.fontSize = '22px';
            // document.getElementById('portfolio').style.width = '80px';
            // document.getElementById('decoration').style.width = '140px';
            // document.getElementById('decoration').style.marginTop = '5px';
        }
    }
    else{
        // document.getElementById('portfolio').style.fontSize = '70px';
        // document.getElementById('portfolio').style.width = '260px';
        // document.getElementById('decoration').style.width = '370px';
        document.getElementById('header');
    }
}
setInterval("scroll()", 100);


