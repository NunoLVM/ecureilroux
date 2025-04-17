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
