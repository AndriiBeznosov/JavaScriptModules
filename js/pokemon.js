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

// fetch(
//   'http://api.weatherstack.com/current?access_key=a5f59474a19cbb257d8d8a50732dbc13&query=Америка',
// )
//   .then(r => r.json())
//   .then(console.log);
//Запрос/////////////////
// const xhr = new XMLHttpRequest();
// console.log(xhr);

// xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');

// xhr.addEventListener('load', evt => {
//   console.log(evt);
//   console.log(JSON.parse(xhr.responseText));
// });

// xhr.send();
//Создание //////////////
// const xhr = new XMLHttpRequest();

// xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
// xhr.setRequestHeader('Content-Type', 'application/json');
// xhr.addEventListener('load', evt => {
//   console.log(JSON.parse(xhr.responseText));
// });

// xhr.send(
//   JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
// );
// console.log(axios);

// const api = axios.create({
//   baseURL: 'https://jsonplaceholder.typicode.com',
// });

// api
//   .get('/todos')
//   .then(res => console.log(res))
//   .then(res => {
//     console.log(res);
//   })
//   .catch(error => console.log(error));

// api
//   .post('/posts', { title: 'Заголовок', body: 'Тело', userId: 999 })
//   .then(res => {
//     console.log(res);
//   });
/////////////////////////////////////
// let globalVariable; // undefined

// // Initializing data fetching
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(users => {
//     console.log('users inside then callback: ', users);

//     // Writing the result to a global variable
//     globalVariable = users;

//     // Everything is ok here, the data is in the variable
//     console.log('globalVariable inside fetch callback: ', globalVariable);
//   });

// if (globalVariable === undefined) {
//   setTimeout(() => {
//     // No async data here
//     console.log('globalVariable outside fetch: setTimeout ', globalVariable); // undefined
//   }, 3000);
// } else {
//   console.log('globalVariable outside fetch:115 ', globalVariable);
// }

// const fetchUsersBtn = document.querySelector('.js-btn');
// const userList = document.querySelector('.user-list');

// fetchUsersBtn.addEventListener('click', () => {
//   fetchUsers()
//     .then(users => renderUserList(users))
//     .catch(error => console.log(error));
// });

// function fetchUsers() {
//   return fetch(
//     'https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name',
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// function renderUserList(users) {
//   const markup = users
//     .map(user => {
//       return `
//           <li>
//             <p><b>Name</b>: ${user.name}</p>
//             <p><b>Email</b>: ${user.email}</p>
//             <p><b>Company</b>: ${user.company.name}</p>
//           </li>
//       `;
//     })
//     .join('');
//   userList.innerHTML = markup;
// }
