// ------------------- NORMAL LEVEL ----------------------

// Задача 1

/* 
 Дан объект:

 let menu = {
  width: 200,
  height: 300,
  title: "My menu"
 };

 Создайте функцию multiplyNumeric(), 
 которая умножает все числовые свойства объекта menu на 2.
 Функция не принимает никаких аргументов, она работает 
 с исходным объектом menu.

 Должно работать так:

 // до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
*/

// Задача 2

/* 
 Имеется Массив объектов:

 let users = [
{
  name: "John",
  age: 30
},
{
  name: "Bob",
  age: 21
},
{
  name: "Anna",
  age: 19
}
]

Получите из этого массива тот объект, где name = "Bob" и сохраните это в какой-либо переменной.
*/

// Задача 3

/* 

Даны два объекта:

let developer1 = {
  firstName: 'Maria',
  lastName: 'Y.',
  country: 'Cyprus',
  continent: 'Europe',
  age: 30,
  language: 'Javascript'
}

let developer2 = {
  firstName: 'Victoria',
  lastName: 'T.',
  country: 'Puerto Rico',
  continent: 'Americas',
  age: 23,
  language: 'Python'
}

Добавить в каждый объект метод getLocation, который 
выводит в консоль  континент и страну разработчика. 
Далее вызвать метод для каждого из объектов.

*/

// Задача 4

/* 
Есть массив с объектами:
const users = [
{ name: 'Alex', age: 31},
{ name: 'Olga', age: 17},
{ name: 'Carl', age: 15},
{ name: 'Nancy', age: 28},
{ name: 'Eric', age: 9}
]

Создать новый массив с именами пользователей, у которых возраст
меньше 18 . Для решения задачи используем цикл for..of и метод
push .
*/

// Задача 5

/* 
 Отсортируйте массив в порядке убывания.

 let arr = [5, 2, 1, -10, 8];
 ... ваш код сортировки
 console.log(arr); // 8, 5, 2, 1, -10
*/

// ----------------------- ADVANCED LEVEL -------------------

// Задача 1

/* 
Напишите функцию isEmpty(obj), которая возвращает true, 
если у объекта нет свойств, иначе false.

Должно работать так:

let schedule = {};
console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";
console.log(isEmpty(schedule)); // false
*/

// Задача 2

/* 
Пусть arr – массив строк.
Напишите функцию unique(arr), которая возвращает массив, 
содержащий только уникальные элементы arr.

Например:

function unique(arr) {
  ...ваш код
}

let strings = ["огурец", "огурец", "лук", "лук",
  "лук", "лук", "огурец", "огурец", "чеснок"
];

console.log(unique(strings)); // огурец, лук, чеснок
*/

// Задача 3

/* 
Напишите функцию camelize(str), которая преобразует строки вида 
«my-short-string» в «myShortString».
То есть дефисы удаляются, а все слова после них получают заглавную букву.
Подсказка: вам поможет метод slice для строки
"hello".slice(0, 2) //he

Примеры:
camelize("background-color") => 'backgroundColor';
camelize("list-style-image") => 'listStyleImage';
*/
