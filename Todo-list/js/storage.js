export function getData() {
	const data = localStorage.getItem('todos');
	return data ? JSON.parse(data) : [];
}

export function setData(todos) {
	localStorage.setItem('todos', JSON.stringify(todos));
}
