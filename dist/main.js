/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Main.js":
/*!*********************!*\
  !*** ./src/Main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectSelect: () => (/* binding */ ProjectSelect),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/UI.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");



const RightHead = () => {
    const rightHead = document.querySelector('#rightHeading');
    const projects = document.querySelectorAll('.newProject');
    rightHead.textContent = _projects__WEBPACK_IMPORTED_MODULE_1__.allProjects[0].name;
    projects.forEach((p) => {
        p.addEventListener('click', () => {
            let i = p.getAttribute('data-project');
            rightHead.textContent = _projects__WEBPACK_IMPORTED_MODULE_1__.allProjects[i].name;
            (0,_UI__WEBPACK_IMPORTED_MODULE_0__["default"])();
        })
    })
}

const ProjectSelect = () => {
    const select = document.querySelector('#select-project');
    select.textContent = '';
    
    for(let i = 0; i < _projects__WEBPACK_IMPORTED_MODULE_1__.allProjects.length; i++){
        const option = document.createElement('option');
        select.appendChild(option);
        option.value = _projects__WEBPACK_IMPORTED_MODULE_1__.allProjects[i].name;
        option.textContent = _projects__WEBPACK_IMPORTED_MODULE_1__.allProjects[i].name;
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RightHead);

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   displayProjects: () => (/* binding */ displayProjects)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");



const displayTasks = () => {
    const table = document.querySelector('#display-tasks');
    const rightHead = document.querySelector('#rightHeading');
    table.textContent = '';

    const taskDisplay = (i) => {
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
        task.textContent = _todo__WEBPACK_IMPORTED_MODULE_1__.todoList[i].title;
    
        let dueDate = document.createElement('td');
        dueDate.classList.add('due-date');
        trow.appendChild(dueDate);
        dueDate.textContent = _todo__WEBPACK_IMPORTED_MODULE_1__.todoList[i].dueDate;
    
        let priority = document.createElement('td');
        priority.classList.add('priority');
        trow.appendChild(priority);
        priority.textContent = _todo__WEBPACK_IMPORTED_MODULE_1__.todoList[i].priority;
        
        let deleteTask = document.createElement('td');
        deleteTask.classList.add(`delete-task${i}`, 'delete-task');
        trow.appendChild(deleteTask);
        deleteTask.textContent = 'X';
        deleteTask.setAttribute('data-index', i);        
    }
    
    for(let i = 0; i < _todo__WEBPACK_IMPORTED_MODULE_1__.todoList.length; i++){
        if (rightHead.textContent === 'Home') {
            taskDisplay(i);
        }
        else if(rightHead.textContent === _todo__WEBPACK_IMPORTED_MODULE_1__.todoList[i].project && rightHead.textContent !== 'Home'){
            taskDisplay(i);
        }
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
            console.log(_todo__WEBPACK_IMPORTED_MODULE_1__.todoList);
            if (i > -1){
                _todo__WEBPACK_IMPORTED_MODULE_1__.todoList.splice(i, 1);
            }
            displayTasks();
        });
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTasks);

const displayProjects = () => {
    const projectsDisplay = document.querySelector('#projects-display');
    projectsDisplay.textContent = '';

    for(let i = 0; i < _projects__WEBPACK_IMPORTED_MODULE_0__.allProjects.length; i++){
        const newProject = document.createElement('div');
        newProject.classList.add('newProject');
        newProject.setAttribute('data-project', i);
        projectsDisplay.appendChild(newProject);
        newProject.textContent = _projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].name;
    }
}

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   allProjects: () => (/* binding */ allProjects),
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main */ "./src/Main.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./src/UI.js");



class Project{
    constructor(name){
        this.name = name;
    }
}

const allProjects = [
    {
        name: 'Home'
    }
];

const addProject = () => {
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
            (0,_UI__WEBPACK_IMPORTED_MODULE_1__["default"])();
            (0,_UI__WEBPACK_IMPORTED_MODULE_1__.displayProjects)();
            (0,_Main__WEBPACK_IMPORTED_MODULE_0__["default"])();
            (0,_Main__WEBPACK_IMPORTED_MODULE_0__.ProjectSelect)();
        }
    });

}



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   "default": () => (/* binding */ Todo),
/* harmony export */   todoList: () => (/* binding */ todoList)
/* harmony export */ });
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/UI.js");


class Todo{
    constructor(title, dueDate, priority, project){
        this.title = title;
        this.dueDate = dueDate; 
        this.priority = priority;
        this.project = project;
    }
}

let todoList = [
    {
        title: "Laundry",
        dueDate: "12-09-2022",
        priority: "high",
        project: "Home"
    }
]


const addTask = () => {
    const submitBtn = document.querySelector('#submit');
    const taskName = document.querySelector('#task-name');
    const dueDate = document.querySelector('#due-date');
    const priority = document.querySelector('#priority');
    const project = document.querySelector('#select-project');
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
            todoList.push(new Todo(taskName.value, dueDate.value, priority.value, project.value));
            clearAll();
            (0,_UI__WEBPACK_IMPORTED_MODULE_0__["default"])();
        }
    });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main */ "./src/Main.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./src/UI.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ "./src/todo.js");





(0,_todo__WEBPACK_IMPORTED_MODULE_3__.addTask)();
(0,_projects__WEBPACK_IMPORTED_MODULE_2__.addProject)();
(0,_Main__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_UI__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_UI__WEBPACK_IMPORTED_MODULE_1__.displayProjects)();
(0,_Main__WEBPACK_IMPORTED_MODULE_0__.ProjectSelect)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTmtEO0FBQ0c7QUFDYjtBQUNQOztBQUVqQyw4Q0FBTztBQUNQLHFEQUFVO0FBQ1YsaURBQVM7QUFDVCwrQ0FBWTtBQUNaLG9EQUFlO0FBQ2Ysb0RBQWEsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9pc20vLi9zcmMvTWFpbi5qcyIsIndlYnBhY2s6Ly90b2RvaXNtLy4vc3JjL1VJLmpzIiwid2VicGFjazovL3RvZG9pc20vLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2lzbS8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG9pc20vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2lzbS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2lzbS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9pc20vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvaXNtLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkaXNwbGF5VGFza3MgZnJvbSBcIi4vVUlcIjtcbmltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcblxuY29uc3QgUmlnaHRIZWFkID0gKCkgPT4ge1xuICAgIGNvbnN0IHJpZ2h0SGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyaWdodEhlYWRpbmcnKTtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZXdQcm9qZWN0Jyk7XG4gICAgcmlnaHRIZWFkLnRleHRDb250ZW50ID0gYWxsUHJvamVjdHNbMF0ubmFtZTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgIHAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgaSA9IHAuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnKTtcbiAgICAgICAgICAgIHJpZ2h0SGVhZC50ZXh0Q29udGVudCA9IGFsbFByb2plY3RzW2ldLm5hbWU7XG4gICAgICAgICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3QgUHJvamVjdFNlbGVjdCA9ICgpID0+IHtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0LXByb2plY3QnKTtcbiAgICBzZWxlY3QudGV4dENvbnRlbnQgPSAnJztcbiAgICBcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYWxsUHJvamVjdHMubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IGFsbFByb2plY3RzW2ldLm5hbWU7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGFsbFByb2plY3RzW2ldLm5hbWU7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJpZ2h0SGVhZDsiLCJpbXBvcnQgeyBhbGxQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgeyB0b2RvTGlzdCB9IGZyb20gXCIuL3RvZG9cIjtcblxuY29uc3QgZGlzcGxheVRhc2tzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rpc3BsYXktdGFza3MnKTtcbiAgICBjb25zdCByaWdodEhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmlnaHRIZWFkaW5nJyk7XG4gICAgdGFibGUudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGNvbnN0IHRhc2tEaXNwbGF5ID0gKGkpID0+IHtcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2snKTtcbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaSk7XG4gICAgXG4gICAgICAgIGxldCB0cm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgdHJvdy5jbGFzc0xpc3QuYWRkKGB0cm93JHtpfWAsICd0cm93Jyk7XG4gICAgICAgIHRyb3cuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaSk7XG4gICAgICAgIHRyb3cuaWQgPSAncm93JztcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodHJvdyk7XG4gICAgXG4gICAgICAgIGxldCBzbm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBzbm8uY2xhc3NMaXN0LmFkZCgnc25vJyk7XG4gICAgICAgIHRyb3cuYXBwZW5kQ2hpbGQoc25vKTtcbiAgICAgICAgc25vLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICBcbiAgICAgICAgbGV0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbmFtZScpO1xuICAgICAgICB0cm93LmFwcGVuZENoaWxkKHRhc2spO1xuICAgICAgICB0YXNrLnRleHRDb250ZW50ID0gdG9kb0xpc3RbaV0udGl0bGU7XG4gICAgXG4gICAgICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdkdWUtZGF0ZScpO1xuICAgICAgICB0cm93LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gdG9kb0xpc3RbaV0uZHVlRGF0ZTtcbiAgICBcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcbiAgICAgICAgdHJvdy5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gdG9kb0xpc3RbaV0ucHJpb3JpdHk7XG4gICAgICAgIFxuICAgICAgICBsZXQgZGVsZXRlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIGRlbGV0ZVRhc2suY2xhc3NMaXN0LmFkZChgZGVsZXRlLXRhc2ske2l9YCwgJ2RlbGV0ZS10YXNrJyk7XG4gICAgICAgIHRyb3cuYXBwZW5kQ2hpbGQoZGVsZXRlVGFzayk7XG4gICAgICAgIGRlbGV0ZVRhc2sudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgIGRlbGV0ZVRhc2suc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaSk7ICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYgKHJpZ2h0SGVhZC50ZXh0Q29udGVudCA9PT0gJ0hvbWUnKSB7XG4gICAgICAgICAgICB0YXNrRGlzcGxheShpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHJpZ2h0SGVhZC50ZXh0Q29udGVudCA9PT0gdG9kb0xpc3RbaV0ucHJvamVjdCAmJiByaWdodEhlYWQudGV4dENvbnRlbnQgIT09ICdIb21lJyl7XG4gICAgICAgICAgICB0YXNrRGlzcGxheShpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrJyk7XG4gICAgY2hlY2suZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBib3guZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudHJvdyR7aW5kZXh9YCk7XG4gICAgICAgICAgICBpZiAoYm94LmNoZWNrZWQpe1xuICAgICAgICAgICAgICAgIHJvdy5zdHlsZS5jb2xvciA9ICcjN2M3YzdjJ1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcm93LnN0eWxlLmNvbG9yID0gJyMyQjJENDInXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRyb3cnKTtcbiAgICByb3cuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICAgIHJvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGkgPSByb3cuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmRlbGV0ZS10YXNrJHtpfWApO1xuICAgICAgICAgICAgcm93LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjOWVlNGZmODcnO1xuICAgICAgICAgICAgZGVsZXRlVGFzay5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICB9KTtcbiAgICAgICAgcm93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgaSA9IHJvdy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZGVsZXRlLXRhc2ske2l9YCk7XG4gICAgICAgICAgICByb3cuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNFREYyRjQnO1xuICAgICAgICAgICAgZGVsZXRlVGFzay5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGVsZXRlVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUtdGFzaycpO1xuICAgIGRlbGV0ZVRhc2suZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGkgPSB0YXNrLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RvTGlzdCk7XG4gICAgICAgICAgICBpZiAoaSA+IC0xKXtcbiAgICAgICAgICAgICAgICB0b2RvTGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlUYXNrcztcblxuZXhwb3J0IGNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0c0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMtZGlzcGxheScpO1xuICAgIHByb2plY3RzRGlzcGxheS50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFsbFByb2plY3RzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ25ld1Byb2plY3QnKTtcbiAgICAgICAgbmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcsIGkpO1xuICAgICAgICBwcm9qZWN0c0Rpc3BsYXkuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XG4gICAgICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBhbGxQcm9qZWN0c1tpXS5uYW1lO1xuICAgIH1cbn0iLCJpbXBvcnQgUmlnaHRIZWFkLCB7IFByb2plY3RTZWxlY3QgfSBmcm9tIFwiLi9NYWluXCI7XG5pbXBvcnQgZGlzcGxheVRhc2tzLCB7ZGlzcGxheVByb2plY3RzfSBmcm9tIFwiLi9VSVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0e1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFsbFByb2plY3RzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ0hvbWUnXG4gICAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IGFkZFByb2plY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdCcpO1xuICAgIGNvbnN0IGFkZFByb2plY3RGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdC1maWVsZCcpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0LWZvcm0nKTtcbiAgICBjb25zdCBzdWJtaXRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC1wcm9qZWN0Jyk7XG5cbiAgICBuZXdQcm9qZWN0Rm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7IFxuICAgIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmKG5ld1Byb2plY3RGb3JtLnN0eWxlLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nKVxuICAgICAgICAgICAgbmV3UHJvamVjdEZvcm0uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgbmV3UHJvamVjdEZvcm0uc3R5bGUudmlzaWJpbGl0eSA9J2hpZGRlbic7IFxuICAgIH0pO1xuXG4gICAgc3VibWl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYoYWRkUHJvamVjdEZpZWxkLnZhbHVlID09PSAnJyl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm9vaycpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGFsbFByb2plY3RzLnB1c2gobmV3IFByb2plY3QoYWRkUHJvamVjdEZpZWxkLnZhbHVlKSk7XG4gICAgICAgICAgICBhZGRQcm9qZWN0RmllbGQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIG5ld1Byb2plY3RGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICAgICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgICAgICAgICBSaWdodEhlYWQoKTtcbiAgICAgICAgICAgIFByb2plY3RTZWxlY3QoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG59XG5cbiIsImltcG9ydCBkaXNwbGF5VGFza3MgZnJvbSBcIi4vVUlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb3tcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3Qpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7IFxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgfVxufVxuXG5leHBvcnQgbGV0IHRvZG9MaXN0ID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiTGF1bmRyeVwiLFxuICAgICAgICBkdWVEYXRlOiBcIjEyLTA5LTIwMjJcIixcbiAgICAgICAgcHJpb3JpdHk6IFwiaGlnaFwiLFxuICAgICAgICBwcm9qZWN0OiBcIkhvbWVcIlxuICAgIH1cbl1cblxuXG5leHBvcnQgY29uc3QgYWRkVGFzayA9ICgpID0+IHtcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0Jyk7XG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1uYW1lJyk7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZScpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3QtcHJvamVjdCcpO1xuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVGFza0J0bicpO1xuICAgIGNvbnN0IGFkZEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWZvcm0nKTtcbiAgICBcbiAgICBjb25zdCBjbGVhckFsbCA9ICgpID0+IHtcbiAgICAgICAgdGFza05hbWUudmFsdWUgPSBudWxsO1xuICAgICAgICBkdWVEYXRlLnZhbHVlID0gbnVsbDtcbiAgICAgICAgcHJpb3JpdHkudmFsdWUgPSAnbWVkaXVtJztcbiAgICB9XG5cbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZihhZGRGb3JtLnN0eWxlLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nKVxuICAgICAgICAgICAgYWRkRm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBhZGRGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICB9KTsgIFxuXG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYodGFza05hbWUudmFsdWUgPT09ICcnIHx8IGR1ZURhdGUudmFsdWUgPT09ICcnKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvaycpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0b2RvTGlzdC5wdXNoKG5ldyBUb2RvKHRhc2tOYW1lLnZhbHVlLCBkdWVEYXRlLnZhbHVlLCBwcmlvcml0eS52YWx1ZSwgcHJvamVjdC52YWx1ZSkpO1xuICAgICAgICAgICAgY2xlYXJBbGwoKTtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICB9XG4gICAgfSk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUmlnaHRIZWFkLCB7IFByb2plY3RTZWxlY3QgfSBmcm9tIFwiLi9NYWluXCI7XG5pbXBvcnQgZGlzcGxheVRhc2tzLCB7IGRpc3BsYXlQcm9qZWN0cyB9IGZyb20gXCIuL1VJXCI7XG5pbXBvcnQgeyBhZGRQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7IGFkZFRhc2sgfSBmcm9tIFwiLi90b2RvXCI7XG5cbmFkZFRhc2soKTtcbmFkZFByb2plY3QoKTtcblJpZ2h0SGVhZCgpO1xuZGlzcGxheVRhc2tzKCk7XG5kaXNwbGF5UHJvamVjdHMoKTtcblByb2plY3RTZWxlY3QoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=