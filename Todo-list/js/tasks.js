import { getData, setData } from './storage.js';
import { generateId, getFormattedDate } from './utils.js';

export function loadTasks(todoList) {
	const todos = getData();

	todos.forEach((todo) => {
		createTask(todo.text, todo.isChecked, todo.date, todo.id, todoList);
	});
}

export function createTask(taskText, isChecked = false, dateStr = null, id = null, todoList) {
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

export function handleAddTask(taskInput, todoList) {
	const inputText = taskInput.value.trim();

	if (inputText !== '') {
		const newTodo = {
			id: generateId(),
			date: getFormattedDate(),
			text: inputText,
			isChecked: false,
		};

		createTask(newTodo.text, newTodo.isChecked, newTodo.date, newTodo.id, todoList);

		const todos = getData();
		todos.push(newTodo);
		setData(todos);

		taskInput.value = ''; // input to be ready & empty for the next todos
		taskInput.focus(); // return focus to input for continuing typing after adding
	}
}

// Save checked / unchecked and deletion to localStorage
export function saveTaskState(taskId, isChecked) {
	const todos = getData();
	todos.find((todo) => todo.id == taskId).isChecked = isChecked;
	setData(todos);
}

export function deleteTask(taskId) {
	const todos = getData();
	const filteredTodos = todos.filter((todo) => todo.id != taskId);
	setData(filteredTodos);
}
