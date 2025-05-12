// Simuler l'ajout d'un commentaire avec création d’alerte - Nuno

const button = document.getElementById("button-contact");

function afficherAlerte(event) {
  event.preventDefault();

  // Supprimer une alerte existante s'il y en a une
  const alertMsg = document.getElementById("js-message"); 
  if (alertMsg) alertMsg.remove(); // <- avec les parenthèses !

  // Créer une nouvelle div pour l’alerte
  const alertMessage = document.createElement("div");
  alertMessage.id = "js-message";
  alertMessage.innerText = "Ton commentaire a bien été envoyé";

  // Trouver le formulaire
  const form = document.getElementById("comment-form");

  // Ajouter l’alerte en haut du formulaire
  form.prepend(alertMessage);
}

button.onclick = afficherAlerte;
