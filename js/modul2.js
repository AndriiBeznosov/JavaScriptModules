// const age = 10;
// const totalPrice = 207;
// const userName = 'Andrii';
// const massanger = 'Hellow!!!';
// const isOpen = true;
// const shouldConfirm = false;

// let type;
// const age = 20;

// if (age >= 18) {
//   type = 'adult';
// } else {
//   type = 'child';
// }

// console.log(type);

// let type;
// const age = 10;
// if (age >= 18) {
//   type = 'about';
// } else {
//   type = 'child';
// }
// const age = 17;
// const type = age >= 18 ? 'about' : 'child';

// console.log(type);

// const num1 = 50;
// const num2 = 10;
// let biggerNumber;

// if (num1 < num2) {
//   biggerNumber = num1;
// } else {
//   biggerNumber = num2;
// }
// const biggerNumber = num1 > num2 ? num1 : num2;
// console.log(biggerNumber);

// let cost = 999;
// const subscription = 'free';

// // if (subscription === 'pro') {
// //   cost = 100;
// // }

// if (subscription === 'freeq') {
//   cost = 500;
// }

// console.log(cost);

// let cost;
// const biggerNumber = 'free';

// if (biggerNumber !== 'fre') {
//   cost = 1000;
// } else {
//   cost = 25;
// }
// console.log(cost);

// let cost;
// const su = typeof 5;
// const sub = typeof '5';
// const subs = typeof false;
// const subsc = typeof 'premium';

// switch (subscription) {
//   case 'free':
//     cost = 0;
//     break;

//   case 'pro':
//     cost = 100;
//     break;

//   case 'premium':
//     cost = 500;
//     break;

//   default:
//     console.log('Invalid subscription type');
// }
// switch (subscription) {
//   case 'free':
//     cost = 9000;
//     break;

//   case 'premiu':
//     cost = 25000;
//     break;
//   case 'premium':
//     cost = 'Все пошло по пизде!';
//     break;
//   default:
//     console.log('Все пошло по пизде!');
// }

// console.log(su); // 500
// console.log(sub);
// alert('Ghbdn');
// console.log(subs);
// console.log(subsc);
// let fix = true;
// const fixin = confirm('Хотите продолжить ?');

// console.log(fixin);

// let prom = prompt('Введите число');
// prom = Number(prom);

// console.log(prom);
// console.log(typeof prom);
// const colors = ['tomato', 'silver', 'red', 'black', 'bly', 'green'];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);

// const color = colors[index];

// console.log(color);

// document.body.style.backgrounColor = color;
// const adg = 'Привет мир, как дела?dgddfef';
// console.log(adg.length);
// const and = 'Андрей';
// const bez = 'Безносов';
// const zp = 2500;
// // const fi = and + ' ' + bez;
// // console.log(fi);
// const fin = `Имя ${and} фамилия ${bez} получает в єтом месяце зарплату ${zp} долларов.`;
// console.log(fin);

// const x1 = 30;
// const x2 = 60;
// const number = 50;

// console.log(`Число ${number} попадает в отрезок до ${x1}`, x1 < number);
// console.log(`Число ${number} попадает в отрезок после ${x2} `, x2 > number);

// const rec = number > x1 && number < x2;

// console.log(rec);
// console.log(typeof rec);
// const chat = 'Можно открить Чат?';
// const isOpen = true;
// const isFreind = true;
// const isDnd = false;

// const canOpenChat = isOpen && isFreind && !isDnd;

// console.log(chat, canOpenChat);

// const salary = 2000;
// if (salary <= 500) {
//   console.log('Уровень 1');
// } else if (salary > 501 && salary < 1500) {
//   console.log('Уровень 2');
// } else if (salary > 1501 && salary < 3000) {
//   console.log('Уровень 3');
// } else {
//   console.log('Уровень 4');
// }
// 1.Сделать переменние
// const option = 2;
// let massange = '';
// // 2.Сделать switch 1 2 3
// // 3. в каждои кейсе записать massange в строку
// switch (option) {
//   case 1:
//     massange = 'Ви сможете забрать товар завтра с 12:00 у нас в офисе';
//     break;
//   case 2:
//     massange = 'Курьер доставит завтра с 9:00 до 17:00';
//     break;
//   case 3:
//     massange = 'Посилка будет доставлена сегодня';
//     break;
//   default:
//     massange = 'Вам перезвонит менеджер';
// }
// // 4.сделать лог massange
// console.log(massange);

// for (let i = 100; i >= 0; i -= 10) {
//   console.log(i);
// }
// console.log('Результат');

// for (let i = 0; i <= 100; i += 10) {
//   console.log(i);
// }
// console.log('Результат');

// for (let i = 200; i >= 0; i -= 20) {
//   console.log(i);
// }
// console.log('Результат');

// for (let i = 1000; i >= 100; i -= 50) {
//   console.log(i);
// }
// console.log('Результат');

// for (let i = 50000; i >= 500; i -= 500) {
//   console.log(i);
// }

// let counter = 0;

// while (counter <= 10) {
//   console.log('counter: ', counter);
//   counter += 1;
// }
// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter <= maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// // let password = '';

// // do {
// //   password = prompt('Введите пароль длиннее 4-х символов', '');
// // } while (password.length < 5);

// // console.log('Ввели пароль: ', password);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }
// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log('Нашли число 3, прерываем выполнение цикла');
//     break;
//   }
// }

// console.log('Лог после цикла');

// const number = 10;

// for (let i = 0; i <= number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
// }
// const numbe = 25;
// for (let i = 2; i <= numbe; i += 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log('Четное i: ', i);
// }

// const minSolary = 500;
// const maxSolary = 5000;
// const employees = 20;
// let totalSolary = 0;

// for (let i = 1; i <= employees; i += 1) {
//   const salary = Math.round(
//     Math.random() * (maxSolary - minSolary) + minSolary,
//   );
//   console.log(`ЗП работника ${i} - ${salary}`);

//   totalSolary += salary;
// }
// console.log('Общий результат:', totalSolary);

// const isComing = confirm('Please confirm hotel reservation');
// console.log(isComing);

// // 1.вари
// const min = 2;
// const max = 6;
// let total = 0;
// // 2. форм от мин до макс с шагом 1
// for (let i = min; i <= max; i += 1) {
//   // console.log(i);

//   if (i % 2 !== 0) {
//     // проверям остаток от деления
//     console.log('не четное', i);
//     continue;
//   }
//   // пишем сумму
//   console.log('четное', i);
//   total += i;
// }

// console.log('total', total);
// let balans = 200;
// const payment = 2000;
// let total;
// console.log(`Проверяет стоимость заказа ${payment}`);
// console.log(`Проверяет количество доступних кредитов на счету ${balans}.`);
// if (payment <= balans) {
//   balans -= payment;
//   //  balans = balans - payment;
//   console.log('Кредитов достаточно...Спасибо за покупку!!!');
//   console.log(`Остаток на счету ${balans} кредитов.`);
// } else {
//   total = payment - balans;
//   console.log(`На счету ${balans} кредитов.`);
//   console.log('Кредитов не достаточно');
//   console.log(`Не хватает кредитов ${total}`);
// }

// console.log('Операция завершена.');

// let totalSpen = 11000;
// let payment = 500;
// let discont = 0;

// if (totalSpen <= 100) {
//   console.log(
//     `К сожалению Вашей суммы покупки не хватает для получения скидки`,
//   );
// } else if (totalSpen >= 100 && totalSpen < 1000) {
//   console.log(`бронзовая скидка 2%`);
//   discont = 0.02;
// } else if (totalSpen >= 1000 && totalSpen < 5000) {
//   console.log(`Серебряний партнер, скидка 5%`);
//   discont = 0.05;
// } else {
//   console.log(`Золотой партнер, скидка 10%`);
//   discont = 0.1;
// }
// payment = payment - payment * discont;
// console.log(`Оформлен заказ на сумму ${payment} со скидкой ${discont * 100}%`);

// totalSpen += payment;

// console.log(`Общая сумма потраченых средств: ${totalSpen}`);
// const btnAdd = document.querySelector('button[data-add]');
// const btnReset = document.querySelector('[data-reset]');
// const valueInput = document.querySelector('input[data-value]');
// const ouputEl = document.querySelector('[data-ouput] span');
// let total = 0;
// btnAdd.addEventListener('click', function () {
//   // console.log('JS');

//   const value = Number(valueInput.value);
//   // console.log(value);

//   total += value;
//   // console.log('total', total);
//   ouputEl.textContent = total;
//   valueInput.value = '';
// });
// btnReset.addEventListener('click', function () {
//   total = 0;
//   ouputEl.textContent = total;
// });

// console.dir(btnAdd.textContent);
// const x = 5;
// const y = 10;
// const z = 5;

// console.log('x > y:', x > y); // false
// console.log('x < y:', x < y); // true
// console.log('x < z:', x < z); // false
// console.log('x <= z:', x <= z); // true
// console.log('x === y:', x === y); // false
// console.log('x === z:', x === z); // true
// console.log('x !== y:', x !== y); // true
// console.log('x !== z:', x !== z); // false

// // console.log(Math.ceil(1.2));

// console.log(Math.round(Math.random() * (10 - 1) + 1));
// console.log('Wel'.length);

// let counter = 0;

// while (counter < 10) {
//   console.log('counter: ', counter);
//   counter += 1;
// }

// while (counter < 20) {
//   console.log('counter:', counter);
//   counter += 3;
// }
// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log('Результат:', clientCounter);
//   clientCounter += 1;
// }
// let con = 100;
// const max = 200;

// while (con < max) {
//   console.log('Результат:', con);
//   con += 10;
// }
// let password = '';

// do {
//   password = prompt('Введите пароль длиннее 4-х символов', '');
// } while (password.length < 5);

// console.log('Ввели пароль: ', password);

// let pas = '';
// do {
//   pas = prompt('sbkfgjnskhvnlkrvniskvn', '');
// } while (pas.length < 2);
// console.log('Ввели пароль:', pas);

// const aga = 3;
// let sum = 0;

// for (let i = 0; i <= aga; i += 1) {
//   sum += i;
// }
// console.log('Результат for:', sum);
// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 5) {
//     console.log('Нашли число 3, прерываем выполнение цикла');
//     break;
//   }
// }

// console.log('Лог после цикла');

// const numbe = 10;
// for (let i = 0; i <= numbe; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log('Результат i:', i);
// }

// const cli = ['Mango', 'Poly', 'Ajax', 'Sasha'];

// console.log(cli[0]);
// console.log(cli[1]);
// console.log(cli[2]);
// console.log(cli[3]);
// cli[1] = 'ngekrjg';
// console.log(cli);
// const clients = ['Mango', 'Poly', 'Ajax', 'Sasha'];

// // Указывая в скобках индекс элемента мы получаем его значение
// console.log(clients[0]); // Mango
// console.log(clients[1]); // Poly
// console.log(clients[2]); // Ajax
// console.log(clients[3]);
// const clients = ['Mango', 'Ajax', 'Poly', 'ksrj', 'cbshrg'];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }

// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }
// const aga =
//   'iterable — коллекция, которая имеет перечислимые элементы, например массив.';
// for (const agag of aga) {
//   console.log('Результат:', agag);
//   // console.log('Результат:', agag.length);
// }
// const clients = ['Mango', 'Poly', 'Ajax'];
// const client2 = 'Poly4';
// let massange;
// for (const client of clients) {
//   if (client === client2) {
//     massange = 'Клиент с таким именем есть в базе данных!';
//     break;
//   }
//   massange = 'Клиента с таким именем нету в базе данных!';
// }
// console.log(massange);
// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message = 'Клиента с таким именем нету в базе данных!';

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = 'Клиент с таким именем есть в базе данных!';
//     break;
//   }
//   // Если не совпадает, то на этой итерации ничего не делаем
// }

// console.log(message); // Клиент с таким именем есть в базе данных!

// let a = 5;
// // Присвоение по значению, в памяти будет создана еще
// // одна ячейка в которую будет скопировано значение 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// // Изменим значение a
// a = 10;
// console.log(a); // 10
// // Значение b не изменилось так как это отдельная копия
// console.log(b); // 5

// const aaa = 'Привет как дела?';
// console.log(aaa.split(' '));
// const aad = ['Привет', 'как', 'дела?'];
// console.log(aad.join(' '));

// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// const fruit = 'cherry';
// const fru = redFruits.includes(fruit);
// if (fru) {
//   console.log(`${fru} есть в наличии.`);
// }
// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4, 5]

// const colors = ['red', 'green', 'blue'];

// colors.splice(3, 0, 'yellow', 'pink');
// console.log(colors); // ["red", "yellow", "pink", "green", "blue"]

// function makeMessage(name, price) {
//   // Change code below this line
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// }

// makeMessage('Radar', 6150);
// makeMessage('Scanner', 3500);
// makeMessage('Reactor', 8000);
// makeMessage('Engine', 4070);
// console.log(makeMessage('Radar', 6150));
// console.log(makeMessage('Scanner', 3500));
// console.log(makeMessage('Reactor', 8000));
// console.log(makeMessage('Engine', 4070));

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;

//   // Change code above this line
//   return totalPrice;
// }
// calculateTotalPrice(5, 100);
// calculateTotalPrice(8, 60);
// calculateTotalPrice(3, 400);
// calculateTotalPrice(1, 3500);
// calculateTotalPrice(12, 70);

// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));
// console.log(calculateTotalPrice(1, 3500));
// console.log(calculateTotalPrice(12, 70));

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

//   // Change code above this line
//   return message;
// }
// makeOrderMessage(2, 100, 50);

// console.log(message(makeOrderMessage(2, 100, 50)));

// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;

//   // Change code above this line
//   return passed;
// }

// isAdult(20);
// isAdult(14);
// isAdult(8);
// isAdult(37);

// console.log(isAdult(37));
// console.log(isAdult(20));
// console.log(isAdult(14));
// console.log(isAdult(8));

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = password === SAVED_PASSWORD;

//   // Change code above this line
//   return isMatch;
// }
// isValidPassword('mangodab3st');
// isValidPassword('kiwirul3z');
// isValidPassword('jqueryismyjam');

// console.log(isValidPassword('mangodab3st'));
// console.log(isValidPassword('jqueryismyjam'));

// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     // Change this line
//     message = 'You are an adult';
//     console.log(message);
//   } else {
//     message = 'You are a minor';
//     console.log(message);
//   }

//   return message;
// }
// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   const totalPrice = pricePerDroid * orderedQuantity; // Change code below this line
//   if (totalPrice > customerCredits) {
//     message = 'Insufficient funds!';
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice
//     } credits left`;
//   }
//   // Change code above this line
//   return message;
// }
// makeTransaction(3000, 5, 23000);
// makeTransaction(1000, 3, 15000);
// makeTransaction(5000, 10, 8000);
// makeTransaction(2000, 8, 10000);
// makeTransaction(500, 10, 5000);
// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));
// console.log(makeTransaction(500, 10, 5000));

// function multiply(x, y, z) {
//   console.log('Код до return выполняется как обычно');

//   // Возвращаем результат выражения умножения
//   return x * y * z;

//   console.log('Этот лог никогда не выполнится, он стоит после return');
// }

// function count(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     // console.log(i);
//   }
// }

// count(1, 5); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(); // countFrom = 0, countTo = 10, step = 1

// console.log(count(1, 5));
// console.log(count(2));
// console.log(count());

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent => 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent => 20000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent => 5000) {
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }
//   // Change code above this line
//   return discount;
// }
// getDiscount(137000);
// getDiscount(46900);
// getDiscount(8250);
// getDiscount(1300);
// getDiscount(5000);
// getDiscount(20000);
// getDiscount(50000);

// console.log('Знижка:', getDiscount(137000));
// console.log('Знижка:', getDiscount(46900));
// console.log('Знижка:', getDiscount(8250));
// console.log('Знижка:', getDiscount(5000));
// console.log('Знижка:', getDiscount(20000));

// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }

// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// // и управление передаётся на следующую итерацию.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// function getSubstring(string, length) {
//   const substring = string.slice(string, length); // Change this line
//   console.log('Результат:', substring);
//   return substring;
// }

// getSubstring('Hello world', 3);
// getSubstring('Hello world', 6);
// getSubstring('Hello world', 8);
// getSubstring('Hello world', 11);
// getSubstring('Hello world', 0);
// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length > maxLength) {
//     result = message;
//   } else {
//   }
//   result = message + '...';
//   /// Change code above this line
//   console.log(result);
//   return result;
// }

// formatMessage('Curabitur ligula sapien', 16);
// formatMessage('Curabitur ligula sapien', 23);
// formatMessage('Vestibulum facilisis purus nec', 20);
// formatMessage('Vestibulum facilisis purus nec', 30);
// formatMessage('Nunc sed turpis a felis in nunc fringilla', 15);
// formatMessage('Nunc sed turpis a felis in nunc fringilla', 41);

// Функция formatMessage(message, maxLength) принимает строку (параметр message) и форматирует её, если длина превышает значение в параметре maxLength.

// Дополни код функции так, что если длина строки:

// не превышает maxLength, функция возвращает её в исходном виде.
// больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие "...", после чего возвращает укороченную версию

// const card = [12, 30, 25, 24, 35, 98, 56, 45, 34];
// let total = 0;
// // for (let i = 0; i < card.length; i += 1) {
// //   // console.table(card[i]);
// //   total += card[i];
// // }

// // for (const vara of card) {
// //   total += card[i];
// // }
// for (let i = 0; i < card.length; i += 1) {
//   card[i] = Math.round(card[i] * 1.1);

//   total += card[i];
// }

// console.log('Результат:', total);
// // 1. перебрать массив
// // 2. сделать переменную total до цикла
// // 3. каждій елемент приплюсовать к total
