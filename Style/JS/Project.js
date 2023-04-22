/* -----Affichage des Projets----- */


const Cyber = document.querySelector('#Cyber');
const Programmes = document.querySelector('#Programmes');
const Conte = document.querySelector('#Conte');
const Certifications = document.querySelector('#Certifications');
const frigs = document.querySelector('#frigs');
const design = document.querySelector('#design');


const title = document.querySelector('#title');
const text = document.querySelector('#text');
const link = document.querySelector('#link');
const image = document.querySelector('#image');

Cyber.addEventListener('click', function () {
  title.innerHTML = "Rapport cyber 2022";
  text.innerHTML = "Stagiaire en cybersécurité, j'ai observé les défis de sécurité numérique auxquels les entreprises et les individus sont confrontés. Dans ce rapport, j'aborde les différents types d'attaques, leurs conséquences et les mesures de prévention des risques. Mon objectif est de sensibiliser les utilisateurs aux risques en ligne et de les aider à se protéger.";
  link.href = "Documents/Aperçu des cyber menaces les plus répandues sur l’année 2022.pdf";
  image.src = "Images/Project_Cyber.png";
});

Programmes.addEventListener('click', function () {
  title.innerHTML = "Mon GitHub ";
  text.innerHTML = "Il présente une variété de projets développés au cours de ma formation en école d'ingénieur. Il comprend mon projet transverse de première année, un jeu en Python, ainsi qu'un jeu de Takuzu. Vous y trouverez également d'autres projets, qui montrent ma capacité à travailler sur des projets en groupe et à mettre en œuvre des compétences techniques variées...";
  link.href = "https://github.com/Quentinadl";
  image.src = "Images/Project_Programmation.png";
});

Conte.addEventListener('click', function () {
  title.innerHTML = "Le chat et la souris";
  text.innerHTML = "Imaginé pour un public de 6 à 8 ans, mon conte intitulé Le chat et la souris s'adresse aussi à un public plus âgé comprenant les dessous d'un réel problème de société. Je ne vous en dis pas plus, et vous laisse découvrir par vous-même la merveilleuse histoire de la souris Sète et du chat Malo...</br></br>";
  link.href = "Documents/Le_chat_et_la_souris.pdf";
  image.src = "Images/Project_Comte.png";
});

Certifications.addEventListener('click', function () {
  title.innerHTML = "MOOC de L'ANSSI";
  text.innerHTML = "Cette formation m'a permis d'acquérir les premières connaissances en matière de cybersécurité, en couvrant des sujets tels que la gestion des risques, la cryptographie et la sécurité des systèmes.";
  link.href = "https://secnumacademie.gouv.fr/";
  image.src = "Images/Project_Certification.png";
});

frigs.addEventListener('click', function () {
  title.innerHTML = "Application mobile";
  text.innerHTML = "Nous sommes une équipe d'étudiants en ingénierie qui a créé Frig's, une application innovante visant à résoudre le problème du gaspillage alimentaire. Frig's permet à chacun de vider son frigo tout en réduisant la quantité de déchets alimentaires dans les ménages. Notre prototype, réalisé en équipe dans le cadre d'un projet semestriel.";
  link.href = "Documents/Frigs.pdf";
  image.src = "Images/Project_Frig's.png";
});

design.addEventListener('click', function () {
  title.innerHTML = "Mes design";
  text.innerHTML = "Je suis passionné de design et j'utilise Figma pour réaliser mes projets personnels et étudiants. J'aime créer des designs visuellement attrayants qui optimisent l'expérience utilisateur en accord avec les valeurs du projet. Mes designs sont protégés par le droit d'auteur.";
  link.href = "https://www.figma.com/file/ze0EMgAWfJQi0TTRz4fh6t/Design---Quentin-ADELINE?node-id=1%3A13565&t=W5OsKeUL0mQnnGCj-1";
  image.src = "Images/Project_Figma.png";
});