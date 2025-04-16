let shareBtn = document.querySelector(".btn-share");

let closeModal = document.querySelector(".btn-close");

shareBtn.addEventListener("click", function () {
  document.body.classList.add("has-share");
});

closeModal.addEventListener("click", function () {
  document.body.classList.remove("has-share");
});
