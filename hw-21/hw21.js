// ===== TASK 1 =====
console.log('Task 1');

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

// Function declaration
function showNum(num) {
	console.log(num);
}
fibonacci.forEach(showNum);

// Arrow function
fibonacci.forEach((num) => console.log(num));

// ===== TASK 2 =====
console.log('Task 2');

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

// Function declaration
function formatUser(name, index) {
	return `member ${index + 1}: ${name}`;
}
const members1 = users.map(formatUser);
console.log(members1);

// Arrow function
const members2 = users.map((name, index) => `member ${index + 1}: ${name}`);
console.log(members2);

// ===== TASK 3 =====
console.log('Task 3');

const numbers = [7, -4, 32, -90, 54, 32, -21];

// Function declaration
function isPositive(num) {
	return num >= 0;
}
const positives1 = numbers.filter(isPositive);
console.log(positives1);

// Arrow function
const positives2 = numbers.filter((num) => num >= 0);
console.log(positives2);

// ===== TASK 4 =====
console.log('Task 4');

// Function declaration
function calcSum(acc, num) {
	return acc + num;
}
const fiboSum1 = fibonacci.reduce(calcSum, 0);
console.log(fiboSum1);

// Arrow function
const fiboSum2 = fibonacci.reduce((acc, num) => acc + num, 0);
console.log(fiboSum2);

// ===== TASK 5 =====
console.log('Task 5');

const numbers5 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

// Function declaration
function isEven(num) {
	return num % 2 === 0;
}
const firstEven1 = numbers5.find(isEven);
console.log(firstEven1);

// Arrow function
const firstEven2 = numbers5.find((num) => num % 2 === 0);
console.log(firstEven2);

// ===== ADVANCED 1 =====
console.log('Advanced 1');

const removeVowels = (str) => {
	const vowels = 'aeiouAEIOU';
	const output = str
		.split('')
		.filter((char) => !vowels.includes(char))
		.join('');

	return output;
};

console.log(removeVowels('This website ys for losers LOL!'));

// ===== ADVANCED 2 =====
console.log('Advanced 2');

const accum = (str) => {
	const output = str
		.split('')
		.map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
		.join('-');

	return output;
};

console.log(accum('abcd'));
console.log(accum('RqaEzty'));
console.log(accum('cwAt'));

// ===== ADVANCED 3 =====
console.log('Advanced 3');

const isIsogram = (str) => {
	const lower = str.toLowerCase().split('');
	console.log(lower);

	// indexOf(char) — первый индекс
	// eсли текущий индекс другой — значит буква уже была
	const duplicates = lower.filter((char, index) => lower.indexOf(char) !== index);
	return duplicates.length === 0;
};

console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('aba'));
console.log(isIsogram('moOse'));
