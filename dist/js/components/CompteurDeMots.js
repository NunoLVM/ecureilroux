export function compteurDeMots() {
    let article = document.querySelector(".article-body");
    let mot = article.textContent;
    console.log (mot);
    
    function compteur (str){
      return str.trim().split(/\s+/).length;
    }
    
    console.log(compteur(mot));
    
    let resultat =(compteur(mot));
    
    const nombreMot = document.getElementById ('resultatCompteur');
    
    nombreMot.textContent = `Cet article contient ${resultat} mots`;
}