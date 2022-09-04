'use strict';
// const CounterPlugin = function ({
//   rootSelector,
//   initialValue = 0,
//   step = 1,
// } = {}) {
//   this._value = initialValue;
//   this._step = step;
//   this._refs = this._getRefs(rootSelector);
//   this._bindEvents();
//   this.upDateValueUP();
// };
// CounterPlugin.prototype._getRefs = function (rootSelector) {
//   const refs = {};
//   refs.container = document.querySelector(rootSelector);
//   refs.incrementBtn = refs.container.querySelector('[data-increment]');
//   refs.decrementBtn = refs.container.querySelector('[data-decrement]');
//   refs.value = refs.container.querySelector('[data-value]');
//   return refs;
// };
// CounterPlugin.prototype._bindEvents = function () {
//   this._refs.incrementBtn.addEventListener('click', () => {
//     console.log(' this._refs.incrementBtn.addEventListener ->', this);
//     this.increment();
//     this.upDateValueUP();
//   });
//   this._refs.decrementBtn.addEventListener('click', () => {
//     console.log(' this._refs.incrementBtn.addEventListener ->', this);
//     this.decrement();
//     this.upDateValueUP();
//   });
// };
// CounterPlugin.prototype.upDateValueUP = function () {
//   this._refs.value.textContent = this._value;
// };

// CounterPlugin.prototype.increment = function () {
//   this._value += this._step;
// };
// CounterPlugin.prototype.decrement = function () {
//   this._value -= this._step;
// };
// new CounterPlugin({ rootSelector: '#counter1', step: 1, initialValue: 0 });
// new CounterPlugin({ rootSelector: '#counter2', step: 2, initialValue: 0 });
// new CounterPlugin({ rootSelector: '#counter3', step: 5, initialValue: 0 });
// function even_or_odd(number) {
//   n = number / 8;
//   return n.toFixed(2);
// }

// console.log(even_or_odd(2.0));

//1. Напишите две функции
// letMeSeeYourName(callback) - спрашивает имя пользователя
//через prompt и вызывает callback функцию
//greet(name) - коллбек принимающий имя и логирующий в консоль
//строку "Привет <name>"
//Реализуй проверку, что prompt не пустой

// function letMeSeeYourName(greet) {
//   //   const name = prompt('Напишите имя');
//   if (!name) return;
//   callback(name);
// }
// const greet = name => {
//   console.log(`Привет, ${name}`);
// };
// greet();
// letMeSeeYourName(greet);

// function findSmallestInt(args) {
//   const ascendingScores = [...args].sort((a, b) => a - b);

//   return ascendingScores[0];
// }

// console.log(findSmallestInt([78, 56, 232, 12, 8])); //8
// console.log(findSmallestInt([78, 56, 232, 12, 8, 1])); //8
// console.log(findSmallestInt([78, 56, 232, 12, 8, 3])); //8
// console.log(findSmallestInt([78, 56, 232, 12, 8, 6])); //8

// function longest(s1, s2) {
//   const b = Array.from(s1 + s2)
//     .filter((x, i, z) => z.indexOf(x) === i)
//     .join('');

//   return b;
// }

// console.log(longest('aretheyhere', 'yestheyarehere'));

// aehrsty;
// function basicOp(operation, value1, value2) {
//   if (operation === '-') {
//     return value1 - value2;
//   } else if (operation === '+') {
//     return value1 + value2;
//   } else if (operation === '/') {
//     return value1 / value2;
//   } else {
//     return value1 * value2;
//   }
// }

// console.log(basicOp('+', 4, 7));
// function boolToWord(bool) {
//   return bool === true ? 'Yes' : 'No';
// }

// console.log(boolToWord(true)); // 'Yes');
// console.log(boolToWord(false)); //, 'No');
// const a = 1;
// console.log(Number.isNaN(1));

// function filter_list(l) {
//   return l.filter(a => typeof a === 'number');
// }
// console.log(filter_list([1, 2, 'a', 'b']));
// let a;
// console.log(typeof a);

// const b = null;
// console.log(typeof b);
// const number = 17;
// console.log(typeof number);
// const messang = 'string';
// console.log(typeof messang);
// const isSidebarOpen = false;
// console.log(typeof isSidebarOpen);

// console.log(1 == false);
// console.log(NaN);

// const name = prompt('Введите, пожалуйста, имя');
// if (name === 'andrii') {
//   document.querySelector(
//     '#welcome',
//   ).innerHTML = `${name},ми очень ради Вашему возврашению!`;
// } else if (name) {
//   document.querySelector(
//     '#welcome',
//   ).innerHTML = `${name}, добро пожаловать на сайт!`;
// } else {
//   document.querySelector('#welcome').innerHTML = 'Гость, добро пожаловать!';
// }
//' ' - пустая строка = 0 или false
// false
// 0
// undefined
// null

// let valueA = '5';
// console.log(String(valueA)); // 5
// console.log(typeof Number(valueA)); // "number"
// const number = Number(valueA);
// console.log(Number.parseFloat(valueA));
// console.log(!isNaN(number));
// console.log(number);
// console.log((0.2 * 100 + 0.2 * 100) / 100);
// let n = (7, 2, 4, 3);

// console.log(Math.max(7, 2, 4, 3));
// console.log(Math.min(20, 10, 50, 40));

// console.log(Math.pow(10, 20));
// console.log((Math.random() * (10 - 1) + 1).toFixed(0));
// const randomNumber = (Math.random() * (10 - 1) + 1).toFixed(0);
// console.log(randomNumber);

// console.log(1 || '1' || true || false); // true
// console.log(true & 1 & 1 & true);
// let z;
// const numb = 'ono';
// function fnA(a, b, c) {
//   switch (numb) {
//     case a:
//       z = 1;
//       break;
//     case b:
//       z = 10;
//       break;
//     case c:
//       z = 2000;
//       break;
//     default:
//       console.log('Ничего не найдено');
//   }
// }
// fnA('duo', 'free', 'ono');
// console.log(z);

// let number1 = 10;
// const number2 = 25;

// while (number1 < number2) {
//   number1 += 1;
//   console.log(number1);
// }

// const name2 = 'Mango';

// let abc = name2.split('');
// abc = abc.join('');
// console.log(abc);
// const message = 'JavaScript это интересно';
// const a1 = message.split('');
// console.log(a1);
// const mass = [];
// for (let i = 0; i <= a1.length - 1; i += 1) {
//   console.log(a1[i]);
//   if (a1[i] !== ' ') {
//     mass.push(a1[i]);
//   }
// }
// console.log(mass);
// console.log(mass.join(''));
// console.log(mass.indexOf('н'));
// console.log(mass.includes('S'));
// function fn(...args) {
//   // В переменной args будет полноценный массив

//   console.log(args);
// }
// console.log(fn(1, 2, 3, 4, 5, 6));

// function fnA(amount, balance) {
//   let suma = 0;
//   if (amount === 0) {
//     return `Вы ввели сумму ${amount} грн. Нужно ввести сумму больше 0 грн. `;
//   } else if (amount > balance) {
//     suma = amount - balance;
//     return `У Вас не достаточно средств. Сейчас на счету ${balance} грн. Нужно пополнить счет на ${suma} грн.`;
//   } else {
//     suma = balance - amount;
//     return `Операция проведена успешно. Остаток на карточке ${suma} грн.`;
//   }
// }
// console.log(fnA(0, 100));
// console.log(fnA(200, 100));
// console.log(fnA(300, 500));
// console.log(fnA(10000, 9000));
// function makeProduct(name, price, callback) {
//   const item = {
//     name,
//     price,
//   };
//   this.item.id = 0;

//   showProduct(item);
// }

// function showProduct(product) {
//   console.log(product);
// }

// makeProduct('apple', 50, showProduct);
// makeProduct('tomato', 30, showProduct);

// function each(array, callback) {
//   newArr = [];
//   calc(array);
// }

// function calc(numbers) {
//   numbers.forEach(number => newArr.push(number * 2));
//   console.log(newArr);
// }
// each([5, 2, 7, 4, 3], calc);
// each([5, 2, 7, 4, 3], calc);
// each([3, 6, 10], calc);
// each([33, 44, 1, 7], calc);

//7. Напишите функцию makeCounter, которая возвращает другую
//функцию, которая считает и логирует количество своих вызовов
// function makeCounter() {
//   let total = 0;

//   return function () {
//     return total++;
//   };
// }
// console.log(makeCounter());
// console.log(makeCounter());
// console.log(makeCounter());

// function makeCounter() {
//   let currentCount = 1;

//   return function () {
//     return currentCount++;
//   };
// }

// let counter = makeCounter(); // (*)

// function getGrade(s1, s2, s3) {
//   let sum = 0;
//   sum = (s1 + s2 + s3) / 3;
//   if (90 <= sum && sum <= 100) {
//     return 'A';
//   } else if (80 <= sum && sum <= 90) {
//     return 'B';
//   } else if (70 <= sum && sum <= 80) {
//     return 'C';
//   } else if (60 <= sum && sum <= 70) {
//     return 'D';
//   } else if (0 <= sum && sum <= 60) {
//     return 'F';
//   }
// }
// console.log(getGrade(50, 100, 90));
// console.log(getGrade(50, 60, 90));
// console.log(getGrade(50, 50, 50));
// console.log(getGrade(50, 70, 90));
//90 <= оценка <= 100	«А»
//80 <= оценка < 90	'Б'
//70 <= оценка < 80	'С'
//60 <= оценка < 70	'Д'
//0 <= оценка < 60	'Ф'

// function foo() {
//   console.log(this);
// }
// const getFoo = () => {
//   console.log(this);
// };

// const obj = {
//   name: 'Denis',
//   foo: foo,
//   info: {
//     work: 'GoIt',
//     getInfo() {
//       console.log(this);
//     },
//   },
//   getFoo,
//   changeArrowFunc() {
//     // console.log(this);
//     // const arrowFunc = () => {
//     //   console.log(this);
//     // };
//     // arrowFunc();
//     // getFoo(); //=> window стрелочная функция
//     [1, 2, 3].map(() => {
//       console.log(this);
//     });
//   },
// };

// // getFoo(); //=> window стрелочная функция
// // obj.getFoo(); //=> window стрелочная функция
// obj.changeArrowFunc(); //=> obj
// arrowFunc();

// foo(); //=> window, undefined
// obj.foo(); //=> obj
// obj.info.getInfo(); //=> info
// (() => {
//   console.log('anonimes');
// })();

// const product = {
//   price: 1000,
//   discount: '35%',
//   getPrice() {
//     return this.price;
//   },
//   getPriceWidchDiscount() {
//     const discount = parseInt(this.discount);
//     const price = this.price - this.price * (discount / 100);
//     return price;
//   },
// };

// console.log(product.getPrice());
// console.log(product.getPriceWidchDiscount());

const cals = {
  value: 1,
  getValue() {
    return this.value;
  },
  reset() {
    this.value = 0;
    return this;
  },
  setValue(num = 0) {
    this.value = num;
    return this;
  },
  plus(num) {
    this.value += num;
    return this;
  },
  minus(num) {
    this.value -= num;
    return this;
  },
  multiply(num) {
    this.value *= num;
    return this;
  },
  divide(num) {
    if (this.value === 0) return 0;
    this.value /= num;
    return this;
  },
};

// console.log(cals.getValue());
// cals.reset();
// cals.setValue(10);
// cals.plus(10);
// cals.minus(5);
// cals.multiply(3);
// cals.divide(4);
const res = cals
  .reset()
  .setValue(10)
  .plus(100)
  .minus(50)
  .multiply(5)
  .divide(7)
  .getValue();
// console.log('value:', res.toFixed(3));

const sizer = { width: 5, height: 10 };
function getSquare() {
  return this.width * this.height;
}
function getWidchAndHeight(width, height) {
  this.width = width;
  this.height = height;
}
// console.log(getWidchAndHeight(10, 30));
// getWidchAndHeight.call(sizer, 20, 40);
// getWidchAndHeight.apply(sizer, [30, 50]);
// console.log(getSquare());
const square = getSquare.call(sizer);
// console.log(square);
// console.log(sizer);
// function greetGuest(greeting) {
//   console.log(`${greeting} ${this.username}!`);
// }

// const mango = {
//   username: 'Манго',
// };
// const poly = {
//   username: 'Поли',
// };

// greetGuest.call(mango, 'Добро пожаловать'); // Добро пожаловать, Манго.
// greetGuest.call(poly, 'Да пошла ти....'); // С приездом, Поли.
// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: 'Манго',
// };
// const poly = {
//   username: 'Поли',
// };

// greetGuest.apply(mango, ['Добро пожаловать']); // Добро пожаловать, Манго.
// greetGuest.apply(poly, ['С приездом']); // С приездом, Поли.
// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = 'Манго';

// console.log(dog);
// console.log(animal.isPrototypeOf(dog));

// const binaryArrayToNumber = arr => {
//   return parseInt(arr.join(''), 2);
// };

// // function binaryArrayToNumber(arr) {
// //   return arr.reduce((a, b) => (a << 1) | b);
// // }
// console.log(binaryArrayToNumber([0, 0, 0, 1]));
// console.log(binaryArrayToNumber([0, 0, 1, 0]));
// console.log(binaryArrayToNumber([1, 0, 0, 1]));
// console.log(binaryArrayToNumber([1, 1, 1, 1]));
// console.log(binaryArrayToNumber([0, 1, 1, 0]));
// console.log(binaryArrayToNumber([1, 0, 1, 1]));
// Примеры: Testing: [0, 0, 0, 1]; // ==> 1
// Testing: [0, 0, 1, 0]; // ==> 2
// Testing: [0, 1, 0, 1]; // ==> 5
// Testing: [1, 0, 0, 1]; // ==> 9
// Testing: [0, 0, 1, 0]; // ==> 2
// Testing: [0, 1, 1, 0]; // ==> 6
// Testing: [1, 1, 1, 1]; // ==> 15
// Testing: [1, 0, 1, 1]; // ==> 11

// function descendingOrder(n) {
//   return Number([...String(n).split('')].sort((a, b) => b - a).join(''));
// }

// console.log(descendingOrder(123456789));
// let id = 0;

// function getTest(mas) {
//   id += 1;
//   const rez = mas.map(a => a + 10);
//   return `ID: ${id} и результат работи функции ${rez}`;
// }
// console.log(getTest([1, 2, 3, 4, 5, 6]));
// console.log(getTest([2, 3, 4, 5, 6]));
// console.log(getTest([3, 4, 5, 6]));
// console.log(getTest([4, 5, 6]));
// console.log(getTest([5, 6]));
// console.log(getTest([2, 3, 4, 5, 6]));
