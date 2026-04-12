import { initDOM } from './dom.js';
import { initHandlers } from './handlers.js';
import { loadTasks } from './tasks.js';

const elements = initDOM(); // { taskInput, btnAdd, btnDeleteAll, todoList }
initHandlers(elements);
loadTasks(elements.todoList);
