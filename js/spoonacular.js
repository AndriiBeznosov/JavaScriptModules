const refs = {
  onForm: document.querySelector(".search-form"),
  list: document.querySelector(".random-recepies"),
};
refs.onForm.addEventListener("submit", onFormSubmit);

const URL = "https://api.spoonacular.com/recipes/";
const KEY = `apiKey=74ea302304b245c0a1d62ea4784d47ce`;

function onFormSubmit(e) {
  e.preventDefault();
  const value = e.target.elements.searchQuery.value;
  onFetch(value).then((res) => {
    recipesMarkup(res.recipes);
  });
}

function onFetch(value) {
  return fetch(`${URL}/random?${KEY}&tags=${value}&number=10`).then(
    (response) => {
      return response.json();
    },
  );
}

function recipesMarkup(data) {
  console.log(data);
  const listRecipes = data
    .map(
      (item) => ` <li class="recipe">
        <img src="${item.image}" alt="" />
        <h2>${item.title}</h2>
        <p>Time: ${item.readyInMinutes} min</p>
        <p>${item.instructions}</p>
        <p>${item.summary}</p>
      </li>`,
    )
    .join("");

  refs.list.insertAdjacentHTML("afterend", listRecipes);
}
