// const number = 10;

// for (let i = 0; i <= number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
// }
// const clients = ['Mango', 'Ajax', 'Poly'];

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
let totalFeedback = 0;
const feedback = {
  good: 5,
  neutral: 10,
  bad: 7,
};
const keys = Object.keys(feedback);
console.log(keys);

for (const key of keys) {
  console.log(key);
  console.log(feedback[key]);

  totalFeedback += feedback[key];
}
// Number Boolean Array Object

console.log('Результат с обьекта:', totalFeedback);

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
