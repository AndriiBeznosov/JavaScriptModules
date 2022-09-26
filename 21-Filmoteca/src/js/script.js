const refs = {
  backdrop: document.querySelector(".backdrop"),
  modal: document.querySelector(".modal"),
  btnClose: document.querySelector(".modal__close"),
  itemCard: document.querySelector(".hero__item"),
};
console.log(refs.backdrop);
console.log(refs.modal);
console.log(refs.itemCard);

refs.itemCard.addEventListener("click", removeClassHidden);
refs.btnClose.addEventListener("click", addClassHidden);

function removeClassHidden() {
  refs.backdrop.classList.remove("hidden");
}
function addClassHidden() {
  refs.backdrop.classList.add("hidden");
}
