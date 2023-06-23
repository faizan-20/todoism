import RightHead from "./Main";
import {displayProjects} from "./UI";

export default class Project{
    constructor(name){
        this.name = name;
    }
}

export const allProjects = [
    {
        name: 'Home'
    }
];

export const addProject = () => {
    const newProject = document.querySelector('#new-project');
    const addProjectField = document.querySelector('#add-project-field');
    const newProjectForm = document.querySelector('#new-project-form');
    const submitProject = document.querySelector('#submit-project');

    newProjectForm.style.visibility = 'hidden'; 
    newProject.addEventListener('click', () => {
        if(newProjectForm.style.visibility === 'hidden')
            newProjectForm.style.visibility = 'visible';
        else
            newProjectForm.style.visibility ='hidden'; 
    });

    submitProject.addEventListener('click', () => {
        if(addProjectField.value === ''){
            console.log('nook');
        }else{
            allProjects.push(new Project(addProjectField.value));
            addProjectField.value = '';
            newProjectForm.style.visibility = 'hidden';
            displayProjects();
            RightHead();
        }
    });

}

