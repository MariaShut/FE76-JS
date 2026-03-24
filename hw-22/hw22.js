// ===== TASK 1 =====

let menu = {
	width: 200,
	height: 300,
	title: 'My menu',
};

const multiplyNumeric = (obj) => {
	for (let key in obj) {
		if (typeof obj[key] === 'number') obj[key] *= 2;
	}
	console.log(obj);
};

multiplyNumeric(menu);

// ===== TAKS 2 =====

let users = [
	{
		name: 'John',
		age: 30,
	},
	{
		name: 'Bob',
		age: 21,
	},
	{
		name: 'Anna',
		age: 19,
	},
];

let userBob;

for (let user of users) {
	if (user.name === 'Bob') {
		userBob = user;
	}
}
console.log(userBob);

// (2)

const persona = users.find((user) => user.name === 'Bob');
console.log(persona);

// ===== TAKS 3 =====

let developer1 = {
	firstName: 'Maria',
	lastName: 'Y.',
	country: 'Cyprus',
	continent: 'Europe',
	age: 30,
	language: 'Javascript',
};

let developer2 = {
	firstName: 'Victoria',
	lastName: 'T.',
	country: 'Puerto Rico',
	continent: 'Americas',
	age: 23,
	language: 'Python',
};

developer1.getLocation = function () {
	console.log(`Континент: ${this.continent}. Страна: ${this.country}.`);
};
developer2.getLocation = function () {
	console.log(`Континент: ${this.continent}. Страна: ${this.country}.`);
};

developer1.getLocation();
developer2.getLocation();

// ===== TASK 4 =====

const users4 = [
	{ name: 'Alex', age: 31 },
	{ name: 'Olga', age: 17 },
	{ name: 'Carl', age: 15 },
	{ name: 'Nancy', age: 28 },
	{ name: 'Eric', age: 9 },
];

const youngUsers = [];

for (let user of users4) {
	if (user.age < 18) youngUsers.push(user.name);
}
console.log(youngUsers);

// ===== TASK 5 =====

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

console.log(arr); // 8, 5, 2, 1, -10

// ===== ADVANCED 1 =====

function isEmpty(obj) {
	for (let key in obj) {
		return false; // есть хоть одно свойство — не пустой
	}
	return true; // цикл не выполнился — пустой
}

let schedule = {};
console.log(isEmpty(schedule)); // true

schedule['8:30'] = 'get up';
console.log(isEmpty(schedule)); // false

// ===== ADVANCED 2 =====

function unique(arr) {
	const output = [];

	for (let item of arr) {
		if (!output.includes(item)) output.push(item);
	}

	return output;
}

let strings = ['огурец', 'огурец', 'лук', 'лук', 'лук', 'лук', 'огурец', 'огурец', 'чеснок'];

console.log(unique(strings)); // огурец, лук, чеснок

// ===== ADVANCED 3 =====

// Преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву
const camelize = (str) => {
	const words = str.split('-');

	const output = words.map((word, index) => {
		if (index === 0) return word;
		return word[0].toUpperCase() + word.slice(1);
	});

	return output.join('');
};

console.log(camelize('background-color')); // => 'backgroundColor'
console.log(camelize('list-style-image')); // => 'listStyleImage'
