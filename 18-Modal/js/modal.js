const openModalBtn = document.querySelector('[data-action="open-modal"]');
const closeModalBtn = document.querySelector('[data-action="close-modal"]');
const backdrop = document.querySelector('.js-backdrop');

openModalBtn.addEventListener('click', onOpenModal);
closeModalBtn.addEventListener('click', onCloseModal);
backdrop.addEventListener('click', closeBackdrop);

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPrees);
  document.body.classList.add('show-modal');
}
function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPrees);
  document.body.classList.remove('show-modal');
}

function closeBackdrop(event) {
  //   console.log(event.target);
  //   console.log(event.currentTarget);
  if (event.target === event.currentTarget) {
    // document.body.classList.remove('show-modal');
    onCloseModal(); // -> тожк самое что и document.body.classList.remove('show-modal');
    // console.log('Клик прошел по пустому месту');
  }
}
function onEscKeyPrees(event) {
  const ESC_KEY_CODE = 'Escape'; //-> переменная которая никогда не меняется
  console.log(event.key);
  if (event.code === ESC_KEY_CODE) {
    onCloseModal(); // -> тожк самое что и document.body.classList.remove
  }
}
