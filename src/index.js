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
    const listInput = document.createElement('label');
    const checkbox = document.createElement('input');
    const li = document.createElement('li');
    const menu = document.createElement('img');
    const del = document.createElement('img');
    del.classList.add('del-icon');
    del.classList.add("hide");
    menu.classList.add('list-menu-icn');
    li.classList.add('list-item');
    checkbox.type = 'checkbox';

    listInput.innerText = Todo.tasks[i].description;
    listInput.classList.add('list-input')
    listInput.id = Todo.tasks[i].index;
    listInput.setAttribute('contentEditable', 'true');
    listInput.setAttribute('disabled', 'true')
    div.classList.add('check-input-box');
    div.appendChild(checkbox);

    listInput.addEventListener('click', (e) => {
      let id = e.target.id;
      let select = document.getElementById(id);
      select.setAttribute('disabled', 'false');
      Todo.updateList(id);
      select.parentElement.parentElement.classList.add('active')

    });





    // listInput.addEventListener('focus', (e) => {
    //   let id = e.target.id;
    //   let delIcn = document.getElementsByClassName('del-icon');
    //   // let menu = document.getElementsByClassName();
    //   let select = document.getElementById(id);
    //   select.parentElement.parentElement.classList.add('active');
    //   delIcn.classList.add('hide')

    // })

    div.appendChild(listInput);
    li.appendChild(div);
    li.appendChild(menu);
    li.appendChild(del)
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

const input = document.querySelectorAll('.list-input');



