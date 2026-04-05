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

// ===== LOCAL STORAGE =====

// 25.1 Создать ключ todos в localStorage
// 25.2 Написать две функции getDatа и setDatа для получения и записи данных в localStorage
// 25.3 Проверка: если данных нет - возвращаем []

function getData() {
	const data = localStorage.getItem('todos');
	return data ? JSON.parse(data) : [];
}

function setData(todos) {
	localStorage.setItem('todos', JSON.stringify(todos));
}

/*
const todo = {
	id: 1,
	date: '19:35 17 sept',
	text: 'Play video games',
	isChecked: true,
}
*/

function generateId() {
	return Math.round(Date.now() + Math.random());
}

function getFormattedDate() {
	const now = new Date();
	const hours = now.getHours().toString().padStart(2, '0');
	const minutes = now.getMinutes().toString().padStart(2, '0');
	const day = now.getDate();
	const month = now.toLocaleString('ru-RU', { month: 'short' }).replace('.', '');
	return `${hours}:${minutes} ${day} ${month}`;
}

function loadTasks() {
	const todos = getData();

	todos.forEach((todo) => {
		createTask(todo.text, todo.isChecked, todo.date, todo.id);
	});
}

// Create Task
function createTask(taskText, isChecked = false, dateStr = null, id = null) {
	const taskItem = document.createElement('li');
	taskItem.classList.add('task');

	if (id !== null) {
		taskItem.dataset.id = id;
	}

	if (isChecked) {
		taskItem.classList.add('task_completed');
	}

	const displayDate = dateStr || getFormattedDate();

	taskItem.innerHTML = `
    <div class="task__content">
      <button class="task__checkbox"></button>
      <p class="task__text">${taskText}</p>
    </div>
    <span class="task__date">${displayDate}</span>
    <button class="task__delete">✖</button>
  `;

	todoList.prepend(taskItem);
}

function handleAddTask() {
	const inputText = taskInput.value.trim();

	// (prevent from doom clicks on add)
	if (inputText !== '') {
		const newTodo = {
			id: generateId(),
			date: getFormattedDate(),
			text: inputText,
			isChecked: false,
		};

		createTask(inputText);

		/*
		25.4 Сохранять карточки в localStorage:
		Структура хранения данных карточек задач:
		const todos = [{}, {}, {}, {}, {}, {}, {}, {}]
		*/
		const todos = getData();
		todos.push(newTodo);
		setData(todos);
		// console.log(todos);

		taskInput.value = ''; // input to be ready & empty for the next todos
		taskInput.focus(); // return focus to input for continuing typing after adding
	}
}

// 25. Save checked / unchecked and deletion to localStorage
function saveTaskState(taskId, isChecked) {
	const todos = getData();
	todos.find((todo) => todo.id == taskId).isChecked = isChecked;
	setData(todos);
}

function deleteTask(taskId) {
	const todos = getData();
	const filteredTodos = todos.filter((todo) => todo.id != taskId);
	setData(filteredTodos);
}

// ===== EVENTS =====

// To Add on button click
btnAdd.addEventListener('click', handleAddTask);
// To Add on enter
taskInput.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		handleAddTask();
	}
});

// To Delete all
btnDeleteAll.addEventListener('click', () => {
	todoList.innerHTML = '';
	setData([]);
});

// Specific ToDo Item
todoList.addEventListener('click', (event) => {
	const taskItem = event.target.closest('.task'); // (<li>). Closest li.task to the .task__delete
	if (!taskItem) return;

	const taskId = taskItem.dataset.id;

	// To Delete task
	if (event.target.classList.contains('task__delete')) {
		taskItem.remove();
		if (taskId) deleteTask(taskId);
	}

	// To Check completed task
	if (event.target.classList.contains('task__checkbox')) {
		const isChecked = taskItem.classList.toggle('task_completed');
		if (taskId) {
			saveTaskState(taskId, isChecked);
		}
	}
});

header.append(btnDeleteAll, taskInput, btnAdd);
container.append(header, todoList);
root.append(container);

loadTasks();
