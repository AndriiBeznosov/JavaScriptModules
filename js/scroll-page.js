// import NewApiService from "./data/new-service";

const form = document.querySelector(".form-on");
const list = document.getElementById("list");
const search = document.getElementById("search");
const nextPage = document.getElementById("next-page");
const button = document.querySelector(".button-input");

form.addEventListener("submit", onSubmit);
nextPage.addEventListener("click", searchGelleryPhoto);
search.addEventListener("input", _.debounce(onInput, 300));
//безкінечний скролл
//////////////////////
// let elem = document.querySelector(".container");
// let infScroll = new InfiniteScroll(elem, {
//   // options

//   path: ".pagination__next",
//   append: ".post",
//   history: false,
// });

/////////////////////
window.addEventListener("scroll", scrollLoading);

function scrollLoading() {
  const documentRect = document.documentElement.getBoundingClientRect();
  if (documentRect.bottom < document.documentElement.clientHeight + 150) {
    searchGelleryPhoto();
  }
  return;
}

class NewApiService {
  constructor() {
    this.searchQuery = "";
    this.page = 1;
    this.totalPage = 0;
  }

  async searchGellery() {
    const op = {
      key: "25684992-ec31d25fc66c7364d0851b638",
      q: this.searchQuery,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      per_page: 10,
      page: this.page,
    };
    const URL = `https://pixabay.com/api/?key=${op.key}&q=${op.q}&image_type=${op.image_type}&orientation=${op.orientation}&safesearch=${op.safesearch}&per_page=${op.per_page}&page=${op.page}`;

    await fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return renderGallery(res.hits);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get numberPage() {
    return this.totalPage;
  }
  set numberPage(newPage) {
    this.totalPage = newPage;
  }
  totalNumberPage() {
    this.totalPage += 10;
  }
  totalNumberPageReset() {
    this.totalPage = 0;
  }
}

const newApiService = new NewApiService();

function onSubmit(e) {
  e.preventDefault();

  const value = e.target.elements.search.value.trim();
  if (!value) {
    return;
  }

  newApiService.query = value;
  button.disabled = true;
  newApiService.resetPage();
  newApiService.totalNumberPageReset();
  clearGalleryPhoto();
  searchGelleryPhoto();
  e.target.elements.search.value = "";
}

function renderGallery(photos) {
  console.log(photos);
  if (photos.length < 10) {
    addClassHidden();
    button.disabled = false;
  } else {
    classHidden();
  }
  renderPhoto(photos);
}

// function photoUpload() {
//   searchGelleryPhoto();
// }

function searchGelleryPhoto() {
  newApiService.searchGellery();

  newApiService.incrementPage();
  newApiService.totalNumberPage();
}

function renderPhoto(photos) {
  const galleryPhoto = photos
    .map((photo) => {
      return `
      <div class='item'>
      <img src='${photo.webformatURL}'>
      </div> 
      `;
    })
    .join("");
  list.insertAdjacentHTML("beforeend", galleryPhoto);
}

function classHidden() {
  return nextPage.classList.remove("hidden");
}
function addClassHidden() {
  return nextPage.classList.add("hidden");
}
function onInput(e) {
  if (e.target.value !== "") {
    return (button.disabled = false);
  }
}
function clearGalleryPhoto() {
  list.innerHTML = "";
}
// console.log("null: ", typeof null);
// console.log("undefined: ", typeof undefined);
// console.log("string: ", typeof "string");
// console.log("123: ", typeof 123);
// console.log("123n: ", typeof 123n);
// console.log("false: ", typeof false);
// console.log("function(){}: ", typeof function () {});
// console.log("{}: ", typeof {});
// console.log("symbol '123': ", typeof Symbol(123));

// function fn(n) {
//   return n.split("").reverse().join("");
// }

// console.log(fn("Hellow world !!!"));
