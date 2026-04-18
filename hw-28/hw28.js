/* 
Задача 1.

Дан массив:

const arr = [2, 3, 2, 4, 4, 5, 2, 1, 0, 0, 5]

Напишите функцию, которая принимает в себя два аргумента - массив и число. 
Сколько раз встречается число в массиве? 
Функция должна вернуть число - ответ на этот вопрос. 
Если какого-то числа в массиве нет, верните null из функции.
*/

const arr = [2, 3, 2, 4, 4, 5, 2, 1, 0, 0, 5];

// 1.1

// const getCount = (arr, num) => {
// 	let count = 0;

// 	for (const item of arr) {
// 		if (item === num) {
// 			count++;
// 		}
// 	}

// 	return count || null;
// };

// 1.2

const getCount = (arr, num) => arr.filter(item => item === num).length || null;

console.log(getCount(arr, 2));
console.log(getCount(arr, 7));
console.log(getCount(arr, 5));

/* 
Задача 2.

Дан массив:

const arr = [0, "hello", false, 42, "", null]

Уберите все falsy значения из массива.
*/

const arr2 = [0, 'hello', false, 42, '', null];

const truthyArr = arr2.filter(item => !!item);
console.log(truthyArr);

/* 
Задача 3.

Дан массив:

const arr = [{id:1,name:"A"}, {id:2,name:"B"}];

Сделайте из этого массива такой объект:

{
  "1": {
    "name": "A"
  },
  "2": {
    "name": "B"
  }
}

*/

const arr3 = [
	{ id: 1, name: 'A' },
	{ id: 2, name: 'B' },
];

const newObj = {};

for (const { id, name } of arr3) {
	newObj[id] = { name };
}

console.log(newObj);

/* 
Задача 4.

Напишите функцию, которая принимает в себя строку и возвращает число - количество гласных букв в строке.

Исходная строка - всегда одно русское слово.

Примеры:

countLetters("государство") - 4

countLetters("прИвет") - 2

countLetters("счАстлиВЫй") - 3

*/

const countLetters = word => {
	const vowels = 'аеёиоуыэюя';
	return [...word.toLowerCase()].filter(letter => vowels.includes(letter)).length;
};

console.log(countLetters('государство')); // 4
console.log(countLetters('прИвет')); // 2
console.log(countLetters('счАстлиВЫй')); // 3
