import { delTodo, updateList } from './Functionalities.js';

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
    li.id = `list${data[i].index}`;
    checkbox.type = 'checkbox';

    listInput.innerText = data[i].description;
    listInput.classList.add('list-input');
    listInput.id = data[i].index;
    listInput.setAttribute('contentEditable', 'true');
    listInput.setAttribute('disabled', 'true');
    div.classList.add('check-input-box');
    div.appendChild(checkbox);

    listInput.addEventListener('mouseover', (e) => {
      const { id } = e.target;
      const theMenu = document.querySelector(`#menu${id}`);
      const theDel = document.querySelector(`#del${id}`);
      const select = document.getElementById(id);
      select.setAttribute('disabled', 'false');
      updateList(id, data);
      select.parentElement.parentElement.classList.add('active');
      theMenu.classList.add('hide');
      theDel.classList.remove('hide');
    });

    li.addEventListener('mouseleave', (e) => {
      const theli = e.target;
      theli.classList.remove('active');
      const { children } = theli;
      children[1].classList.remove('hide');
      children[2].classList.add('hide');
    });

    del.addEventListener('click', (e) => {
      delTodo(data[i].index, data);
      window.location.reload();
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