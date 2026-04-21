/* 
Задача 1 (прототип)

Создайте объект grandparent со свойством family = "Smith". 
Создайте объект parent с прототипом grandparent. 
Создайте объект child с прототипом parent. Выведите child.family.
*/

const grandparent = {
	family: 'Smith',
};

// 1.1

// const parent = {
// 	__proto__: grandparent,
// };

// const child = {
// 	__proto__: parent,
// };

// 1.2

const parent = Object.create(grandparent);
const child = Object.create(parent);

console.log(child.family);

/* 
Задача 2 (функция-конструктор)

Напишите функцию-конструктор Bird(type), которая создаёт объект со свойством type. 
Добавьте в прототип метод fly(), возвращающий строку "Летит!". 
Создайте птицу типа "Воробей" и вызовите fly().
*/

function Bird(type) {
	this.type = type;
}

Bird.prototype.fly = function () {
	return 'Летит!';
};

const sparrow = new Bird('Воробей');

console.log(sparrow.fly());

/* 
Задача 3 (класс)

Создайте класс Phone с полем brand в конструкторе и методом call(), возвращающим "Звоню...". 
Создайте телефон бренда "Nokia" и вызовите call().
*/

class Phone {
	constructor(brand) {
		this.brand = brand;
	}

	call() {
		return 'Звоню...';
	}
}

const nokia = new Phone('Nokia');
console.log(nokia.call());

/* 
Задача 4 (наследование)

Создайте класс Vehicle с методом move(), возвращающим "Едет". 
Создайте класс Ship, который наследует Vehicle и переопределяет move(), возвращая "Плывёт". 
Создайте корабль и вызовите его move().
*/

class Vehicle {
	move() {
		return 'Едет';
	}
}

class Ship extends Vehicle {
	move() {
		return 'Плывёт';
	}
}

const ship1 = new Ship();
console.log(ship1.move());
