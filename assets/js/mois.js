/**
 * @author Serhat
 */

var tab = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Aout",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre"
];

for (var i = 1; i <= tab.length; i++) {
  var elementTab = document.getElementById(tab[i]);
  if (i % 2) {
    elementTab.style.background = "grey";
  }
}
