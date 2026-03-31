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

// Create Task
function createTask(taskText) {
	const taskItem = document.createElement('li');
	taskItem.classList.add('task');

	// get current date
	const date = new Date();
	const dateStr = date.toLocaleDateString('ru-RU');

	taskItem.innerHTML = `
    <div class="task__content">
      <button class="task__checkbox"></button>
      <p class="task__text">${taskText}</p>
    </div>
    <span class="task__date">${dateStr}</span>
    <button class="task__delete">✖</button>
  `;

	todoList.append(taskItem);
}

function handleAddTask() {
	const inputText = taskInput.value.trim();

	// (prevent from doom clicks on add)
	if (inputText !== '') {
		createTask(inputText);

		taskInput.value = ''; // input to be ready & empty for the next todos
		taskInput.focus(); // return focus to input for continuing typing after adding
	}
}

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
});

// Specific ToDo Item. (Event Delegation)
todoList.addEventListener('click', (event) => {
	// To Delete task
	if (event.target.classList.contains('task__delete')) {
		const taskItem = event.target.closest('.task'); // (<li>). Closest li.task to the .task__delete

		if (taskItem) {
			taskItem.remove();
		}
	}

	// To Check completed task
	if (event.target.classList.contains('task__checkbox')) {
		const taskItem = event.target.closest('.task');

		if (taskItem) {
			taskItem.classList.toggle('task_completed');
		}
	}
});

header.append(btnDeleteAll, taskInput, btnAdd);
container.append(header, todoList);
root.append(container);
