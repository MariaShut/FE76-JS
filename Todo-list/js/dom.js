export function initDOM() {
	const root = document.getElementById('root');

	const container = document.createElement('div');
	container.classList.add('container');

	// Create header
	const header = document.createElement('header');
	header.classList.add('header');

	const btnDeleteAll = document.createElement('button');
	btnDeleteAll.classList.add('header__btn', 'btn');
	btnDeleteAll.textContent = 'Delete All';

	const taskInput = document.createElement('input');
	taskInput.classList.add('header__input');
	taskInput.type = 'text';
	taskInput.name = 'task';
	taskInput.placeholder = 'Enter todo ...';

	const btnAdd = document.createElement('button');
	btnAdd.classList.add('header__btn', 'btn');
	btnAdd.textContent = 'Add';

	// Create List
	const todoList = document.createElement('ul');
	todoList.classList.add('todo-list');

	header.append(btnDeleteAll, taskInput, btnAdd);
	container.append(header, todoList);
	root.append(container);

	return { taskInput, btnAdd, btnDeleteAll, todoList };
}
