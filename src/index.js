import _ from 'lodash';
import './style.css';
import TodoList from './modules/Todolist';
import domElements from './modules/domElements';


const Todo = new TodoList()

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

const showTodo = () => {
  for (let i = 0; i < Todo.tasks.length; i++) {
    const div = document.createElement('div');
    const listInput = document.createElement('input');
    const checkbox = document.createElement('input');
    const li = document.createElement('li');
    const menu = document.createElement('img');
    menu.classList.add('list-menu-icn');
    li.classList.add('list-item');
    checkbox.type = 'checkbox';
    checkbox.id = Todo.tasks[i].index;

    listInput.value = Todo.tasks[i].description;
    listInput.classList.add('list-input')
    listInput.disabled = true;
    div.appendChild(checkbox);
    div.appendChild(listInput);
    li.appendChild(div);
    li.appendChild(menu);
    domElements.todoList.appendChild(li);
  }
  domElements.todoList.appendChild(domElements.divtwo);
};

domElements.submit.addEventListener('click', () => {
  let index = 1;
  if (Todo.tasks.length > 0) {
    index = Todo.tasks.length + 1;
  }
  let info = { description: domElements.input.value, completed: false, index };
  Todo.addTask(info);
  window.location.reload()
})

domElements.input.addEventListener('keypress', (e) => {
  if (e.key === "Enter") {
    domElements.submit.click();
  }

})

window.addEventListener('load', () => {
  showTodo();
});
