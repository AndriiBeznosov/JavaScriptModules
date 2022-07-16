/**
 * Example 5 - Комплексные задачи
 * Напиши скрипт управления личным кабинетом интернет банка.
 * Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
 */
/////////////////////////////////
/*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {
//     return {
//       id: this.transactions.length + 1,
//       amount,
//       type,
//     };

//     // return {
//     //   id: this.transactions.length + 1,
//     //   amount,
//     //   type,
//     // };
//   },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {
//     const transition = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(transition);
//     this.balance += amount;
//     // const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     // this.transactions.push(transaction);
//     // this.balance += amount;
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     if (amount > this.balance) return 'недостаточно средств';

//     // const transaction = this.createTransaction(amount, Transaction.WITHDRAW);

//     // this.transactions.push(transaction);
//     // this.balance -= amount;
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     // return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     // let tr = null;
//     // for (let transaction of this.transactions) {
//     //   if (transaction.id === id) {
//     //     tr = { ...transaction };
//     //     break;
//     //   }
//     // }
//     // return tr;
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     // let sum = 0;
//     // for (let transaction of this.transactions) {
//     //   if (transaction.type === type) {
//     //     sum += transaction.amount;
//     //   }
//     // }
//     // return sum;
//   },
// };
///////////////////////////////
// createTransaction(1000, 'deposit');
// deposit(5000);
//Создайте массив styles с элементами «Джаз» и «Блюз».
//Добавьте «Рок-н-ролл» в конец.
//Замените значение «Блюз» на «Классика».
//Удалите первый элемент массива и выведите его в консоль.
//Вставьте «Рэп» и «Регги» в начало массива.

// const styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// console.log(styles);
// styles[1] = 'Классика';
// console.log(styles);
// console.log(styles.shift());
// styles.unshift('Рэп', 'Регги');
// console.log(styles);

//Напишите функцию caculculateAverage()
//которая принимает произвольное количество
//аргументов и возвращает их среднее значение.
//Добавить проверку, что аргументы это числа.

// function caculculateAverage(...arrgs) {
//   let total = 0;
//   let sum = arrgs.length;
//   for (let i = 0; i < arrgs.length; i += 1) {
//     if (isNaN(arrgs[i])) {
//       sum -= 1;
//       continue;
//     }
//     total += arrgs[i];
//   }
//   return total / sum;
// }
// console.log(caculculateAverage(1, 2, 3, 5, 'nan', 'sdlgns'));

//Напишите функцию findTheColor()
//которая принимает название цвета
//определяет его наличие в массиве
//если цвет есть, усталавливет его как фон документа
//если цвета нет выводит console.error('Такой цвет не найден');
//и устанавливает цвет документа красный
// document.body.style.background = 'red';
//const colors = ['blue', 'yellow', 'olive', 'fuchsia', 'lime', 'aqua', 'maroon']

//Напишите скрипт который заменяет регистр каждого символа
//в стороке на противоположный
//Например 'JavaScript' должен вернуть 'jAVAsCRIPT'

//Напиши скрипт, который для объекта user,
//последовательно:
//1 добавит поле mood со значением 'happy'
//2 заменит hobby на 'skydiving'
//3 заменит значение premium на false
//4 выводит содержимое объекта users в фортмате
//ключ:значение используя Object.keys() и for...of
// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

//Создайте объект calculator с тремя методами
//read(a, b) - принимает два аргумента и сохраняет их
//как свойства объекта
//sum() возвращает сумму сохраненных значений
//mult() перемножает сохраненные значения и возвращает результат

///////////////////////////////////////

// Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.

// Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.

// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только они есть в массиве первого аргумента.

// function findMatches(mas, ...args) {
//   const matches = [];
//   //   console.log('mas:', mas);
//   //   console.log('a:', args);
//   for (let arg of args) {
//     // console.log('arg:', arg);
//     if (mas.includes(arg)) matches.push(arg);
//   }

//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)); // возвращает [1, 2]
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); // возвращает [17, 89, 2]
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)); // возвращает [24, 9, 41]
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16)); // возвращает []

// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books. Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     const ind = this.books.indexOf(oldName);
//     this.books.splice(ind, 1, newName);
//     return this.books;
//   },
// };

// console.log(bookShelf.updateBook('Haze', 'Dungeon chronicles')); // значение свойства books это массив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

// console.log(bookShelf.updateBook('The last kingdom', 'Dune')); // значение свойства books это массив ["Dune", "Haze", "The guardian of dreams"]

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     for (let potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//     return this.potions;
//   },
//   ////////////////////////////////
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {

//       if (this.potions[i].name === potionName) {
//         return this.potions.splice(i, 1);
//       }
//     }

//     return `Potion ${potionName} is not in inventory!`;
//   },
//   ///////////////////////////////////////////
//   //   updatePotionName(oldName, newName) {
//   //     const potionIndex = this.potions.indexOf(oldName);

//   //     if (potionIndex === -1) {
//   //       return `Potion ${oldName} is not in inventory!`;
//   //     }

//   //     this.potions.splice(potionIndex, 1, newName);
//   //   },
// };

// // console.log(atTheOldToad.getPotions());
// // console.log(atTheOldToad.addPotion(newPotion));
// console.log(atTheOldToad.potions);
// console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));
// console.log(atTheOldToad.removePotion('Dragon breath'));
// console.log(split());
// const hotel = {
//   rang: 5,
//   online: 10,
//   folover: 'Andrii',
// };
// rang.raffff = 5;
// console.log(hotel.rang);

// const arrey = (a, b, c) => {
//   const x = a + b / c;
//   return x.toFixid(3);
// };
// console.log(arrey(20, 6, 7));

// const numbers = [5, 10, 15, 90, 25];

// Объявление функции
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });
// numbers.forEach((number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// const logMessage = (number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// };
// numbers.forEach(logMessage);
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];

// const names = students.map(student => student.name);

// console.log(names); // ['Манго', 'Поли', 'Аякс', 'Киви', 'Хьюстон']
/////////////////////////////////////////
// const validNumber = Number('51'); // 51
// console.log(isNaN(validNumber)); // false

// const invalidNumber = Number('qweqwe'); // NaN
// console.log(isNaN(invalidNumber)); // true
/////////////////////////////////////////

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName) === true) {
//       return onSuccess(pizzaName);
//     }
//     return onError(pizzaName);

//     // return this.pizzas.includes(pizzaName) ? onSuccess() : onError();
//   },
// };

// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }
// // makePizza();
// function onOrderError(error) {
//   return `Error! There is no pizza with a name ${error} in the assortment. `;
// }
// // onOrderError();
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));
// // console.log(pizzaPalace);
// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
// // Change code below this line
// const planetsLengths = planets.map((a, b, c) => b);
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(planetsLengths);
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(a => a % 2 === 0);
// const oddNumbers = numbers.filter(a => a % 2 !== 0);
// console.log(evenNumbers);
// console.log(oddNumbers);

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction', 'mysticism'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism', 'adventure'],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(a => a.genres);
// const uniqueGenres = allGenres.filter((a, b, c) => c.indexOf(a) === b);
// console.log(allGenres);
// const a = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];

// // const getFriends = users => {
// //   return users
// //     .flatMap(a => a.friends)
// //     .filter((course, index, array) => {
// //       return array.indexOf(course) === index;
// //     });
// // };
// const getActiveUsers = users => {
//   return users.filter(a => a.name && a.isActive === true).map(b => b.name);
// };
// // console.log(uniq);

// console.log(getActiveUsers(a));
// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((a, b) => {
//   return a + b.playtime / b.gamesPlayed;
// }, 0);
// console.log(totalAveragePlaytimePerGame);
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
//   .filter(a => a.rating > MIN_BOOK_RATING)
//   .map(a => a.title)
//   .sort((a, b) => a.localeCompare(b));

// // .sort((a, b) => a.title.localeCompare(b.title));
// console.log(names);
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: 0,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: [
//       'Jacklyn Lucas',
//       'Linda Chapman',
//       'Adrian Cross',
//       'Solomon Fokes',
//     ],
//     isActive: true,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Aheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// const mas = users => {
//   return [...users]
//     .sort((a, b) => a.name.localeCompare(b.name))
//     .filter(a => a.isActive === true || a.isActive === 0)
//     .map(a => a.name);
// };
// console.table(users);
// console.table(mas(users));

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score,
// );
// console.log(inAscendingScoreOrder);
// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score,
// );

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name),
// );
const mas = [
  1,
  2,
  3,
  4,
  ['A', 'B'],
  [12, 13, 14, ['a', 'b', ['asd']]],
  ['andrii'],
];
console.log(mas.flat(1));
console.log(mas.flat(2));
console.log(mas.flat(3));
console.log(mas.flatMap(a => a));
