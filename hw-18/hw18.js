// TASK 1
console.log('task 1');

function getSummary(param) {
	let sum = 0;
	for (let i = 0; i <= param; i++) {
		sum += i;
	}
	return sum;
}

console.log(getSummary(100));
console.log(getSummary(3));

// TASK 2
console.log('task 2');

function getOverpayment(creditValue, rate = 0.17, years = 5) {
	let overpaymentPerYear = creditValue * rate;
	let overpaymentTotal = overpaymentPerYear * years;

	return Math.round(overpaymentTotal);
}

console.log(getOverpayment(100000));
console.log(getOverpayment(50000));
console.log(getOverpayment(10000, 0.14, 3)); // 4200.000000000001 изначально

// TASK 3
console.log('task 3');

let getSumNumbers = (number) => {
	let sum = 0;
	let str = String(number);

	for (let i = 0; i < str.length; i++) {
		sum += Number(str[i]);
	}

	return sum;
};

console.log(getSumNumbers(2021));

// TASK 4
console.log('task 4');

let getSum = (a, b) => {
	let sum = 0;
	let min = Math.min(a, b);
	let max = Math.max(a, b);

	for (let i = min; i <= max; i++) {
		sum += i;
	}

	return sum;
};

console.log(getSum(1, 0));
console.log(getSum(-1, 2));
console.log(getSum(-3, 5));
console.log(getSum(7, -4));

// ADVANCED 1
console.log('Avanced 1');

function isTriangle(a, b, c) {
	return a + b > c && a + c > b && b + c > a;
}
console.log(isTriangle(1, 2, 3));
console.log(isTriangle(3, 4, 5));
console.log(isTriangle(1, 1, 10));
console.log(isTriangle(5, 5, 5));

// ADVANCED 2
console.log('Avanced 2');

function breakChocolate(n, m) {
	if (n === 0 || m === 0) return 0;
	return n * m - 1;
}

console.log(breakChocolate(2, 1));
console.log(breakChocolate(3, 1));
console.log(breakChocolate(3, 2));
console.log(breakChocolate(0, 5));
