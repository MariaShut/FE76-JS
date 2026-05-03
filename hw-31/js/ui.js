export function printTodos(todos) {
	const app = document.getElementById('app');
	const ul = document.createElement('ul');

	const firstTen = todos.slice(0, 10);

	firstTen.forEach(todo => {
		const li = document.createElement('li');
		li.classList.add('todo-item');
		li.textContent = `${todo.id} ${todo.title}`;

		if (todo.completed) {
			li.classList.add('completed');
		}

		li.addEventListener('click', () => {
			li.classList.toggle('completed');
		});

		ul.appendChild(li);
	});

	app.appendChild(ul);
}
