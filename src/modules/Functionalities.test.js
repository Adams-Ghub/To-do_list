const {addTask} = require('./Functionalities');

// Import the function to test
jest.mock('./Functionalities')

describe('test add and remove',()=>{
  test('add task',()=>{
    const result = addTask('Task one');

    expect(result).toBe(1)
  })

})
