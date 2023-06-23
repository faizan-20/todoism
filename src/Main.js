import { allProjects } from "./projects";

const RightHead = () => {
    const rightHead = document.querySelector('#rightHeading');
    const projects = document.querySelectorAll('.newProject');
    rightHead.textContent = allProjects[0].name;
    projects.forEach((p) => {
        p.addEventListener('click', () => {
            let i = p.getAttribute('data-project');
            rightHead.textContent = allProjects[i].name;
        })
    })
}

export default RightHead;