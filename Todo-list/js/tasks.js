import { getData, setData } from './storage.js';
import { generateId, getFormattedDate } from './utils.js';

export function loadTasks(todoList) {
	const todos = getData();

	todos.forEach((todo) => createTask({ ...todo, todoList }));
}

export function createTask({ text, isChecked = false, date = null, id = null, todoList }) {
	const taskItem = document.createElement('li');
	taskItem.classList.add('task');

	if (id !== null) {
		taskItem.dataset.id = id;
	}

	if (isChecked) {
		taskItem.classList.add('task_completed');
	}

	const displayDate = date || getFormattedDate();

	taskItem.innerHTML = `
    <div class="task__content">
      <button class="task__checkbox"></button>
      <p class="task__text">${text}</p>
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

		createTask({ ...newTodo, todoList });

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
	const todo = todos.find((todo) => todo.id == taskId);
	if (todo) todo.isChecked = isChecked;
	setData(todos);
}

export function deleteTask(taskId) {
	const todos = getData();
	const filteredTodos = todos.filter((todo) => todo.id != taskId);
	setData(filteredTodos);
}
