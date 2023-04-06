// import _ from 'lodash';
// import './style.css';

const TASKS = [
  {
    description: 'Task one',
    complete: true,
    index: 0,
  },
  {
    description: 'Task two',
    complete: true,
    index: 1,
  },
  {
    description: 'Task three',
    complete: true,
    index: 2,
  },
  {
    description: 'Task four',
    complete: true,
    index: 3,
  },
];

const todoList = document.querySelector('.todo-list');
const todoTitleBox = document.createElement('div');
const refresh = document.createElement('img');
const title = document.createElement('p');
const input = document.createElement('input');
const divone = document.createElement('div');
const divtwo = document.createElement('div');
const clear = document.createElement('a');
const submit = document.createElement('img');

title.innerText = "Today's To Do";
title.classList.add('title-text');
input.type = 'text';
input.placeholder = 'Add your list...';
input.classList.add('task-input');
refresh.classList.add('refresh-icn');
todoTitleBox.classList.add('title-ref-box');
todoTitleBox.appendChild(title);
todoTitleBox.appendChild(refresh);
divone.classList.add('task-input-box');
clear.innerText = 'Clear all completed';
submit.classList.add('add-todo-btn');
divtwo.classList.add('clear-btn-box');
divone.appendChild(input);
divone.appendChild(submit);
todoList.appendChild(todoTitleBox);
todoList.appendChild(divone);
divtwo.appendChild(clear);

const showTodo = () => {
  for (let i = 0; i < TASKS.length; i++) {
    const div = document.createElement('div');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    const li = document.createElement('li');
    const menu = document.createElement('img');
    menu.classList.add('list-menu-icn');
    li.classList.add('list-item');
    checkbox.type = 'checkbox';
    checkbox.id = TASKS[i].index;
    label.for = TASKS[i].index;

    label.innerText = TASKS[i].description;
    div.appendChild(checkbox);
    div.appendChild(label);
    li.appendChild(div);
    li.appendChild(menu);
    todoList.appendChild(li);
  }
  todoList.appendChild(divtwo);
};

window.addEventListener('load', () => {
  showTodo();
});
