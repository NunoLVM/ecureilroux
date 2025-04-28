let shareBtn = document.querySelector(".btn-share");
let closeModal = document.querySelector(".btn-close");
let btnMainNav = document.getElementById('toggleMenu');

if (shareBtn) {
  shareBtn.addEventListener("click", function () {
    document.body.classList.add("has-share");
  });
}
if (closeModal) {
  closeModal.addEventListener("click", function () {
    document.body.classList.remove("has-share");
  });
}
if (btnMainNav) {
  btnMainNav.addEventListener('click', function() {
    document.body.classList.toggle("has-menu-opened");
  });
}


// 3) Calculateur d’âge d’un article - NUNO

let texte = document.getElementById("compteur")
let anneePublication = 2019;

function calculerAgeArticle(annee) {
    
    return new Date().getFullYear() - annee;

}

const ageArticle = document.getElementById("ageArticle");

ageArticle.textContent = "Cet article a " + calculerAgeArticle(anneePublication) + " ans.";


// 4) Faire apparaître un bouton “Remonter en haut” uniquement quand on descend - NUNO

let btnTop = document.getElementById("btnTop")

window.onscroll = function() {
  if (window.scrollY > 200) {
      btnTop.style.display = "block";

  } else {
      btnTop.style.display = "none";
  }    
};

btnTop.onclick = function() {
  window.scrollTo({ top: 0, behavior: "smooth" }); 

}

