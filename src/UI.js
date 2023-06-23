import { allProjects } from "./projects";
import { todoList } from "./todo";

const displayTasks = () => {
    const table = document.querySelector('#display-tasks');
    table.textContent = '';
    
    for(let i = 0; i < todoList.length; i++){
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.classList.add('check');
        checkbox.setAttribute('data-index', i);

        let trow = document.createElement('tr');
        trow.classList.add(`trow${i}`, 'trow');
        trow.setAttribute('data-index', i);
        trow.id = 'row';
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
        deleteTask.classList.add(`delete-task${i}`, 'delete-task');
        trow.appendChild(deleteTask);
        deleteTask.textContent = 'X';
        deleteTask.setAttribute('data-index', i);
    }

    const check = document.querySelectorAll('.check');
    check.forEach((box) => {
        box.addEventListener('click', ()=> {
            const index = box.getAttribute('data-index');
            const row = document.querySelector(`.trow${index}`);
            if (box.checked){
                row.style.color = '#7c7c7c'
            }else{
                row.style.color = '#2B2D42'
            }
        });
    });

    const row = document.querySelectorAll('.trow');
    row.forEach((row) => {
        row.addEventListener('mouseenter', () => {
            let i = row.getAttribute('data-index');
            const deleteTask = document.querySelector(`.delete-task${i}`);
            row.style.backgroundColor = '#9ee4ff87';
            deleteTask.style.visibility = 'visible';
        });
        row.addEventListener('mouseleave', () => {
            let i = row.getAttribute('data-index');
            const deleteTask = document.querySelector(`.delete-task${i}`);
            row.style.backgroundColor = '#EDF2F4';
            deleteTask.style.visibility = 'hidden';
        });
    });

    const deleteTask = document.querySelectorAll('.delete-task');
    deleteTask.forEach((task) => {
        task.addEventListener('click', () => {
            let i = task.getAttribute('data-index');
            console.log(i);
            console.log(todoList);
            if (i > -1){
                todoList.splice(i, 1);
            }
            displayTasks();
        });
    })
}

export default displayTasks;

export const displayProjects = () => {
    const projectsDisplay = document.querySelector('#projects-display');
    projectsDisplay.textContent = '';

    for(let i = 0; i < allProjects.length; i++){
        const newProject = document.createElement('div');
        newProject.classList.add('newProject');
        newProject.setAttribute('data-project', i);
        projectsDisplay.appendChild(newProject);
        newProject.textContent = allProjects[i].name;
    }
}