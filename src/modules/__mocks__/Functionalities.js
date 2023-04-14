const addTask = (description) => {
  const data = [];
  let index = 1;
  if (data.length > 0) {
    index = data.length + 1;
  }
  const info = { description, completed: false, index };
  data.push(info);
  return data.length;
};

const delTodo = (id) => {
  let data = [{ description: 'taks 1', completed: false, index: 1 }, { description: 'taks 2', completed: false, index: 2 }];
  const filtered = data.filter((todo) => todo.index !== id);
  for (let i = 0; i < filtered.length; i++) {
    filtered[i].index = i + 1;
  }
  data = filtered;
  return data.length;
};

const updateList = (id, text) => {
  const data = [{ description: 'taks 1', completed: false, index: 1 }, { description: 'taks 2', completed: false, index: 2 }];
  data[id].description = text;

  return data[id].description;
};

module.exports = { addTask, delTodo, updateList };