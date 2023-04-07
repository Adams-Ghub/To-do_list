import _ from 'lodash';
import './style.css';
import { addTask } from './modules/Functionalities.js';
import showTodo from './modules/showTodo.js';
import domElements from './modules/domElements.js';

domElements.input.type = 'text';
domElements.input.placeholder = 'Add your list...';
domElements.input.classList.add('task-input');
domElements.refresh.classList.add('refresh-icn');
domElements.divone.classList.add('task-input-box');
domElements.clear.innerText = 'Clear all completed';
domElements.submit.classList.add('add-todo-btn');
domElements.divtwo.classList.add('clear-btn-box');
domElements.divone.appendChild(domElements.input);
domElements.divone.appendChild(domElements.submit);
domElements.todoList.appendChild(domElements.divone);
domElements.divtwo.appendChild(domElements.clear);

const DATA = JSON.parse(localStorage.getItem('tasks')) || [];

domElements.submit.addEventListener('click', () => {
  addTask(DATA, domElements.input.value);
  window.location.reload();
});

domElements.input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    domElements.submit.click();
  }
});

window.addEventListener('load', () => {
  showTodo(DATA, domElements.todoList, domElements.divtwo);
});
