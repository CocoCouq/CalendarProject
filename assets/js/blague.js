/**
 * @author Serhat | Julien | Corentin
 */

var blague = [
  ["Qu’est qu’un cochon qui rit ?", "Un porc tout gai."],
  [
    "Quel est la date de la fête des fumeurs ?",
    "Le 1er Juin (premier joint)…."
  ],
  ["Ce que j’ai en commun avec mon mari ?", "On s’est mariés le même jour."],
  ["Quelle est la ville la plus vieille du monde ? ", "Milan (1000ans)"],
  ["Que dit un oignon quand il se cogne ?", "Ail"]
];

var listeID = [];

// La boucle ajoute tout les id dans le tableau
for (var i = 0; i < 37; i++) {
  listeID.push(`mois4jour${i}`);
}

function blagues() {
  // Pour chaque élement dans le tableau appliquer le code suivant
  listeID.forEach(function(element) {
    var currentElement = document.getElementById(element);

    // Si il s'agit du 1er avril, on rajoute un eventListener sur l'element
    if (currentElement.textContent === "1") {
      currentElement.addEventListener("click", function() {
        // Prends une valeur aléatoire
        var random = Math.floor(Math.random() * blague.length);
        // Retourne une blague pris au hasard dans le tableau à 2 dimensions à l'utilisateur
        alert(blague[random][0] + "\n" + blague[random][1]);
      });
    }

    return currentElement;
  });
}

function reset() {
  listeID.forEach(function(el) {
    var element = document.getElementById(el);
    var clone = element.cloneNode(true);

    element.parentNode.replaceChild(clone, element);
  });
}
