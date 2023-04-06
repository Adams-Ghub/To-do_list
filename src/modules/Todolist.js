class TodoList {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks',)) || []
    }

    addTask(taskInfo) {
        let data = this.tasks;
        data.push(taskInfo)
        localStorage.setItem('tasks', JSON.stringify(data));
    }

    deleteTask() {

    }

    editTaks() {

    }
}

export default TodoList