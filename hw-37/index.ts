import { films } from './hw37.js';

interface IFilm {
	id: number;
	title: string;
	year: number;
	released: string;
	runtime: string;
	genre: string[];
	director: string;
	writer: string;
	actors: string[];
	plot: string;
	country: string;
	poster: string;
	imdbRating: number;
	imdbVotes: number;
	type: string;
	boxOffice: string;
	production: string;
}

// приведение к типу, т.к. импорт из JS.
// TS считывает как any
const filmsList = films as IFilm[];

// 1. Собрать в массив все жанры фильмов (без повторения)

const allGenres = [...new Set(filmsList.flatMap(film => film.genre))];
console.log('1. Все жанры:', allGenres);

// 2. Собрать в массив всех актеров всех фильмов (без повторения)

const allActors = [...new Set(filmsList.flatMap(film => film.actors))];
console.log('2. Все актеры:', allActors);

// 3. Сортировать фильмы по рейтингу по убыванию

const sortedFilms = filmsList.slice().sort((a, b) => b.imdbRating - a.imdbRating);
console.log('3. Сортировка по рейтингу:', sortedFilms);

// 4. Создать новый массив, где объекты фильмов будут состоять из следующих полей:
// id, title, released, plot

type FilmPreview = Pick<IFilm, 'id' | 'title' | 'released' | 'plot'>;

const filmsPreview: FilmPreview[] = filmsList.map(({ id, title, released, plot }) => ({
	id,
	title,
	released,
	plot,
}));

console.log('4. Превью фильмов:', filmsPreview);

// 5. Создать функцию, которая принимает массив фильмов и год выхода фильма.
// А результатом этой функции должен быть отфильтрованный массив, с фильмами
// где переданный год равен году выхода фильма.

// getYear(films, 2001) => объект id = 5

const getYear = (list: IFilm[], year: number): IFilm[] => {
	return list.filter(film => film.year === year);
};

console.log('5. Фильтр по году:', getYear(filmsList, 2001));

// 6. Создать функцию, которая бы принимала массив фильмов и строку.
// А результатом этой функции должен быть новый отфильтрованный массив,
// с фильмами, где строка входит в название фильма или в его сюжет.

// getFilm(films, "Potter") => объект id = 2,4,5

const getFilm = (list: IFilm[], query: string): IFilm[] => {
	const keyword = query.toLowerCase();

	return list.filter(film => film.title.toLowerCase().includes(keyword) || film.plot.toLowerCase().includes(keyword));
};

console.log("6. Поиск 'Potter':", getFilm(filmsList, 'Potter'));
