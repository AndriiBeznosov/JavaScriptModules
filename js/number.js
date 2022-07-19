const counter = {
  value: 0,
  increment() {
    this.value += 100;
  },
  decrement() {
    this.value -= 100;
  },
};

const decrementBtn = document.querySelector('.js-decrement');
// console.log(decrementBtn);
const incrementBtn = document.querySelector('.js-increment');
// console.log(incrementBtn);
const valueEl = document.querySelector('.js-value');
// console.log(valueEl);

decrementBtn.addEventListener('click', function () {
  //   console.log('Кликнул по descremenBtn');
  counter.decrement();
  console.log(counter);
  valueEl.textContent = counter.value;
});

incrementBtn.addEventListener('click', function () {
  //   console.log('Кликнул по inscremenBtn');
  counter.increment();
  console.log(counter);
  valueEl.textContent = counter.value;
});
