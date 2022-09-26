if ("loading" in HTMLImageElement.prototype) {
  addSrcImages(); //еслb поддерживает линивую загрузку добавляет src
} else {
  addLazySizesScript(); //есле НЕ поддерживает линивую загрузку добавляет библиотеку
}

const lazyImage = document.querySelectorAll("img[data-src]");
lazyImage.forEach((imag) => {
  imag.addEventListener("load", onImageLoaden, { once: true }); // при добвлянии в собитие третий параментр, он срабативает только 1 раз
});

function onImageLoaden(e) {
  console.log(e.target);
  e.target.classList.add("appear");
}

function addLazySizesScript() {
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
  script.integrity =
    "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
  script.crossOrigin = "anonymous";
  script.referrerpolicy = "no-referrer";

  document.body.appendChild(script);
}
function addSrcImages() {
  const lazyImage = document.querySelectorAll('img[loading="lazy"]');

  lazyImage.forEach((img) => {
    img.src = img.dataset.src;
  });
}
