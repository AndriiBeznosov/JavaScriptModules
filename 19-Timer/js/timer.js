console.log('TIMER');

const refs = {
  days: document.querySelector('.days'),
  hours: document.querySelector('.hours'),
  minutes: document.querySelector('.minutes'),
  seconds: document.querySelector('.seconds'),
  btnStart: document.querySelector('.js-btn-start'),
  btnStop: document.querySelector('.js-btn-stop'),
  btnReset: document.querySelector('.js-btn-reset'),
};

refs.btnStop.disabled = true;
refs.btnReset.disabled = true;

class Timer {
  constructor({ onTick }) {
    this.isActiv = false;
    this.intervalId = null;
    this.onTick = onTick;
  }
  start() {
    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;
    if (this.isActiv) {
      return;
    }

    const startTime = Date.now();
    this.isActiv = true;

    this.intervalId = setInterval(() => {
      const curentTime = Date.now();
      const deltaTime = curentTime - startTime;
      const time = this.getTimeComponents(deltaTime);
      this.onTick(time);
    }, 1000);
  }
  stop() {
    refs.btnStart.disabled = false;
    refs.btnStop.disabled = true;
    refs.btnReset.disabled = false;
    clearInterval(this.intervalId);
    if (!this.isActiv) {
      return;
    }
    this.isActiv = false;
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }
  pad(value) {
    return String(value).padStart(2, 0);
  }
}

const timer = new Timer({
  onTick: updateClockface,
});

refs.btnStart.addEventListener('click', timer.start.bind(timer));
// refs.btnStart.addEventListener('click', () => {
//   timer.start();
// });
refs.btnStop.addEventListener('click', timer.stop.bind(timer));
// refs.btnStop.addEventListener('click', () => {
//   timer.stop();
// });
refs.btnReset.addEventListener('click', resetTimer);

function updateClockface(time) {
  refs.days.textContent = `${time.days}`;
  refs.hours.textContent = `${time.hours}`;
  refs.minutes.textContent = `${time.mins}`;
  refs.seconds.textContent = `${time.secs}`;
}

function resetTimer() {
  refs.btnReset.disabled = true;
  refs.days.textContent = '00';
  refs.hours.textContent = '00';
  refs.minutes.textContent = '00';
  refs.seconds.textContent = '00';
}
