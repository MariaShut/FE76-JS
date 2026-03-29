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

const task1 = document.createElement('li');
task1.classList.add('task');
task1.innerHTML = `
  <div class="task__content">
    <button class="task__checkbox"></button>
    <p class="task__text">To do text</p>
  </div>
  <span class="task__date">28/03/2026</span>
  <button class="task__delete">✖</button>
`;

const task2 = document.createElement('li');
task2.classList.add('task', 'task_completed');
task2.innerHTML = `
  <div class="task__content">
    <button class="task__checkbox"></button>
    <p class="task__text">To do text</p>
  </div>
  <span class="task__date">28/03/2026</span>
  <button class="task__delete">✖</button>
`;

header.append(btnDeleteAll, taskInput, btnAdd);
todoList.append(task1, task2);
container.append(header, todoList);
root.append(container);
