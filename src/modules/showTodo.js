import { replaceBtn, updateList } from './Functionalities.js';

const showTodo = (data, list, divtwo) => {
  for (let i = 0; i < data.length; i++) {
    const div = document.createElement('div');
    const listInput = document.createElement('label');
    const checkbox = document.createElement('input');
    const li = document.createElement('li');
    const menu = document.createElement('img');
    const del = document.createElement('img');
    del.classList.add('del-icon');
    del.id = `del${data[i].index}`;
    del.classList.add('hide');
    menu.classList.add('list-menu-icn');
    menu.id = `menu${data[i].index}`;
    li.classList.add('list-item');
    checkbox.type = 'checkbox';

    listInput.innerText = data[i].description;
    listInput.classList.add('list-input');
    listInput.id = data[i].index;
    listInput.setAttribute('contentEditable', 'true');
    listInput.setAttribute('disabled', 'true');
    div.classList.add('check-input-box');
    div.appendChild(checkbox);

    listInput.addEventListener('click', (e) => {
      const { id } = e.target;
      const select = document.getElementById(id);
      select.setAttribute('disabled', 'false');
      updateList(id, data);
      select.parentElement.parentElement.classList.add('active');
      replaceBtn(`#menu${id}`, `#del${id}`);
    });

    div.appendChild(listInput);
    li.appendChild(div);
    li.appendChild(menu);
    li.appendChild(del);
    list.appendChild(li);
  }
  list.appendChild(divtwo);
};

export default showTodo;