// TASK 1

let a = 'true';
let b = false;
let c = 17;
let d = undefined;
let e = null;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);

// TASK 2

let height = 15;
let width = 20;

if (height > width) {
	console.log(`${height} - height`);
} else if (width > height) {
	console.log(`${width} - width`);
} else {
	console.log('числа равны');
}

// TASK 3

for (let i = 1; i <= 20; i++) {
	if (i % 3 === 0) {
		console.log(i);
	}
}

// TASK 4

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

if (key && documents && pen && (apple || orange)) {
	console.log('Иду на работу');
}

// TASK 5

let num = +prompt('Введите число (для FizBuz):');

if (num % 3 === 0 && num % 5 === 0) {
	console.log('FizBuz');
} else if (num % 5 === 0) {
	console.log('Fiz');
} else {
	console.log('Buz');
}

// TASK 6

let age = +prompt('Введите ваш возраст:');

if (age >= 16 && age <= 18) {
	console.log('Можешь выкурить сигаретку, только маме не говори');
} else if (age > 18) {
	console.log('Попей пивка');
} else {
	console.log('Пей колу');
}

// TASK 7

let direction = prompt('В какую сторону света хотите отправиться? (юг, север, запад, восток)').toLowerCase();

switch (direction) {
	case 'юг':
		console.log('На юг пойдёшь счастье найдёшь');
		break;
	case 'север':
		console.log('На север пойдёшь много денег найдёшь');
		break;
	case 'запад':
		console.log('На запад пойдёшь верного друга найдёшь');
		break;
	case 'восток':
		console.log('На восток пойдёшь разработчиком станешь');
		break;
	default:
		console.log('Неверные данные, попробуйте ещё раз');
}

// ADVANCED 1

let number = +prompt('Введите число:');
let formula = number.toString();

let toSubtract = +prompt('Сколько отнять?');
number = number - toSubtract;
// Оборачиваем предыдущую формулу в скобки с новым действием
formula = `(${formula} - ${toSubtract})`;

let toAdd = +prompt('Сколько прибавить?');
number = number + toAdd;
formula = `(${formula} + ${toAdd})`;

let toMultiply = +prompt('Сколько умножить?');
number = number * toMultiply;
formula = `(${formula} * ${toMultiply})`;

let toDivide = +prompt('Сколько разделить?');
number = number / toDivide;
formula = `(${formula} / ${toDivide})`;

alert(`${formula} = ${number}`);
