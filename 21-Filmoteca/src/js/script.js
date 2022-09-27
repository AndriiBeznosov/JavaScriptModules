const refs = {
  backdrop: document.querySelector(".backdrop"),
  modal: document.querySelector(".modal"),
  btnClose: document.querySelector(".modal__close"),

  list: document.querySelector(".hero__list"),
};

refs.btnClose.addEventListener("click", addClassHidden);

const API_KEY = "e761c0cc0c75e9e76bceba6c904ee9f8";
const URL = "https://api.themoviedb.org/3";
const API_URL = `${URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
const IMG = "https://image.tmdb.org/t/p/w500";

async function getMovies() {
  await fetch(API_URL)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      render(res.results);
    });
}
getMovies();

function render(data) {
  console.log(data);

  const list = data
    .map((item) => {
      //   genre(item.original_title);
      return `
        <li class="hero__item">
            <img src="${IMG}${item.poster_path}" alt="${item.title}" />
             <h2 class="hero__title">${item.title}</h2>
             <p class="hero__text">Drama, Action | 2020</p>
            </li>`;
    })
    .join("");
  refs.list.insertAdjacentHTML("beforeend", list);
  (refs.itemCard = document.querySelector(".hero__item")),
    refs.itemCard.addEventListener("click", removeClassHidden);
}

function removeClassHidden() {
  refs.backdrop.classList.remove("hidden");
}
function addClassHidden() {
  refs.backdrop.classList.add("hidden");
}

// function genre(id) {
//   fetch(
//     `https://api.themoviedb.org/3/company/${id}?api_key=e761c0cc0c75e9e76bceba6c904ee9f8`,
//   )
//     .then((res) => {
//       return res.json();
//     })
//     .then((res) => {
//       console.log(res);
//     });
// }
