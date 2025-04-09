let shareBtn = document.querySelector(".partager");

let closeModal = document.querySelector(".button-icon-close");

shareBtn.addEventListener("click", function () {
  document.body.classList.add("has-share");
});

closeModal.addEventListener("click", function () {
  document.body.classList.remove("has-share");
});
