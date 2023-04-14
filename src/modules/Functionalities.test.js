const { addTask, delTodo, updateList } = require('./Functionalities.js');
const { clearCompleted, updateCompleteTodo } = require('./status.js');

// Import the function to test
jest.mock('./Functionalities');
jest.mock('./status');

describe('test add and remove', () => {
  test('add task', () => {
    const result = addTask('Task one');

    expect(result).toBe(1);
  });
  test('delete task', () => {
    const result = delTodo(1);

    expect(result).toBe(1);
  });
});
