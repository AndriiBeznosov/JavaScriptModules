const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#e91e63", rgb: "233,30,99" },
  { hex: "#9c27b0", rgb: "156,39,176" },
  { hex: "#673ab7", rgb: "103,58,183" },
  { hex: "#3f51b5", rgb: "63,81,181" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#00bcd4", rgb: "0,188,212" },
  { hex: "#009688", rgb: "0,150,136" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffed3d", rgb: "255,235,59" },
  { hex: "#ff9800", rgb: "255,152,0" },
  { hex: "#795548", rgb: "121,85,72" },
  { hex: "#607d8b", rgb: "96,125,139" },
];
const container = document.querySelector(".palette");
const cardsMerkup = createColorCardMarkup(colors);

function createColorCardMarkup(colors) {
  return colors
    .map(({ hex, rgb }) => {
      return `
    
        <div class="color-card">
            <div class="color-cwatch"
                data-hex="${hex}"
                data-rgb="${rgb}"
                style="background-color: ${hex}"
            ></div>
            <div class="color-meta">
            <p>HEX: ${hex}</p>
            <p>RGB: ${rgb}</p>
        </div>
        </div>
   
    `;
    })
    .join("");
}
container.insertAdjacentHTML("beforeend", cardsMerkup);

container.addEventListener("click", onContainer);

function onContainer(e) {
  if (!e.target.classList.contains("color-cwatch")) {
    return;
  }

  const swatchEl = e.target;
  const parentColorCard = swatchEl.closest(".color-card");

  removeActivClassCard();
  addActivClassCard(parentColorCard);
  setBodyBgColor(swatchEl.dataset.hex);
}

function setBodyBgColor(color) {
  document.body.style.backgroundColor = color;
}

function removeActivClassCard() {
  const currentActivCard = document.querySelector(".color-card.is-activ");
  if (currentActivCard) {
    currentActivCard.classList.remove("is-activ");
  }
}
function addActivClassCard(parentColorCard) {
  parentColorCard.classList.toggle("is-activ");
}
