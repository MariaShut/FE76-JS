// TASK1
console.log('Task 1');

const notebook = {
	paper: 'dotted',
	size: 'A5',
	brand: 'Falafel',
	sheets: 64,
};

delete notebook.brand;
delete notebook.sheets;

console.log(notebook);

// TASK 2
console.log('Task 2');

const pen = {
	color: 'black',
	size: 0.1,
};

if ('color' in pen) {
	console.log(true);
}

// TASK 3
console.log('Task 3');

const student = {
	name: 'John',
	age: 19,
	isHappy: true,
};

for (let key in student) {
	console.log('ключ: ' + key);
}

for (let key in student) {
	console.log('значение: ' + student[key]);
}

// TASK 4
console.log('Task 4');

const colors = {
	'ru pum pu ru rum': {
		red: 'красный',
		green: 'зеленый',
		blue: 'синий',
	},
};

const colorKey = 'ru pum pu ru rum';
console.log(colors[colorKey].red);
console.log(colors[colorKey].blue);

// TASK 5
console.log('Task 5');

let salaries = {
	andrey: 500,
	sveta: 413,
	anton: 987,
	andrey: 664,
	alexandra: 199,
};

let salariesOverall = 0;

for (let key in salaries) {
	salariesOverall += salaries[key];
}
console.log(salariesOverall);

const averageSalary = salariesOverall / Object.keys(salaries).length;
console.log(averageSalary);

// TASK 6

const login = prompt('Введите логин:');
const pswrd = prompt('Введите пароль:');

const user = {
	login,
	pswrd,
};

const isConfirmed = confirm(`Ваш логин: ${user.login}, пароль: ${user.pswrd}. Верно?`);

if (isConfirmed) {
	alert('Добро пожаловать!');
}

// ADDITIONAL 1
console.log('Additional 1');

const points = {
	0: 'ноль',
	1: 'один',
	2: 'два',
	3: 'три',
	4: 'четыре',
	5: 'пять',
	6: 'шесть',
	7: 'семь',
	8: 'восемь',
	9: 'девять',
};

function getScore(scoreStr) {
	const scoreArr = scoreStr.split(':');
	return points[scoreArr[0]] + ':' + points[scoreArr[1]];
}

console.log(getScore('2:5'));
console.log(getScore('3:8'));

// ADDITIONAL 2

let calculator = {
	read() {
		this.a = +prompt('Введите первое число:');
		this.b = +prompt('Введите второе число:');
	},
	sum() {
		return this.a + this.b;
	},
	mul() {
		return this.a * this.b;
	},
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// ADDITIONAL 3
console.log('Additional 3');

const animals = {
	cat: {
		name: 'Енчик',
		age: 3,
	},
	dog: {
		name: 'Орео',
		age: 2,
	},
};

if ('bird' in animals) {
	console.log(animals.bird.name);
} else {
	console.log('Птицы нет');
}
