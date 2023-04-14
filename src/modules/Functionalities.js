const addTask = (tasks, description) => {
  const data = tasks;
  let index = 1;
  if (data.length > 0) {
    index = data.length + 1;
  }
  const info = { description, completed: false, index };
  data.push(info);
  localStorage.setItem('tasks', JSON.stringify(data));
};

const updateList = (id, tasks) => {
  const theElement = document.getElementById(id);
  let info = theElement.textContent;
  const data = tasks;
  theElement.addEventListener('input', (e) => {
    info = e.target.textContent;
    data[id - 1].description = info;
  });

  theElement.addEventListener('blur', () => {
    theElement.parentElement.parentElement.classList.remove('active');
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

const delTodo = (id, data) => {
  const target = document.getElementById(`del${id}`);
  const filtered = data.filter((todo) => todo.index !== id);
  for (let i = 0; i < filtered.length; i++) {
    filtered[i].index = i + 1;
  }
  localStorage.setItem('tasks', JSON.stringify(filtered));
};

export { addTask, delTodo, updateList };