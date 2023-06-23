import RightHead, { ProjectSelect } from "./Main";
import displayTasks, { displayProjects } from "./UI";
import { addProject } from "./projects";
import { addTask } from "./todo";

addTask();
addProject();
RightHead();
displayTasks();
displayProjects();
ProjectSelect();