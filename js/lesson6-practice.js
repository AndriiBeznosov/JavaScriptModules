import transaction from './data/transaction.js';
// console.log(transaction);

const magicBtn = document.querySelector('.js-magic-btn');

// // const navItemEl = document.querySelector('.nav-menu');
// // console.log(navItemEl);
// // const navLinkEl = navItemEl.querySelectorAll('.nav-link');
// // console.log(navLinkEl);

// const imgEl = document.querySelector('.hero__img');
// console.log(imgEl);
// console.log(imgEl.src);
// console.log(imgEl.alt);
// imgEl.src = '/gifts/anniversary-descktop2x.jpg';

// const titleEl = document.querySelector('.hero__title');
// console.log(titleEl.textContent);
// titleEl.textContent = 'Привет';

// //   imgEl.removeAttribute('src');
// console.log(imgEl.hasAttribute('src'));
// const btnEl = document.querySelectorAll('.js-hero__container .btn');
// console.log(btnEl[0].dataset.action);
// const name = 'Andrii';

// const inputEl = document.querySelector('.js-input');
// console.log(inputEl.value);
// inputEl.value = 'nfdkjgnskl';
// inputEl.classList.add('top-js');
// magicBtn.addEventListener('click', () => {
//   //   inputEl.classList.remove('top-js');
//   inputEl.classList.toggle('js-new__class');
//   console.log(inputEl.classList.contains('js-new__class'));
//   //   inputEl.classList.replace('js-new__class', 'js-class');
// });

// const currentPageUrl = '/studio';

// const linkEl = document.querySelector(`.nav-link[href='${currentPageUrl}']`);
// console.log(linkEl);

// linkEl.classList.add('bomm');

// const elementMemu = document.querySelector('.nav-menu');
// // console.log(elementMemu);
// // const itemEl = elementMemu.firstElementChild;
// // console.log(itemEl);
// // console.log(elementMemu.children[2]);
// // console.log(elementMemu.lastElementChild);
// // console.log(elementMemu.childNodes);
// const newTitle = document.createElement('h2');
// newTitle.classList.add('new-title');
// newTitle.textContent = 'Це новий зоголовок ;)';
// console.log(newTitle);

// const newImgEl = document.createElement('img');
// newImgEl.src = '/gifts/birthday.jpg';
// newImgEl.alt = 'photo2';
// console.log(newImgEl.width);
// // newImgEl.setAttribute('width', 640);
// newImgEl.width = '240';
// console.log(newImgEl.width);
// console.log(newImgEl);
// document.body.appendChild(newImgEl);

// const newElItem = document.createElement('li');
// newElItem.classList.add('new-class__title');

// const newElLink = document.createElement('a');
// newElLink.classList.add('new-class__link');
// newElLink.href = '/sait';
// newElLink.textContent = 'Перейти на страницу sait';
// console.log(newElLink);

// newElItem.appendChild(newElLink);

// elementMemu.appendChild(newElItem);

// elementMemu.insertBefore(newElItem, elementMemu.firstElementChild);
// console.log(newElItem);

// const divEl = document.createElement('div');
// divEl.classList.add('div-container');
// // divEl.appendChild(newTitle);
// // divEl.appendChild(newImgEl);
// divEl.append(newElItem, newImgEl);
// console.log(divEl);

// const bodyEl = document.querySelector('body');
// console.log(bodyEl);
// bodyEl.insertBefore(divEl, bodyEl.children[1]);
//////////////////////////////
// const colorPickerOptions = [
//   { label: 'red', color: '#ff0000' },
//   { label: 'green', color: '#00ff00' },
//   { label: 'blue', color: '#0000ff' },
//   { label: 'yellow', color: '#ffff00' },
//   { label: 'pink', color: '#ff00ff' },
//   { label: 'green', color: '#00ff00' },
//   { label: 'blue', color: '#0000ff' },
//   { label: 'yellow', color: '#ffff00' },
// ];
// const options = colorPickerOptions[0];

// const btnEl = document.createElement('button');
// btnEl.type = 'button';
// btnEl.classList.add('btn-color');
// btnEl.textContent = options.label;
// btnEl.style.backgroundColor = options.color;
// btnEl.style.fontSize = 24;
// console.log(btnEl);

// const bodyEl = document.createElement('div');
// bodyEl.classList.add('btn-contsiner');
// bodyEl.style.backgroundColor = '#c0c0c0';

// const bod = document.querySelector('body');
// bod.appendChild(bodyEl);

// const makeColorPickerOptions = option => {
//   return option.map(options => {
//     const btnEl = document.createElement('button');
//     btnEl.type = 'button';
//     btnEl.classList.add('btn-test');
//     btnEl.textContent = options.label;
//     btnEl.style.backgroundColor = options.color;
//     return btnEl;
//   });
// };
// const elements = makeColorPickerOptions(colorPickerOptions);

// magicBtn.addEventListener('click', () => {
//   bodyEl.append(...elements);
// });
/////////////////////////////
// const product = {
//   name: 'Сервоприводи',
//   discription:
//     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, perferendis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, perferendis.',
//   price: 2000,
//   avialabel: true,
//   onSale: true,
// };
// const productEl = document.createElement('article');
// productEl.classList.add('product');
// const titleEl = document.createElement('h2');
// titleEl.classList.add('product__name');
// titleEl.textContent = product.name;
// const descrEl = document.createElement('p');
// descrEl.classList.add('product__descr');
// descrEl.textContent = product.discription;
// const priceEl = document.createElement('p');
// priceEl.classList.add('product__price');
// priceEl.textContent = `Цена: ${product.price}`;
// productEl.append(titleEl, descrEl, priceEl);
// console.log(productEl);

// magicBtn.addEventListener('click', () => {
//   const body = document.querySelector('body');
//   body.append(productEl);
// });
// console.log(titleEl);
// console.log(descrEl);
// console.log(priceEl);
/////////////////////////////////////////

// const productsContainerEl = document.querySelector('.js-product');
// const makeProductCard = ({ name, discription, price }) => {
//   const productEl = document.createElement('article');
//   productEl.classList.add('product');
//   const titleEl = document.createElement('h2');
//   titleEl.classList.add('product__name');
//   titleEl.textContent = name;
//   const descrEl = document.createElement('p');
//   descrEl.classList.add('product__descr');
//   descrEl.textContent = discription;
//   const priceEl = document.createElement('p');
//   priceEl.classList.add('product__price');
//   priceEl.textContent = `Цена: ${price}`;
//   productEl.append(titleEl, descrEl, priceEl);

//   return productEl;
// };

// const element = products.map(makeProductCard);
// console.log(element);
// productsContainerEl.append(...element);

///////////////////////////////////////////
//  снятие и добавление собития  //
// const clickBtn = document.querySelector('.and-btn');
// const addClickBtn = document.querySelector('.remove-btn');
// const takeOffClickBtn = document.querySelector('.edit-btn');

// // event - обьект содкржит служебную информацию о собитии, которое произошло
// addClickBtn.addEventListener('click', event => {
//   //   console.log(event);
//   console.log('Вешаю слушателя на кнопку');
//   clickBtn.addEventListener('click', onTargetClickBtn);
// });
// takeOffClickBtn.addEventListener('click', event => {
//   //   console.log(event);
//   console.log('Снимаю слушателя');
//   clickBtn.removeEventListener('click', onTargetClickBtn);
// });

// function onTargetClickBtn(event) {
//   //   console.log(event);
//   console.log('Клик по целевой кнопке');
// }

////////////////////////////////////////
// 2;
// const refs = {
//   input: document.querySelector('.js-input'),
//   naveLabel: document.querySelector('.js-button > span'),
//   licenceCheckbox: document.querySelector('.js-license'),
//   btn: document.querySelector('.js-button'),
// };

// // refs.input.addEventListener('focus', onInputFocus);
// // refs.input.addEventListener('blur', onInputBlur);
// // refs.input.addEventListener('change', onInputChange);
// refs.input.addEventListener('input', onInputChange);
// refs.licenceCheckbox.addEventListener('change', onLicenseChange);
// function onInputFocus() {
//   console.log('Инпут получил фокус - собитие focus');
// }
// function onInputBlur() {
//   console.log('Инпут потерял фокус - собитие blur');
// }
// function onInputChange(event) {
//   console.log(event.currentTarget.value);
//   refs.naveLabel.textContent = event.currentTarget.value;
// }
// function onLicenseChange(event) {
//   refs.btn.disabled = !event.currentTarget.checked;
// }
// ///////////////////////////////////////////////
// 3
//Тип собития keypress,keydown,keyup
//Ограничение keyprees
//Свойства KeyboardEvent.key KeyboardEvent.code

// const refs = {
//   output: document.querySelector('.js-output'),
//   clearBtn: document.querySelector('.js-clear'),
// };

// window.addEventListener('keypress', onKeyprees);
// refs.clearBtn.addEventListener('click', onClearOunput);
// function onKeyprees(event) {
//   console.log(event.key);
//   console.log(event.code);
//   refs.output.textContent += event.key;
// }
// function onClearOunput() {
//   refs.output.textContent = '';
// }
///////////////////////////////////
//4 События мыши
// mouseenter и mouseleave (єто ховер)
//mouseover mouseout
//moussemove (chatty even - болтливоке событие)
// const boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mouseenter', onMouseEnter);
// boxRef.addEventListener('mouseleave', onMouseLeave);
// // boxRef.addEventListener('mousemove', onMouseMove);

// function onMouseEnter(event) {
//   const box = event.currentTarget;
//   box.classList.add('box__hover');
// }
// function onMouseLeave(event) {
//   const box = event.currentTarget;
//   box.classList.remove('box__hover');
// }
// function onMouseMove(event) {
//   console.log(event);
// }
///////////////////////////////////
//defer acync
