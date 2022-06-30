// const a = 'Переменая a = b';
// const b = 'Переменная b = a, но это не правда';

// console.log(a);
// console.log(b);

// console.log(Math.ceil(Math.random() * (5 - 1) + 1));

// // Math.floor(num) - возвращает наибольшее целое число,
// // меньшее, либо равное указанному
// console.log(Math.floor(1.7)); // 1

// // Math.ceil(num) - возвращает наименьшее целое число,
// // большее, либо равное указанному числу.
// console.log(Math.ceil(1.2)); // 2

// // Math.round(num) - возвращает значение числа,
// // округлённое до ближайшего целого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// // Math.max(num1, num2, ...) - возвращает наибольшее число из набора
// console.log(Math.max(20, 10, 50, 40)); // 50

// // Math.min(num1, num2, ...) - возвращает наименьшее число из набора
// console.log(Math.min(20, 10, 50, 40)); // 10

// // Math.pow(base, exponent) - возведение в степень
// console.log(Math.pow(2, 4)); // 16

// // Math.random() - возвращает псевдослучайное число в диапазоне [0, 1)
// console.log(Math.random()); // случайное число между 0 и 1
// console.log(Math.random() * (10 - 1) + 1); // псевдослучайное число от 1 до 10

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 * 100 + 0.24 * 100) / 100); // 0.41

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 + 0.24).toFixed(2)); // 0.41

// const username = 'Mango';
// console.log(username);

// const messages = 'Mango ' + 'is' + ' happy';
// console.log(messages); // Mango is happy

// const message = '5' + '9' + '0';
// console.log(message); // Mango is happy

// // Используя переменные необходимо составить строку с подставленными значениями
// // const guestName = 'Манго';
// // const roomNumber = 207;
// // const greeting = 'Welcome ' + guestName + ', your room number is ' + roomNumber + '!';
// // console.log(greeting); // "Welcome Mango, your room number is 207!"

// const guestName = 'Манго';
// const roomNumber = 207;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting); // "Welcome Mango, your room number is 207!"

// const message2 = 'Welcome to Bahamas!';
// console.log(message2.length); // 19
// console.log('There is nothing impossible to him who will try'.length); // 47

// const message3 = 'Welcome to Bahamas!';
// console.log(message3.toLowerCase()); // "welcome to bahamas!"
// console.log(message3.toUpperCase()); // "WELCOME TO BAHAMAS!"
// console.log(message3); // "Welcome to Bahamas!"
// const BRAND_NAME = 'SAMSUNG';
// const userInput = 'saMsUng';
// const normalizedToUpperCaseInput = userInput.toUpperCase();

// console.log(userInput); // 'saMsUng'
// console.log(userInput === BRAND_NAME); // false
// console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
// console.log(normalizedToUpperCaseInput === BRAND_NAME); // true

// const message4 = 'Welcome to Bahamas!';
// console.log(message4.indexOf('to')); // 8
// console.log(message4.indexOf('hello')); // -1

// const productName = 'Ремонтный дроид';

// console.log(productName.includes('н')); // true
// console.log(productName.includes('Н')); // false
// console.log(productName.includes('дроид')); // true
// console.log(productName.includes('Дроид')); // false
// console.log(productName.includes('Ремонтный')); // true
// console.log(productName.includes('ремонтный')); // false

// const jsFileName = 'script.js';
// const minifiedJsFileName = jsFileName.replace('.js', '.min.js');
// console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = 'styles.css, about.css, portfolio.css';
// const minifiedCssFileNames = cssFileNames.replaceAll('.css', '.min.css');
// console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

// const productName1 = 'Repair droid';
// console.log(productName1.slice(0, 4)); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName1.slice(0, productName1.length)); // "Repair droid"
// console.log(productName1.slice(7, productName1.length)); // "droid"

// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!'Mango'); // !"Mango" -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!''); // !"" -> !false -> true

// const isOnline = true;
// const isNotOnline = !isOnline; // !isOnline -> !true -> false
