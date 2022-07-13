// const number = 10;

// for (let i = 0; i <= number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
// }
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(i);
// }
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }

// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }
// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message;

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     // console.log(client); //--> покажен в консоль имя которое искали
//     message = 'Клиент с таким именем есть в базе данных!';
//     break;
//   }

//   message = 'Клиента с таким именем нету в базе данных!';
// }

// console.log(message);

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
// Выносим варианты в массив
// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// const fruit = 'cherry';
// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// } else {
//   console.log(`${fruit} not!`);
// }
// // const numbers = [1, 2, 3, 4, 5];

// // console.log(numbers.pop()); //  5
// // console.log(numbers); // [1, 2, 3, 4]

// // console.log(numbers.pop()); //  4
// // console.log(numbers); // [1, 2, 3]

// // console.log(numbers.pop()); //  3
// // console.log(numbers); // [1, 2]

// // console.log(numbers.pop()); //  2
// // console.log(numbers); // [1]

// // console.log(numbers.pop()); //  1
// // console.log(numbers); // []
// const numbers = [];

// // numbers.push(1);
// console.log(numbers.push(1)); // [1]

// // numbers.push(2);
// console.log(numbers.push(2)); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4, 5]
// const colors = ['red', 'green', 'blue'];

// colors.splice(1, 0, 'yellow', 'pink');
// console.log(colors); // ["red", "yellow", "pink", "green", "blue"]
// function count(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// }

// count(1, 5); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(); // countFrom = 0, countTo = 10, step = 1

// const clients = ['Mango', 'Ajax', 'Poly'];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }
// for (const client of clients) {
//   console.log(client);
// }

// const varr = ['Я'];
// varr.push('и');
// console.log(varr);

// varr.push('Ти');
// console.log(varr);

// varr.push('любим');
// console.log(varr);

// varr.push('друг');
// console.log(varr);
// varr.push('друга');
// console.log(varr);

// console.log(varr.join(' '));

// console.log(varr.indexOf('друг'));

// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return;
//   }
//   if (ordered > available) {
//     return;
//   }
//   return;

//   // Change code above this line
// }

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);

// function getExtremeElements(array) {
//   let element1 = array[0];
//   let element2 = array[array.length - 1];

//   console.log([element1, element2]);
// }

// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(['Earth', 'Mars', 'Venus']);
// getExtremeElements(['apple', 'peach', 'pear', 'banana']);

// Объявлена функция getExtremeElements(array)
// Вызов getExtremeElements([1, 2, 3, 4, 5]) возвращает [1, 5]
// Вызов getExtremeElements(["Earth", "Mars", "Venus"]) возвращает ["Earth", "Venus"]
// Вызов getExtremeElements(["apple", "peach", "pear", "banana"]) возвращает ["apple", "banana"]
// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   let total = message.split(' ').length * pricePerWord;

//   console.log(total);
//   // Change code above this line
// }

// function makeArray(firstArray, secondArray, maxLength) {
//   const makeAr = firstArray.concat(secondArray);

//   if (makeAr.length >= maxLength) {
//     console.log(makeAr.slice(0, maxLength));
//     return;
//   }

//   // console.log(makeAr);
// }

// function makeArray(firstArray, secondArray, maxLength) {
//   const makeAr = firstArray.concat(secondArray);

//   if (makeAr.length >= maxLength) {
//     console.log(makeAr.slice(0, maxLength));
//   } else {
//     console.log(makeAr);
//   }
// }

// makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3); // ["Mango", "Poly", "Ajax"]
// makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4); // ["Mango", "Poly", "Houston", "Ajax"]
// makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3); // ["Mango", "Ajax", "Chelsea"]
// makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2); // ["Earth", "Jupiter"]
// makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0); // []
// function calculateTotal(number) {
//   // Change code below this line
//   let total = 0;
//   for (let i = 0; i <= number; i += 1) {
//     total += i;
//   }
//   console.log(total);
//   // Change code above this line
// }
// calculateTotal(18);
// calculateTotal(24);
// function findLongestWord(string) {
//   //1 Робимо массив
//   //2 Змінна наймешого елементу масиву
//   let elements = string.split(' ');
//   let max = '';

//   for (let i = 0; i < elements.length; i += 1) {
//     if (elements[i].length > max.length) {
//       max = elements[i];
//     }
//   }
//   console.log(max);
// }

// //3 перебір массиву

// //4 пошук найбільшого масиву

// findLongestWord('The quick brown fox jumped over the lazy dog'); //возвращает jumped
// findLongestWord('Google do a roll'); //возвращает Google
// findLongestWord('May the force be with you'); //возвращает force
// findLongestWord(); //со случайной строкой возвращает правильное значение
// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//     console.log(i);
//     return numbers;
//   }
//   console.log(numbers);
//   return numbers;
// }

// // createArrayOfNumbers(min, max);
// createArrayOfNumbers(1, 3); //возвращает [1, 2, 3]
// createArrayOfNumbers(14, 17); //возвращает [14, 15, 16, 17]
// createArrayOfNumbers(29, 34); //возвращает [29, 30, 31, 32, 33, 34]
// createArrayOfNumbers(); //со случайными min и max возвращает правильный массив
// //В цикле for использовался метод push
// const filterArray = function (numbers, value) {
//   const number = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       number.push(numbers[i]);
//     }
//   }

//   return number;
// };
// const r1 = filterArray([1, 2, 3, 4, 5], 3); //возвращает [4, 5]
// const r2 = filterArray([1, 2, 3, 4, 5], 4); //возвращает [5]
// const r3 = filterArray([1, 2, 3, 4, 5], 5); //возвращает []
// const r4 = filterArray([12, 24, 8, 41, 76], 38); //возвращает [41, 76]
// const r5 = filterArray([12, 24, 8, 41, 76], 20); //возвращает [24, 41, 76]

// console.log(r1);
// console.log(r2);
// console.log(r3);
// console.log(r4);
// console.log(r5);
// const getCommonElements = function (array1, array2) {
//   let result = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       result.push(array1[i]);
//     }
//   }
//   return result;
// };
// const r1 = getCommonElements([1, 2, 3], [2, 4]); //возвращает [2]
// const r2 = getCommonElements([1, 2, 3], [2, 1, 17, 19]); //возвращает [1, 2]
// const r3 = getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]); //возвращает [12, 27, 3]
// const r4 = getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]); //возвращает [10, 30, 40]
// const r5 = getCommonElements([1, 2, 3], [10, 20, 30]); //возвращает []

// console.log(r1);
// console.log(r2);
// console.log(r3);
// console.log(r4);
// console.log(r5);

// const getEvenNumbers = function (start, end) {
//   let result = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       result.push(i);
//     }
//   }
//   return result;
// };
// const r1 = getEvenNumbers(2, 5); //возвращает [2, 4]
// const r2 = getEvenNumbers(3, 11); //возвращает [4, 6, 8, 10]
// const r3 = getEvenNumbers(6, 12); //возвращает [6, 8, 10, 12]
// const r4 = getEvenNumbers(8, 8); //возвращает [8]
// const r5 = getEvenNumbers(7, 7); //возвращает []
// const r6 = getEvenNumbers(); //со случайными start и end возвращает правильный массив
// console.log(r1);
// console.log(r2);
// console.log(r3);
// console.log(r4);
// console.log(r5);
// console.log(r6);
// const includes = function (array, value) {
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;
// };

// const r1 = includes([1, 2, 3, 4, 5], 3); //возвращает true
// const r2 = includes([1, 2, 3, 4, 5], 17); //возвращает false
// const r3 = includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter'); //возвращает true
// const r4 = includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus'); //возвращает false
// const r5 = includes(['apple', 'plum', 'pear', 'orange'], 'plum'); //возвращает true
// const r6 = includes(['apple', 'plum', 'pear', 'orange'], 'kiwi'); //возвращает false

// console.log(r1);
// console.log(r2);
// console.log(r3);
// console.log(r4);
// console.log(r5);
// console.log(r6);
// const inc = function (...args) {
//   console.log(args);
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// };

// console.log(inc(1, 2, 3, 4, 24, 35, 657, 68, 87));
// console.log(inc(2, 34, 56, 78, 1, 2, 3, 4, 5));
// console.log(inc('Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'));
// console.log(r1);
// console.log(r2);
// console.log(r3);
// const inc = function (...args) {
//   // console.log(args);
//   let total = 0;
//   for (const arg of args) {
//     if (arg % 2 === 0) {
//       console.log('Парное число:', arg);
//       total += arg;
//     }
//   }
//   return `total: ${total}`;
// };

// console.log(inc(13, 200, 33, 40, 24, 35, 657, 68, 87));
// console.log(inc(2, 34, 56, 78, 167, 62, 36, 49, 545));
// console.log(inc(14, 243, 33, 434, 24, 35, 657, 68, 87));
// console.log(inc(2, 34, 56, 78, 15, 24, 30, 400, 50));

// const inc = function (aray, ...args) {
//   // console.log(`Массив:`, args);
//   // console.log(`Массив:`, aray);
//   const element = [];
//   for (let ar of args) {
//     // console.log('Результат:', ar);
//     if (aray.includes(ar)) {
//       element.push(ar);
//       // console.log('Есть в массиве дубликат', ar);
//     }
//   }
//   return element;
// };

// console.log(
//   inc([13, 200, 35, 22, 200, 200, 40], 200, 200, 200, 200, 35, 657, 68, 87),
// );
// console.log(inc([2, 34, 56, 78, 167], 62, 34, 56, 545));
// console.log(inc([14, 243, 33], 434, 14, 33, 657, 68, 87));
// console.log(inc([2, 30, 56, 78, 15, 24], 30, 400, 56));

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,

//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// // apartment.location.country = 'Jamaica';
// apartment.location = 'Kingston';
// console.log(apartment);

// function digitize(n) {
//   // console.log(n);
//   let max = String(n).split('').reverse();
//   // console.log(max);
//   let numbe = [];
//   for (let i = 0; i < max.length; i += 1) {
//     numbe.push(Number(max[i]));
//   }
//   console.log(numbe);
//   // return n.toString().split('').reverse().map(Number);
// }
// console.log(digitize(35231));

// const chai = require('chai');
// const assert = chai.assert;
// function betterThanAverage(classPoints, yourPoints) {
//   let sr = 0;
//   for (let num of classPoints) {
//     sr += num;
//   }
//   return sr / classPoints.length < yourPoints;

//   // for (let i = 0; i < classPoints.length; i += 1) {
//   //   sr += ;
//   //   return sr;
//   //   // console.log(sr / classPoints.length);
//   //   // return (sr += classPoints[i] / classPoints.length) < yourPoints;
//   // }
// }

// console.log(betterThanAverage([2, 3], 5));
// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 100));
// console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 50));
// console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 10));

//Учитывая набор чисел, верните добавку, обратную каждому из них. Каждое положительное становится отрицательным, а отрицательное становится положительным.

// invert([1, 2, 3, 4, 5]) == [-1, -2, -3, -4, -5];
// invert([1, -2, 3, -4, 5]) == [-1, 2, -3, 4, -5];
// invert([]) == [];
//Можно предположить, что все значения являются целыми числами. Не изменяйте входной массив/список.

// const email = 'andrey@gmail.com';
// const username = 'Andrii';
// const ta = 'email';

// const datata = {
//   email,
//   username,
// };
// console.log(datata);
// console.log(datata[ta]);

// const data = {
//   ta: 'email',
//   username: 'Andrii',
//   email: 'andrey@gmail.com',
//   mas: ['mas1', 'mas2', 'mas3', 'mas4'],
//   // trackCaunt: 4,
//   rang: 3,
//   changName(newName) {
//     // console.log('this внутри changName: ', this);
//     this.ta = newName;
//   },
//   addTrack(track) {
//     this.mas.push(track);
//     // this.trackCaunt = this.mas.length;
//     // console.log('this внутри addTrack: ', this);
//   },
//   updateRating(rating) {
//     this.rang = rating;
//     // console.log('this внутри updateRating: ', this);
//   },
//   getTrack() {
//     return this.mas.length;
//   },
// };
// console.log('Количество треков:', data.getTrack());
// // data.getName('Hello!!!');
// data.changName('-Привет, я новое имя-');
// data.addTrack('-mas5-');
// data.addTrack('-mas6-');
// data.addTrack('-mas7-');
// data.addTrack('-mas8-');

// data.updateRating('-20000-');
// console.log(data);
// console.log('Количество треков:', data.getTrack());
// let totalFeedback = 0;
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 7,
// };
// const keys = Object.keys(feedback);
// console.log(keys);

// for (const key of keys) {
//   console.log(key);
//   console.log(feedback[key]);

//   totalFeedback += feedback[key];
// }
// // Number Boolean Array Object

// console.log('Результат с обьекта:', totalFeedback);

// function invert(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] !== 0) {
//       array[i] = array[i] * -1;
//     }
//   }

//   return array;
// }

// console.log(invert([0, 1, 2, -3, 4, -5]));
//Учитывая набор чисел, верните добавку, обратную каждому из них. Каждое положительное становится отрицательным, а отрицательное становится положительным.

// function invert(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] !== '0') {
//       array[i] = array[i] * -1;
//     }
//   }
//   return array;
// }

// console.log(invert([0, 2, 3, 4, 5])); // [-1, -2, -3, -4, -5];
// console.log(invert([1, -2, 3, -4, 5])); // [-1, 2, -3, 4, -5];
// console.log(invert([]));
// console.log(invert([0])); // [];
//Можно предположить, что все значения являются целыми числами. Не изменяйте входной массив/список.
// let create = 0;
// function repeatStr(n, s) {
//   let create = s.repeat(n);
// for (let i = 0; i < n; i += 1) {
//   i += s;
//   create += i;
//   console.log(i);
//   // console.log(create);
// }
//   console.log(create);
// }
// // console.log();
// repeatStr(3, '*'); //'***';
// repeatStr(5, '#'); //'#####';
// repeatStr(2, 'ha '); //'ha ha ';

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// const propKey = 'author';
// // console.log(propKey);
// const bookAuthor = book[propKey];
// // console.log(bookAuthor); // 'Bernard Cornwell'

// console.log(book);
// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = 'Манго';

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4
// function countProps(object) {
//   let propCount = 0;
// Change code below this line
// for (let key in object) {
//   console.log(object);

// }
//   const keys = Object.keys(object);
//   console.log(keys.length);
//   // Change code above this line
//   // return propCount;
// }

// countProps({});
// countProps({ name: 'Mango', age: 2 });
// countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];

// const keys = Object.keys(apartment);
// const key = Object.values(apartment);
// for (let i of key) {
//   values.push(i);
// }
// // for (let key of Object.keys([apartment])) {
// //   values.push(key);
// console.log(key);
// // }

// console.log(values);
// console.log(keys);

// function countProps(object) {
//   let propCount = 0;
//   let key = Object.keys(object);
//   propCount = key.length;
//   // for (const key in object) {
//   //   if (object.hasOwnProperty(key)) {
//   //     propCount += 1;
//   //   }
//   // }

//   return propCount;
// }
// // console.log(propCount);
// console.log(countProps({})); // возвращает 0
// console.log(countProps({ name: 'Mango', age: 2 })); // возвращает 2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // возвращает 3
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];
// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (let i of colors) {
//   hexColors.push(i.hex);
//   rgbColors.push(i.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
//   { name: 'Engine', price: 1200000, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (let calsSum of products) {
//     if (calsSum.name.includes(productName)) {
//       return calsSum.price;
//     }
//   }
//   return null;
// }
// console.log(getProductPrice('Radar')); // возвращает 1300.
// console.log(getProductPrice('Grip')); // возвращает 1200.
// console.log(getProductPrice('Scanner')); // возвращает 2700.
// console.log(getProductPrice('Droid')); // возвращает 400.
// console.log(getProductPrice('Engine')); // возвращает null.
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];
// let cals = [];
// function getAllPropValues(productName) {
//   let cals = [];
//   for (let calsSum of products) {
//     if (calsSum.hasOwnProperty([productName])) {
//       cals.push(calsSum[productName]);
//     }
//   }
//   return cals;
// }

// console.log(getAllPropValues('name')); // возвращает ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues('quantity')); // возвращает [4, 3, 7, 9]
// console.log(getAllPropValues('price')); // возвращает [1300, 2700, 400, 1200]
// console.log(getAllPropValues('category')); // возвращает []
//Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// let cals = 0;
// function calculateTotalPrice(productName) {
//   for (let calsSum of products) {
//     if (Object.values(calsSum).includes(productName)) {
//       console.log(`${calsSum.price} умножить ${calsSum.quantity}`);
//       return calsSum.price * calsSum.quantity;
//     }
//   }
//   return cals;
// }

// console.log(calculateTotalPrice('Blaster')); // возвращает 0
// console.log(calculateTotalPrice('Radar')); // возвращает 5200
// console.log(calculateTotalPrice('Droid')); // возвращает 2800
// console.log(calculateTotalPrice('Grip')); // возвращает 10800
// console.log(calculateTotalPrice('Scanner')); // возвращает 8100
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
// Значение свойства с таким ключом
// console.log(book[key]);
// }
// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = 'Манго';

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значение свойства
//   console.log(book[key]);
// }
// function lovefunc(flower1, flower2) {
//   // moment of truth
//   return flower1 === flower2 ? false : true

// }

// console.log(lovefunc(1, 4)); // true
// console.log(lovefunc(2, 2)); //false
// console.log(lovefunc(858, 208)); //true)
// console.log(lovefunc(0, 0)); //false
// const firstBook = {
//   title: 'Последнее королевство',
//   coverImage:
//     'https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg',
// };

// const {
//   title: firstTitle,
//   coverImage: firstCoverImage = 'https://via.placeholder.com/640/480',
// } = firstBook;

// console.log(firstTitle); // Последнее королевство
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// const secondBook = {
//   title: 'Сон смешного человека',
// };

// const {
//   title: secondTitle,
//   coverImage: secondCoverImage = 'https://via.placeholder.com/640/480',
// } = secondBook;

// console.log(secondTitle); // Сон смешного человека
// console.log(secondCoverImage); // https://via.placeholder.com/640/480

////////////////////////////////////////////////////////
// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     this.items.push(product);
//   },
//   remove(productName) {
//     for (let i = 0; i < this.items.length; i += 1) {
//       //   console.log(this.items[i]);
//       if (productName === this.items[i]) {
//         console.log(`Нашли продукт: ${productName}`);
//       }
//     }
//     // for (let item of this.items) {
//     //   console.log(item);

//     //   if (productName === item.name) {
//     //     console.log(`Нашли продукт: ${productName}`);
//     //   }
//     // }
//   },
//   clear() {},
//   countTotalPrice() {},
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };

// console.table(cart.getItems());

// cart.add({ name: 'яблоко', price: 22 });
// cart.add({ name: 'груша', price: 85 });
// cart.add({ name: 'диня', price: 100 });
// cart.add({ name: 'арбуз', price: 62 });
// cart.add({ name: 'слива', price: 40 });
// cart.add({ name: 'абрикос', price: 105 });
// cart.add({ name: 'Черешеня', price: 160 });
// cart.add({ name: 'Черешеня', price: 160 });

// console.table(cart.getItems());

// cart.remove('яблоко');
///////////////////////////////////////////////////
// const haystack_1 = [
//   '3',
//   '123124234',
//   undefined,
//   'needle',
//   'world',
//   'hay',
//   2,
//   '3',
//   true,
//   false,
// ];
// const haystack_2 = [
//   '283497238987234',
//   'a dog',
//   'a cat',
//   'some random junk',
//   'a piece of hay',
//   'needle',
//   'something somebody lost a while ago',
// ];
// const haystack_3 = [
//   1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 5, 4, 3, 4, 5, 6, 67, 5, 5, 3, 3, 4, 2, 34, 234,
//   23, 4, 234, 324, 324, 1, 2, 3, 4, 5, 5, 6, 5, 4, 32, 3, 45, 54,
// ];
// function findNeedle(haystack) {
//   const array = 'needle';
//   for (let i = 0; i < haystack.length; i += 1) {
//     if (haystack[i] === array) {
//       return `found the needle at position ${[i]}`;
//     }
//   }

//   return "Your function didn't return anything";
// }

// //--> undefined -->"Your function didn't return anything",
// console.log(findNeedle(haystack_1)); //'found the needle at position 3'
// console.log(findNeedle(haystack_2)); //'found the needle at position 5'
// console.log(findNeedle(haystack_3)); //'found the needle at position 30'

// const temps = [14, -4, 25, 8, 11];

// // В консоли будет массив
// console.log(temps);
// // ❌ Так не сработает, потому что передаём целый массив
// console.log(Math.max(temps)); // NaN

// console.log(...temps);
// // ✅ Распылим коллекцию элементов как отдельные аргументы
// console.log(Math.max(...temps)); // 25
// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308
// Change code below this line
// function addOverNum(firstNumber, ...args) {
//   let total = 0;
//   // for (const arg of args) {

//   //   // total += arg;
//   // }
//   for (let i = 0; i < args.length; i += 1) {
//     if (args[i] > firstNumber) {
//       total += args[i];
//     }
//   }

//   return total;
//   // Change code above this line
// }

// console.log(addOverNum(50, 15, 27)); // возвращает 0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); // возвращает 71
// console.log(addOverNum(15, 32, 6, 13, 19, 8)); // возвращает 51
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); // возвращает 218
// function removeChar(str) {
//   const remove = str.slice(1, -1);
//   return remove;
// }

// console.log(removeChar('country')); // 'ountr');
// console.log(removeChar('person')); // 'erso');
// console.log(removeChar('place')); // 'lac');
// console.log(removeChar('ooopsss')); // 'oopss');

// function isDivideBy(numbers, a, b) {
//   return numbers / a === b;
// }
// function isDivideBy(n, a, b) {
//   let num = n / a;

//   return num % 2 === 0;
// }
// function isDivideBy(numbers, a, b) {
//   const num1 = numbers / a;
//   return num1 === b && Number.isInteger(num1);
// }

// let isDivideBy = (number, a, b) => {
//   if (number % a === 0 && number % b === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isDivideBy(-12, 2, -6)); // true);
// console.log(isDivideBy(-12, 2, -5)); // false);
// console.log(isDivideBy(45, 1, 6)); // false);
// console.log(isDivideBy(45, 5, 15)); // true);
// console.log(isDivideBy(4, 1, 4)); // true);
// console.log(isDivideBy(3156, 2, 6)); // true);

// function find_average(array) {
//   let total = 0;
//   let tot = 0;
//   for (let i = 0; i < array.length; i += 1) {

//     console.log(array[i]);
// return (total += array.length);
// return total / array.length - 1 + 1;
//   }
//   // return 0;
// }

// function find_average(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i += 1) {
//     sum += array[i];
//     console.log(sum / array.length - 1);
//   }
// }
// console.log(find_average([1, 1, 1])); //, 1);
// console.log(find_average([1, 2, 3])); //, 2);
// console.log(find_average([1, 2, 3, 4])); //, 2.5);
