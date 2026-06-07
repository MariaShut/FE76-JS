interface IUser {
	name: string;
	phone: string;
	email: string;
	animals?: string[];
	cars?: string[];
	hasChildren: boolean;
	hasEducation: boolean;
}

const users = [
	{
		name: 'Harry Felton',
		phone: '(09) 897 33 33',
		email: 'felton@gmail.com',
		animals: ['cat'],
		cars: ['bmw'],
		hasChildren: false,
		hasEducation: true,
	},
	{
		name: 'May Sender',
		phone: '(09) 117 33 33',
		email: 'sender22@gmail.com',
		hasChildren: true,
		hasEducation: true,
	},
	{
		name: 'Henry Ford',
		phone: '(09) 999 93 23',
		email: 'ford0@gmail.com',
		cars: ['bmw', 'audi'],
		hasChildren: true,
		hasEducation: false,
	},
];

// 1. Создать строку из имен пользователей через запятую

const getUsersNames = (usersList: IUser[]): string => {
	return usersList.map(user => user.name).join(', ');
};

// 2. Подсчитать общее количество машин у пользователей

const getTotalCarsCount = (usersList: IUser[]): number => {
	return usersList.reduce((acc, user) => acc + (user.cars?.length ?? 0), 0);
};

// 3. Создать функцию, которая бы принимала массив пользователей и
// отфильтровывала пользователей на наличие образования

const filterByEducation = (usersList: IUser[]): IUser[] => {
	return usersList.filter(user => user.hasEducation);
};

// 4. Создать функцию, которая бы принимала массив пользователей и
// отфильтровывала пользователей на наличие животных

const filterByAnimals = (usersList: IUser[]): IUser[] => {
	return usersList.filter(user => user.animals && user.animals.length > 0);
};

// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы
// строку с названиями марок автомобилей через запятую

const getAllCarsBrands = (usersList: IUser[]): string => {
	const allCars = usersList.flatMap(user => user.cars ?? []);
	return allCars.join(', ');
};

console.log('1. Имена:', getUsersNames(users));
console.log('2. Всего машин:', getTotalCarsCount(users));
console.log('3. С образованием:', filterByEducation(users));
console.log('4. С животными:', filterByAnimals(users));
console.log('5. Марки машин:', getAllCarsBrands(users));
