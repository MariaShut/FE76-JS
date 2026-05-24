const subjects = {
	mathematics: {
		students: 200,
		teachers: 6,
	},
	biology: {
		students: 120,
		teachers: 6,
	},
	geography: {
		students: 60,
		teachers: 2,
	},
	chemistry: {
		students: 100,
		teachers: 3,
	},
};

// 1. Создать строку из названий предметов написанных через запятую
const subjectNames = Object.keys(subjects).join(', ');
console.log(`1. Subjects: ${subjectNames}`);

// 2. Подсчитать общее количество студентов и учителей на всех предметах
const summary = Object.values(subjects).reduce(
	(acc, curr) => {
		return {
			students: acc.students + curr.students,
			teachers: acc.teachers + curr.teachers,
		};
	},
	{ students: 0, teachers: 0 },
);

const peopleInTotal = summary.students + summary.teachers;
console.log(`2. People in total: ${peopleInTotal}`);

// 3. Получить среднее количество студентов на всех предметах
const averageOfStudents = summary.students / Object.keys(subjects).length;
console.log(`3. Average number of students: ${averageOfStudents}`);

// 4. Создать массив из объектов предметов
const subjectsArray = Object.entries(subjects).map(([name, data]) => ({
	name,
	...data,
}));
console.log('4. Turn into array:', subjectsArray);

// 5. Получить массив из предметов
// и отсортировать по количеству преподавателей (от большего к меньшему)
const sortedSubjects = [...subjectsArray].sort((a, b) => b.teachers - a.teachers);
console.log('5. Sorted subjects:', sortedSubjects);
