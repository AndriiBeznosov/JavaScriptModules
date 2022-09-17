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

function startTest() {
  onTime();
  refs.form.classList.remove("is-hidden");
  refs.btnStart.disabled = true;
  refs.result.classList.remove("is-hidden");
  refs.time.classList.remove("hidden");
  refs.number1.textContent = renderNumberOno();
  refs.number2.textContent = renderNumberDuo();
}

function onTime() {
  let minutes = 1;
  let seconds = 30;

  refs.timMinutes.textContent = pad(minutes);
  refs.timSeconds.textContent = pad(seconds);
  const timeId = setInterval(() => {
    console.log(refs.timSeconds.textContent);
    if (
      refs.timMinutes.textContent === "00" &&
      refs.timSeconds.textContent === "00"
    ) {
      refs.btn.disabled = true;
      clearInterval(timeId);

      minutes = 1;
      seconds = 30;
      // onTotalResult();
      // onCloseBackdrop();
      refs.form.classList.add("is-hidden");
      refs.result.classList.add("is-hidden");
      refs.time.classList.add("hidden");
      refs.totalResult.classList.toggle("hidden");

      return;
    }
    if (refs.timSeconds.textContent === "00") {
      console.log("00");
      seconds = 59;
      minutes -= 1;
    }
    seconds -= 1;
    refs.timSeconds.textContent = pad(seconds);
    refs.timMinutes.textContent = pad(minutes);
  }, 1000);
}
function pad(value) {
  return String(value).padStart(2, 0);
}
function onCloseBackdrop() {
  totalRightReply = 0;
  totalAmissReply = 0;
  refs.totalResult.classList.toggle("hidden");
  refs.btnStart.disabled = false;
  refs.number1.textContent = renderNumberOno();
  refs.number2.textContent = renderNumberDuo();
  refs.rightReply.textContent = 0;
  refs.amissReply.textContent = 0;
  refs.form.reset();
  refs.btn.disabled = false;
}

// function onTotalResult() {}

function onSubmitForm(e) {
  e.preventDefault();

  // console.dir(e.target.elements.number.value);
  const number1 = +refs.number1.textContent;
  const number2 = +refs.number2.textContent;
  if (number1 + number2 === +e.target.elements.number.value) {
    console.log("правильний ответ");
    refs.number1.textContent = renderNumberOno();
    refs.number2.textContent = renderNumberDuo();
    totalRightReply += 1;
    console.log(totalRightReply);
    refs.rightReply.textContent = totalRightReply;
    refs.correct.textContent = totalRightReply;

    refs.form.reset();
  } else {
    console.log("не правильний ответ");
    refs.number1.textContent = renderNumberOno();
    refs.number2.textContent = renderNumberDuo();
    totalAmissReply += 1;
    refs.amissReply.textContent = totalAmissReply;
    refs.onErrors.textContent = totalAmissReply;
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
