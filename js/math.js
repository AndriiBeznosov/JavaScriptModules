const refs = {
  form: document.querySelector('.form'),
  btn: document.querySelector('.js-btn'),
  number1: document.querySelector('.js-number-1'),
  number2: document.querySelector('.js-number-2'),
  operation: document.querySelector('.js-operation'),
  btnStart: document.querySelector('.js-btn-start'),
  result: document.querySelector('.result'),
  rightReply: document.querySelector('.right-reply'),
  amissReply: document.querySelector('.amiss-reply'),
};
refs.btnStart.addEventListener('click', startTest);
refs.form.addEventListener('submit', onSubmitForm);

refs.result.classList.add('is-hidden');
let totalRightReply = 0;
let totalAmissReply = 0;

function startTest() {
  refs.form.classList.remove('is-hidden');
  refs.btnStart.disabled = true;
  refs.result.classList.remove('is-hidden');
}

function onSubmitForm(e) {
  e.preventDefault();

  console.dir(e.target.elements.number.value);
  const number1 = +refs.number1.textContent;
  const number2 = +refs.number2.textContent;
  if (number1 + number2 === +e.target.elements.number.value) {
    console.log('правильний ответ');
    refs.number1.textContent = renderNumberOno();
    refs.number2.textContent = renderNumberDuo();
    totalRightReply += 1;
    console.log(totalRightReply);
    refs.rightReply.textContent = totalRightReply;

    refs.form.reset();
  } else {
    console.log('не правильний ответ');
    refs.number1.textContent = renderNumberOno();
    refs.number2.textContent = renderNumberDuo();
    totalAmissReply += 1;
    refs.amissReply.textContent = totalAmissReply;
    refs.form.reset();
  }
}

function renderNumberOno() {
  const number1 = (Math.random() * (100 - 1) + 1).toFixed(0);
  return number1;
}

function renderNumberDuo() {
  const number2 = (Math.random() * (100 - 1) + 1).toFixed(0);
  return number2;
}

refs.number1.textContent = renderNumberOno();
refs.number2.textContent = renderNumberDuo();
