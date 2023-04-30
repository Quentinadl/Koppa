var maintenant = new Date();
var heure = maintenant.getHours();

if (heure >= 20 || heure < 6) {
  document.getElementById("ImageShowcase").src = "Images/Man_Presentation_nuit.png";
} else {
  document.getElementById("ImageShowcase").src = "Images/Man_Presentation_jour.png";
}
image.src = imageSource;

<<<<<<< HEAD



//Fermer la barre latérale en cliquant sur une page sidebar li
const sidebarLinks = document.getElementById("sidebar.li");

const menuButton = document.getElementById('checkbox');
const closeButton = document.getElementById('close-button');
const sidebar = document.getElementById("sidebar");
const body = document.querySelector("body");

var open = 0; 


//Ouvrir la barre latérale en cliquant sur le bouton
menuButton.addEventListener('click', () => {
  if(open == 0){
  sidebar.classList.add("active");
  body.classList.add("active");
  open = 1;
}else{
  sidebar.classList.remove("active");
  body.classList.remove("active");
  open = 0;
}
});

//Fermer la barre latérale en cliquant sur une page sidebar li
sidebarLinks.addEventListener('click', () => {
    sidebar.classList.remove("active");
    body.classList.remove("active");
    open = 0;
});



var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header-tel").classList.remove("hide");
  } else {
    document.getElementById("header-tel").classList.add("hide");
  }
  prevScrollpos = currentScrollPos;
};
<<<<<<< HEAD
 */
=======
>>>>>>> parent of a3e583e (MAJ téléphone)
=======
>>>>>>> parent of 1caa45b (projet telephonne)
