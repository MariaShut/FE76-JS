import { handleAddTask, saveTaskState, deleteTask } from './tasks.js';
import { setData } from './storage.js';

export function initHandlers({ taskInput, btnAdd, btnDeleteAll, todoList }) {
	// To Add on button click
	btnAdd.addEventListener('click', () => handleAddTask(taskInput, todoList));
	// To Add on enter
	taskInput.addEventListener('keydown', (event) => {
		if (event.key === 'Enter') {
			handleAddTask(taskInput, todoList);
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
}
