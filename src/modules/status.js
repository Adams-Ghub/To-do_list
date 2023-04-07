export const updateCompleteTodo = (data, id) => {
  const chkbox = document.getElementById(`check${id}`);
  const DATA = data;
  const text = chkbox.nextElementSibling;
  if (chkbox.checked) {
    DATA[id - 1].completed = true;
    text.classList.add('complete');
    localStorage.setItem('tasks', JSON.stringify(DATA));
  } else {
    DATA[id - 1].completed = false;
    text.classList.remove('complete');
    localStorage.setItem('tasks', JSON.stringify(DATA));
  }
};

export const clearCompleted = (data) => {
  const DATA = data;
  const filtered = DATA.filter((complete) => complete.completed === false);
  for (let i = 0; i < filtered.length; i++) {
    filtered[i].index = i + 1;
  }
  localStorage.setItem('tasks', JSON.stringify(filtered));
};