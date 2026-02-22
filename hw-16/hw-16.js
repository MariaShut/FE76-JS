// cd hw-16
// node hw-16.js

// #### Task 1 💻
// Создайте переменные, затем сложите их и выведите результат в консоль разработчика.
console.log('TASK 1');

let x = 20;
let y = 58;
let z = 42;

let sum = x + y + z;
console.log(sum);

// #### Task 2 💻
// Создайте переменные:
//     - количество секунд в минуте
//     - количество минут в часу
//     - количество часов в сутках
//     - количество суток в году

// Посчитайте ваш возраст в часах и поместите результат в переменную **`myAgeInHours`**
console.log('TASK 2');

let secPerMin = 60;
let minPerHour = 60;
let hoursPerDay = 24;
let daysPerYear = 365;

let myAge = 27;
let myAgeInDays = myAge * daysPerYear; // 9 855 дней
let myAgeInHours = myAgeInDays * hoursPerDay; // 236 520 часов
console.log(myAgeInHours + ' часов');

// #### Task 3 💻
// Создайте две переменные. Поместите в них переменную **`count`** и превратите в строку, а **`userName`** наоборот в число.
// Попробуйте реализовать задачу двумя разными способами.
console.log('TASK 3');

let count = 42;
let userName = '42';

// Number to String
let countStr = String(count);
let countStr2 = count.toString();

console.log(`Num to Str: ${countStr}. ${typeof countStr}`);
console.log(`Num to Str: ${countStr2}. ${typeof countStr2}`);

// String to Number
let userNum = Number(userName);
let userNum2 = +userName;

console.log(`Str to Num: ${userNum}. ${typeof userNum}`);
console.log(`Str to Num: ${userNum2}. ${typeof userNum2}`);

// #### Task 4 💻
// Имеется три переменные:
// Сложите переменные так, чтобы в результате получилось выражение: **`12 белых медведей`** и результат выведите в консоль.
console.log('TASK 4');

let a = 1;
let b = 2;
let c = 'белых медведей';

console.log(a + '' + b + ' ' + c);
console.log(`${a}${b} ${c}`);

// #### Task 5 💻
// Создайте переменные и поместите в них нижеприведенные слова. Затем создайте еще одну переменную **`lengthWords`** и посчитайте в ней длинну всех слов из списка:
//     - доступ
//     - морпех
//     - наледь
//     - попрек
//     - рубило

console.log('TASK 5');

let word1 = 'доступ';
let word2 = 'морпех';
let word3 = 'наледь';
let word4 = 'попрек';
let word5 = 'рубило';
let lengthWords = word1.length + word2.length + word3.length + word4.length + word5.length;
console.log(lengthWords);

// второе решение
let words = ['доступ', 'морпех', 'наледь', 'попрек', 'рубило'];
let wordsSummary = 0;

for (let word of words) {
	let currentLength = word.length;
	wordsSummary += currentLength;
}
console.log(wordsSummary);

// #### Task 6 💻
// Создать 3 переменные разных типов и вывести в консоль для каждой из них строку следующего вида:
//     `Variable: %variable name% have type: %type variable%`
console.log('TASK 6');

let cat = 'кот';
let paws = 4;
let isHungry = false;
console.log(`Variable: ${cat} have type: ${typeof cat}`);
console.log(`Variable: ${paws} have type: ${typeof paws}`);
console.log(`Variable: ${isHungry} have type: ${typeof isHungry}`);

// ### ADVANCED level

// #### Task 1 👨‍🏫
// В данном послании скрыт шифр! Чтобы его разгадать нам нужно соединить все вторые символы слов!
// Создайте переменную **`cipher`** и поместите туда необходимые символы
console.log('ADDITIONAL TASK 1');

let codeWord1 = 'обернись';
let codeWord2 = 'неужели';
let codeWord3 = 'огурцы';
let codeWord4 = 'липкие';
let codeWord5 = '?!';

let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
console.log(cipher);
