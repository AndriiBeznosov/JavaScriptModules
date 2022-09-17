const refs = {
  form: document.querySelector(".form"),
  btn: document.querySelector(".js-btn"),
  number1: document.querySelector(".js-number-1"),
  number2: document.querySelector(".js-number-2"),
  operation: document.querySelector(".js-operation"),
  btnStart: document.querySelector(".js-btn-start"),
  result: document.querySelector(".result"),
  rightReply: document.querySelector(".right-reply"),
  amissReply: document.querySelector(".amiss-reply"),
  time: document.querySelector(".time"),
  timMinutes: document.querySelector(".minutes"),
  timSeconds: document.querySelector(".seconds "),
  tim1: document.querySelector(".tim1"),
  totalResult: document.querySelector(".total-result"),
  correct: document.querySelector(".correct"),
  onErrors: document.querySelector(".errors"),
  onBtnClose: document.querySelector(".btn-close"),
};

refs.btnStart.addEventListener("click", startTest);
refs.form.addEventListener("submit", onSubmitForm);
refs.onBtnClose.addEventListener("click", onCloseBackdrop);

refs.result.classList.add("is-hidden");
let totalRightReply = 0;
let totalAmissReply = 0;
//запуск таймера при старте теста
function startTest() {
  onTime();
  classDeletionHidden();
  refs.btnStart.disabled = true;
  renderNumber();
}
//таймера при старте теста
function onTime() {
  let minutes = 1;
  let seconds = 30;

  pad(seconds, minutes);
  const timeId = setInterval(() => {
    if (
      refs.timMinutes.textContent === "00" &&
      refs.timSeconds.textContent === "00"
    ) {
      refs.btn.disabled = true;
      clearInterval(timeId);
      minutes = 1;
      seconds = 30;
      classAdditionHidden();
      refs.totalResult.classList.toggle("hidden");

      return;
    }
    if (refs.timSeconds.textContent === "00") {
      seconds = 59;
      minutes -= 1;
    }
    seconds -= 1;
    pad(seconds, minutes);
  }, 1000);
}
// вывод дополнительного нуля в начале если число единичное
function pad(seconds, minutes) {
  refs.timSeconds.textContent = String(seconds).padStart(2, 0);
  refs.timMinutes.textContent = String(minutes).padStart(2, 0);
}
//вывод результатов после прохождения теста
function onCloseBackdrop() {
  totalRightReply = 0;
  totalAmissReply = 0;
  refs.totalResult.classList.toggle("hidden");
  refs.btnStart.disabled = false;
  renderNumber();

  refs.rightReply.textContent = 0;
  refs.amissReply.textContent = 0;
  refs.btn.disabled = false;
  resetForm();
}
// сабмит формы
function onSubmitForm(e) {
  e.preventDefault();
  const number1 = +refs.number1.textContent;
  const number2 = +refs.number2.textContent;
  const formFesult = +e.target.elements.number.value;
  // проверка на правильность ответа
  if (number1 + number2 === formFesult) {
    renderNumber();
    textContentRightAnswer();
    resetForm();
  } else {
    renderNumber();
    textContentWrongAnswer();
    resetForm();
  }
}
//рендер произвольных чисел для примера
function renderNumber() {
  refs.number1.textContent = (Math.random() * (100 - 1) + 1).toFixed(0);
  refs.number2.textContent = (Math.random() * (100 - 1) + 1).toFixed(0);
}
// добавление результата в html после верно ответа
function textContentRightAnswer() {
  totalRightReply += 1;
  refs.rightReply.textContent = totalRightReply;
  refs.correct.textContent = totalRightReply;
}
// добавление результата в html после не верно ответа
function textContentWrongAnswer() {
  totalAmissReply += 1;
  refs.amissReply.textContent = totalAmissReply;
  refs.onErrors.textContent = totalAmissReply;
}
//ресет формы после события сабмит
function resetForm() {
  refs.form.reset();
}
// добавление класса hidden(форма,таймер,результат будут скрытье)
function classAdditionHidden() {
  refs.form.classList.add("is-hidden");
  refs.result.classList.add("is-hidden");
  refs.time.classList.add("hidden");
}
//удаление класса hidden (форма,таймер,результат будут показаны)
function classDeletionHidden() {
  refs.form.classList.remove("is-hidden");
  refs.result.classList.remove("is-hidden");
  refs.time.classList.remove("hidden");
}
