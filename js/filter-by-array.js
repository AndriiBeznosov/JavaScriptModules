const tech = [
  { label: 'Java Script' },
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'Node.js' },
  { label: 'React' },
  { label: 'Next.js' },
  { label: 'Mobx' },
  { label: 'Redux' },
  { label: 'React Router' },
  { label: 'GraphQl' },
  { label: 'MongoDb' },
  { label: 'Vue' },
];

const refs = {
  list: document.querySelector('.js-list'),
  input: document.querySelector('#filter'),
};

refs.input.addEventListener('input', _.debounce(onFilterChange, 500)); //fuce.js - пушистий поиск

const listItemsMekup = createListItemsMarkup(tech);

populateList(listItemsMekup);

function createListItemsMarkup(items) {
  return items.map(item => `<li>${item.label}</li>`).join('');
}

// фильтер по массиву
function onFilterChange(evt) {
  const filter = evt.target.value.toLowerCase();
  const filteredsItems = tech.filter(t =>
    t.label.toLowerCase().includes(filter),
  );

  const listItemsMekup = createListItemsMarkup(filteredsItems);
  populateList(listItemsMekup);
}

function populateList(markap) {
  refs.list.innerHTML = markap;
}
