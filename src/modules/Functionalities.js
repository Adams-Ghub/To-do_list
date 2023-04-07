export const addTask = (tasks, description) => {
  const data = tasks;
  let index = 1;
  if (data.length > 0) {
    index = data.length + 1;
  }
  const info = { description, completed: false, index };
  data.push(info);
  localStorage.setItem('tasks', JSON.stringify(data));
};

export const updateList = (id, tasks) => {
  const theElement = document.getElementById(id);
  const del = document.getElementById(`del${id}`);
  const menu = document.getElementById(`menu${id}`);
  let info = theElement.textContent;
  const data = tasks;
  theElement.addEventListener('input', (e) => {
    info = e.target.textContent;
    data[id - 1].description = info;
  });

  theElement.addEventListener('blur', () => {
    theElement.parentElement.parentElement.classList.remove('active');
    menu.classList.remove('hide');
    del.classList.add('hide');
    id *= 1;
    if (info === '') {
      const filtered = data.filter((proj) => proj.index !== id);
      for (let i = 0; i < filtered.length; i++) {
        filtered[i].index = i + 1;
      }
      localStorage.setItem('tasks', JSON.stringify(filtered));
      window.location.reload();
    } else { localStorage.setItem('tasks', JSON.stringify(data)); }
  });
};

export const replaceBtn = (find, replace) => {
  const substitute = document.querySelector(replace);
  const out = document.querySelector(find);
  out.classList.add('hide');
  substitute.classList.remove('hide');
};