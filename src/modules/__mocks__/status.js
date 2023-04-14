const clearCompleted = () => {
  let data = [{ description: 'taks 1', completed: true, index: 1 }, { description: 'taks 2', completed: false, index: 2 }];
  const filtered = data.filter((info) => info.completed === false);
  data = filtered;

  return data.length;
};

const updateCompleteTodo = (state, id) => {
  const data = [{ description: 'taks 1', completed: false, index: 1 }, { description: 'taks 2', completed: false, index: 2 }];

  data[id].completed = state;

  return data[id].completed;
};

module.exports = { clearCompleted, updateCompleteTodo };