const container = document.querySelector('.js-container');

container.addEventListener('click', onClick);

function onClick(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }
  console.log(evt.target.textContent);
}

// код добавления кнопки
const addBtn = document.querySelector('.js-add-btn');
let numberBtn = 6;

addBtn.addEventListener('click', creatBtn);

function creatBtn() {
  const btn = document.createElement('button');
  btn.classList = 'btn';
  btn.textContent = `Button ${numberBtn}`;
  btn.type = 'button';
  container.appendChild(btn);
  numberBtn += 1;
}
////////////////
const btnContainer = document.querySelector('.js-tags');
btnContainer.addEventListener('click', onTagsContainerClick);
let selectedTeg = null;
const selectedTegs = [];
const selectedTegsNew = new Set();
function onTagsContainerClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  //   const currentActivClass = document.querySelector('.tags__btn--activ');
  //   // //////////////
  //   currentActivClass?.e.target.classList.remove('.tags__btn--activ');
  //   //   if (currentActivClass) {
  //   //     e.target.classList.remove('.tags__btn--activ');
  //   //   }
  const btn = e.target;
  const isActiv = btn.classList.contains('tags__btn--activ');
  const tag = (selectedTeg = btn.dataset.value);

  btn.classList.toggle('tags__btn--activ');
  selectedTeg = btn.dataset.value;
  selectedTegsNew.add(selectedTeg);

  if (isActiv) {
    selectedTegsNew.delete(selectedTeg);
  } else {
    selectedTegsNew.add(selectedTeg);
  }

  console.log(isActiv);
  //   selectedTegs.push(selectedTeg);
  //   console.log(selectedTeg);
  //   console.log(selectedTegs);
  console.log(selectedTegsNew);
}
