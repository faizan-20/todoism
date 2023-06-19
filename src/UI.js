import { todoList } from "./todo";

const displayTasks = () => {
    const table = document.querySelector('#display-tasks');
    table.textContent = '';
    
    for(let i = 0; i < todoList.length; i++){
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');

        let trow = document.createElement('tr');
        trow.classList.add('trow');
        table.appendChild(trow);

        let sno = document.createElement('td');
        sno.classList.add('sno');
        trow.appendChild(sno);
        sno.appendChild(checkbox);

        let task = document.createElement('td');
        task.classList.add('task-name');
        trow.appendChild(task);
        task.textContent = todoList[i].title;

        let dueDate = document.createElement('td');
        dueDate.classList.add('due-date');
        trow.appendChild(dueDate);
        dueDate.textContent = todoList[i].dueDate;

        let priority = document.createElement('td');
        priority.classList.add('priority');
        trow.appendChild(priority);
        priority.textContent = todoList[i].priority;
        
        let deleteTask = document.createElement('td');
        deleteTask.classList.add('delete-task');
        trow.appendChild(deleteTask);
        deleteTask.textContent = 'X';
    }
}

export default displayTasks;