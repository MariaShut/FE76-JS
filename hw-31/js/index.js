import { getTodos } from './api.js';
import { printTodos } from './ui.js';

async function init() {
	try {
		const data = await getTodos();
		printTodos(data);
	} catch (error) {
		console.error('Ошибка:', error);
	}
}

init();
