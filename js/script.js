// creation d'une variable pour le compteur a zero
let count = 0;

// sauvegarde de la valeur de l'id count-el
let countEl = document.getElementById("count-el");
console.log(countEl);

//Paragraphe
let saveEl = document.getElementById("save-el");

function patate() {
  //count = count + 1;
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countstr = count + " - ";
  saveEl.textContent += countstr;
}

//function pour reset le compteur a 0
function reset() {
  countEl.textContent = 0;
  count = 0;
}

let headlineText = document.getElementById("headline");
headlineText.textContent += " " + "🥔";
