/**
 * GLOBALS
 */
var mois = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre"
];

var jours = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi"
];

var nbJours = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var nbJoursBis = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

///////////////////////////////////////////////

/**
 * Donne le jour à partir d'une date
 * @author Julien | Corentin
 */
function donneMoiLeJour(date) {
  // Transforme la chaîne de caractères en date valide
  var test = new Date(date);

  switch (test.getDay()) {
    case 0:
      return jours[0];
    case 1:
      return jours[1];
    case 2:
      return jours[2];
    case 3:
      return jours[3];
    case 4:
      return jours[4];
    case 5:
      return jours[5];
    case 6:
      return jours[6];
  }
}

/**
 * Donne le mois à partir d'une date
 * @author Julien | Corentin
 */
function donneMoiLeMois(date) {
  // Transforme la chaîne de caractères en date valide
  date = new Date(date);

  switch (date.getMonth()) {
    case 0:
      return mois[0];
    case 1:
      return mois[1];
    case 2:
      return mois[2];
    case 3:
      return mois[3];
    case 4:
      return mois[4];
    case 5:
      return mois[5];
    case 6:
      return mois[6];
    case 7:
      return mois[7];
    case 8:
      return mois[8];
    case 9:
      return mois[9];
    case 10:
      return mois[10];
    case 11:
      return mois[11];
  }
}

///////////////////////////////////////////////

// Prends la valeur donnée par l'utilisateur (Année)
var input = document.querySelector("#userInput");

input.addEventListener("keypress", function(event) {
  // Premier jours du mois
  var compteur = 0;

  // Varaible contenant le jour
  var i = 0;
  // Variable contenant le mois
  var j = 0;

  // Si la touche "Entrée" est pressée alors on exécute le code suivant
  if (event.which === 13) {
    event.preventDefault();

    reset();
    // La boucle permet de rénitialiser les valeurs pour éviter les bugs
    while (j < 12) {
      while (i !== 37) {
        document.querySelector(`#mois${j + 1}jour${i}`).innerHTML = ".";
        i++;
      }
      i = 0;
      j++;
    }

    j = 0;

    ///////////////////////////////////////////////

    if (input.value === "1949") {
      document
        .getElementById("mois1jour10")
        .addEventListener("click", function() {
          var img = document.createElement("img");
          img.src = "/assets/img/image0.jpg";
          document.getElementById("insererImage").appendChild(img);
        });
    }

    while (j < 12) {
      var premierJour = donneMoiLeJour(`${j + 1}-01-${input.value}`);

      while (
        premierJour !== document.querySelector(`#day${compteur}`).dataset.value
      ) {
        compteur++;
      }

      // Si l'année est bisextile
      if (input.value % 4 === 0) {
        while (i !== nbJoursBis[j]) {
          document.querySelector(
            `#mois${j + 1}jour${compteur}`
          ).innerHTML = `${i + 1}`;

          i++;
          compteur++;
        }
      } else {
        while (i !== nbJours[j]) {
          document.querySelector(
            `#mois${j + 1}jour${compteur}`
          ).innerHTML = `${i + 1}`;

          i++;
          compteur++;
        }
      }

      j++;

      // On réninitailise les jours et le compteur.
      i = 0;
      compteur = 0;
    }
  }

  // Appel de la fonction qui permet de rajouter les blagues le 1er avril après la création du tableau
  blagues();
});
