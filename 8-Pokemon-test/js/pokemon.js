// import pokemonCardTpl from './templates/pokemon-card.hbs';
const refs = {
  container: document.querySelector(".js-pokemon"),
  form: document.querySelector(".js-form"),
};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const id = form.elements.input_text.value;
  OnPokemonId(id)
    .then(renderPokemonCard)
    .catch((error) => {
      console.log(`Покемона под номером ${id} нет!!!`);
      alert(`Покемона под номером ${id} нет!!!`);
    })
    .finally(() => {
      form.reset();
    });
}

function OnPokemonId(pokemonId) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  return fetch(url).then((response) => {
    return response.json();
  });
}

function renderPokemonCard(pokemon) {
  console.log(pokemon.abilities);

  const abilityMas = pokemon.abilities
    .map((abil) => {
      return abil.ability.name;
    })
    .join(", ");
  console.log(abilityMas);

  refs.container.insertAdjacentHTML(
    "afterbegin",
    `<div class='card'>
  <div class='card-img-top'>
    <img src='${pokemon.sprites.back_default}' alt='${pokemon.name}' />
  </div>
  <div class='card-body'>
    <h2 class='card-title'>Имя: ${pokemon.name}</h2>
    <p class='list-text'>Вес: ${pokemon.weight}кг.</p>
    <p class='list-text'>Рост: ${pokemon.height}см.</p>

    <p class='list-text'><b>Умения</b></p>
    <ul class='list-group'>
        <li class='list-group-item'> ${abilityMas}</li>
        
     </ul>
  </div>
</div>`,
  );
  return;
}
