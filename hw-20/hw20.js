// TASK 1
console.log('Task 1');

const colors = ['red', 'green', 'blue'];
console.log(colors.length);

// TASK 2
console.log('Task 2');

const animals = ['monkey', 'dog', 'cat'];
console.log(animals[animals.length - 1]);
// (2)
console.log(animals.at(-1));

// TASK 3
console.log('Task 3');

const numbers = [5, 43, 63, 23, 90];
numbers.length = 0;
console.log(numbers);

const numbers2 = [5, 43, 63, 23, 90];
numbers2.splice(0);
console.log(numbers2);

// TASK 4
console.log('Task 4');

const students = ['Polina', 'Dasha', 'Masha'];
console.log(students.pop()); // Masha
students.push('Borya'); // 3
console.log(students);

console.log(students.shift()); // Polina
students.unshift('Andrey'); // 3
console.log(students);

// (2)
const students2 = ['Polina', 'Dasha', 'Masha'];
students2.splice(-1, 1, 'Borya');
students2.splice(0, 1, 'Andrey');
console.log(students2);

// TASK 5
console.log('Task 5');

const cats = ['Gachito', 'Tom', 'Batman'];

for (let i = 0; i < cats.length; i++) {
	console.log(cats[i]);
}

for (let cat of cats) {
	console.log(cat);
}

// TASK 6
console.log('Task 6');

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

const concatedArr = evenNumbers.concat(oddNumbers);
console.log(concatedArr);
console.log(concatedArr.indexOf(8));

// TASK 7
console.log('Task 7');

const binary = [0, 0, 0, 0];

const binaryStr = binary.join('1');
console.log(binaryStr);

// ADVANCED 1
console.log('Advanced 1');

const isPalindrome = (input) => {
	const cleanInput = String(input).toLowerCase().replaceAll(' ', '');
	const reversedInput = cleanInput.split('').reverse().join('');

	if (cleanInput === reversedInput) {
		return `Палиндром: ${input}`;
	} else {
		return 'Не палиндром';
	}
};

console.log(isPalindrome('Шалаш'));
console.log(isPalindrome('Заказ'));
console.log(isPalindrome(101));
console.log(isPalindrome('Довод'));
console.log(isPalindrome('а роза упала на лапу Азора'));

// ADVANCED 2
console.log('Advanced 2');

const matrix = [
	[12, 98, 78, 65, 23],
	[54, 76, 98, 43, 65],
	[13, 324, 65, 312],
	[9092, 22, 45, 90000],
];

const flat = matrix.flat();
const sum = flat.reduce((acc, num) => acc + num, 0);
const average = sum / flat.length;

console.log(average);

// ADVANCED 3
console.log('Advanced 3');

const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];

const positivesArr = mixedNumbers.filter((num) => num >= 0);
const negativesArr = mixedNumbers.filter((num) => num < 0);

console.log(positivesArr);
console.log(negativesArr);

// ADVANCED 4
console.log('Advanced 4');

const numbersAdd = [2, 3, 4, 5, 6];

const cubed = numbersAdd.map((num) => Math.pow(num, 3));

console.log(numbersAdd);
console.log(cubed);
