import RightHead from "./Main";
import displayTasks, { displayProjects } from "./UI";
import { addProject } from "./projects";
import { addTask, todoList } from "./todo";

addTask();
addProject();
displayTasks();
displayProjects();
RightHead();