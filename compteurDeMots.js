let texte = document.getElementById("compteur");
let mot = texte.textContent;
console.log (mot);

function compteur (str){
    return str.trim().split(/\s+/).length;
}

console.log(compteur(mot));
let resultat =(compteur(mot));

const nombreMot = document.getElementById ('resultatCompteur');

nombreMot.textContent = `Cet article contient ${resultat} mots`;