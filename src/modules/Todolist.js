class TodoList {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks',)) || []
    }

    addTask(taskInfo) {
        let data = this.tasks;
        data.push(taskInfo)
        localStorage.setItem('tasks', JSON.stringify(data));
    }

    updateList(id) {
        let theElement = document.getElementById(id);
        let info = theElement.textContent
        let data = this.tasks;
        theElement.addEventListener('input', (e) => {
            info = e.target.textContent
            console.log(id)
            data[id - 1].description = info;

        })
        theElement.addEventListener('blur', () => {
            localStorage.setItem('tasks', JSON.stringify(data))
            theElement.parentElement.parentElement.classList.remove('active')
        })

    }

    deleteTask(id) {

    }

    editTaks() {

    }
}

export default TodoList