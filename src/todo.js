import displayTasks from "./UI";

export default class Todo{
    constructor(title, dueDate, priority, project){
        this.title = title;
        this.dueDate = dueDate; 
        this.priority = priority;
        this.project = project;
    }
}

export let todoList = [
    {
        title: "Laundry",
        dueDate: "12-09-2022",
        priority: "high",
        project: "home"
    }
]


export const addTask = () => {
    const submitBtn = document.querySelector('#submit');
    const taskName = document.querySelector('#task-name');
    const dueDate = document.querySelector('#due-date');
    const priority = document.querySelector('#priority');
    const addTaskBtn = document.querySelector('#addTaskBtn');
    const addForm = document.querySelector('#add-form');
    
    const clearAll = () => {
        taskName.value = null;
        dueDate.value = null;
        priority.value = 'medium';
    }

    addTaskBtn.addEventListener('click', () => {
        if(addForm.style.visibility === 'hidden')
            addForm.style.visibility = 'visible';
        else
            addForm.style.visibility = 'hidden';
    });  

    submitBtn.addEventListener('click', (e) => {
        if(taskName.value === '' || dueDate.value === ''){
            console.log('ok');
        }else {
            e.preventDefault();
            todoList.push(new Todo(taskName.value, dueDate.value, priority.value, "default"));
            clearAll();
            displayTasks();
        }
    });
}