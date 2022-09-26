const refs = {
  onForm: document.querySelector(".search-form"),
  list: document.querySelector(".random-recepies"),
  btn: document.querySelector(".btn"),
  btnClose: document.querySelector(".btn-close"),
  backdrop: document.querySelector(".backdrop"),
};
refs.onForm.addEventListener("submit", onFormSubmit);
refs.btn.addEventListener("click", openBackdrop);
refs.btnClose.addEventListener("click", closeBackdrop);

async function onFormSubmit(e) {
  e.preventDefault();
  const value = e.target.elements.searchQuery.value;
  console.log(value);
  await onFetch(value).then((res) => {
    console.log(res);
  });
}

async function onFetch(value) {
  const URL = `https://pokeapi.co/api/v2/pokemon/${value}`;
  return await fetch(URL).then((res) => {
    return res.json();
  });
}

function openBackdrop() {
  refs.backdrop.classList.remove("hidden");
}

function closeBackdrop() {
  refs.backdrop.classList.add("hidden");
}
