import displayTasks from "./UI";
import { allProjects } from "./projects";

const RightHead = () => {
    const rightHead = document.querySelector('#rightHeading');
    const projects = document.querySelectorAll('.newProject');
    rightHead.textContent = allProjects[0].name;
    projects.forEach((p) => {
        p.addEventListener('click', () => {
            let i = p.getAttribute('data-project');
            rightHead.textContent = allProjects[i].name;
            displayTasks();
        })
    })
}

export const ProjectSelect = () => {
    const select = document.querySelector('#select-project');
    select.textContent = '';
    
    for(let i = 0; i < allProjects.length; i++){
        const option = document.createElement('option');
        select.appendChild(option);
        option.value = allProjects[i].name;
        option.textContent = allProjects[i].name;
    }

}

export default RightHead;