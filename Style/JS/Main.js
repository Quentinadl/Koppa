var maintenant = new Date();
var heure = maintenant.getHours();

if (heure >= 20 || heure < 6) {
  document.getElementById("ImageShowcase").src = "Images/Man_Presentation_nuit.png";
} else {
  document.getElementById("ImageShowcase").src = "Images/Man_Presentation_jour.png";
}
image.src = imageSource;

