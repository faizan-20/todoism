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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");


const RightHead = () => {
    const rightHead = document.querySelector('#rightHeading');
    const projects = document.querySelectorAll('.newProject');
    rightHead.textContent = _projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].name;
    projects.forEach((p) => {
        p.addEventListener('click', () => {
            let i = p.getAttribute('data-project');
            rightHead.textContent = _projects__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].name;
        })
    })
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
    table.textContent = '';
    
    for(let i = 0; i < _todo__WEBPACK_IMPORTED_MODULE_1__.todoList.length; i++){
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
    })
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
            (0,_UI__WEBPACK_IMPORTED_MODULE_1__.displayProjects)();
            (0,_Main__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
        project: "home"
    }
]


const addTask = () => {
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
(0,_UI__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_UI__WEBPACK_IMPORTED_MODULE_1__.displayProjects)();
(0,_Main__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Olsid2VicGFjazovL3RvZG9pc20vLi9zcmMvTWFpbi5qcyIsIndlYnBhY2s6Ly90b2RvaXNtLy4vc3JjL1VJLmpzIiwid2VicGFjazovL3RvZG9pc20vLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2lzbS8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG9pc20vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2lzbS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2lzbS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9pc20vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvaXNtLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcblxuY29uc3QgUmlnaHRIZWFkID0gKCkgPT4ge1xuICAgIGNvbnN0IHJpZ2h0SGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyaWdodEhlYWRpbmcnKTtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZXdQcm9qZWN0Jyk7XG4gICAgcmlnaHRIZWFkLnRleHRDb250ZW50ID0gYWxsUHJvamVjdHNbMF0ubmFtZTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgIHAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgaSA9IHAuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnKTtcbiAgICAgICAgICAgIHJpZ2h0SGVhZC50ZXh0Q29udGVudCA9IGFsbFByb2plY3RzW2ldLm5hbWU7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmlnaHRIZWFkOyIsImltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7IHRvZG9MaXN0IH0gZnJvbSBcIi4vdG9kb1wiO1xuXG5jb25zdCBkaXNwbGF5VGFza3MgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlzcGxheS10YXNrcycpO1xuICAgIHRhYmxlLnRleHRDb250ZW50ID0gJyc7XG4gICAgXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2snKTtcbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaSk7XG5cbiAgICAgICAgbGV0IHRyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICB0cm93LmNsYXNzTGlzdC5hZGQoYHRyb3cke2l9YCwgJ3Ryb3cnKTtcbiAgICAgICAgdHJvdy5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpKTtcbiAgICAgICAgdHJvdy5pZCA9ICdyb3cnO1xuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZCh0cm93KTtcblxuICAgICAgICBsZXQgc25vID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgc25vLmNsYXNzTGlzdC5hZGQoJ3NubycpO1xuICAgICAgICB0cm93LmFwcGVuZENoaWxkKHNubyk7XG4gICAgICAgIHNuby5hcHBlbmRDaGlsZChjaGVja2JveCk7XG5cbiAgICAgICAgbGV0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbmFtZScpO1xuICAgICAgICB0cm93LmFwcGVuZENoaWxkKHRhc2spO1xuICAgICAgICB0YXNrLnRleHRDb250ZW50ID0gdG9kb0xpc3RbaV0udGl0bGU7XG5cbiAgICAgICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlJyk7XG4gICAgICAgIHRyb3cuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0b2RvTGlzdFtpXS5kdWVEYXRlO1xuXG4gICAgICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5Jyk7XG4gICAgICAgIHRyb3cuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRvZG9MaXN0W2ldLnByaW9yaXR5O1xuICAgICAgICBcbiAgICAgICAgbGV0IGRlbGV0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBkZWxldGVUYXNrLmNsYXNzTGlzdC5hZGQoYGRlbGV0ZS10YXNrJHtpfWAsICdkZWxldGUtdGFzaycpO1xuICAgICAgICB0cm93LmFwcGVuZENoaWxkKGRlbGV0ZVRhc2spO1xuICAgICAgICBkZWxldGVUYXNrLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICBkZWxldGVUYXNrLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGkpO1xuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrJyk7XG4gICAgY2hlY2suZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBib3guZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudHJvdyR7aW5kZXh9YCk7XG4gICAgICAgICAgICBpZiAoYm94LmNoZWNrZWQpe1xuICAgICAgICAgICAgICAgIHJvdy5zdHlsZS5jb2xvciA9ICcjN2M3YzdjJ1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcm93LnN0eWxlLmNvbG9yID0gJyMyQjJENDInXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRyb3cnKTtcbiAgICByb3cuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICAgIHJvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGkgPSByb3cuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmRlbGV0ZS10YXNrJHtpfWApO1xuICAgICAgICAgICAgcm93LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjOWVlNGZmODcnO1xuICAgICAgICAgICAgZGVsZXRlVGFzay5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICB9KTtcbiAgICAgICAgcm93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgaSA9IHJvdy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZGVsZXRlLXRhc2ske2l9YCk7XG4gICAgICAgICAgICByb3cuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNFREYyRjQnO1xuICAgICAgICAgICAgZGVsZXRlVGFzay5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGVsZXRlVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUtdGFzaycpO1xuICAgIGRlbGV0ZVRhc2suZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGkgPSB0YXNrLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RvTGlzdCk7XG4gICAgICAgICAgICBpZiAoaSA+IC0xKXtcbiAgICAgICAgICAgICAgICB0b2RvTGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICAgICAgfSk7XG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheVRhc2tzO1xuXG5leHBvcnQgY29uc3QgZGlzcGxheVByb2plY3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cy1kaXNwbGF5Jyk7XG4gICAgcHJvamVjdHNEaXNwbGF5LnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYWxsUHJvamVjdHMubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgnbmV3UHJvamVjdCcpO1xuICAgICAgICBuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JywgaSk7XG4gICAgICAgIHByb2plY3RzRGlzcGxheS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcbiAgICAgICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9IGFsbFByb2plY3RzW2ldLm5hbWU7XG4gICAgfVxufSIsImltcG9ydCBSaWdodEhlYWQgZnJvbSBcIi4vTWFpblwiO1xuaW1wb3J0IHtkaXNwbGF5UHJvamVjdHN9IGZyb20gXCIuL1VJXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3R7XG4gICAgY29uc3RydWN0b3IobmFtZSl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgYWxsUHJvamVjdHMgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiAnSG9tZSdcbiAgICB9XG5dO1xuXG5leHBvcnQgY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0Jyk7XG4gICAgY29uc3QgYWRkUHJvamVjdEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0LWZpZWxkJyk7XG4gICAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QtZm9ybScpO1xuICAgIGNvbnN0IHN1Ym1pdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LXByb2plY3QnKTtcblxuICAgIG5ld1Byb2plY3RGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJzsgXG4gICAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYobmV3UHJvamVjdEZvcm0uc3R5bGUudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbicpXG4gICAgICAgICAgICBuZXdQcm9qZWN0Rm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBuZXdQcm9qZWN0Rm9ybS5zdHlsZS52aXNpYmlsaXR5ID0naGlkZGVuJzsgXG4gICAgfSk7XG5cbiAgICBzdWJtaXRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZihhZGRQcm9qZWN0RmllbGQudmFsdWUgPT09ICcnKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub29rJyk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgYWxsUHJvamVjdHMucHVzaChuZXcgUHJvamVjdChhZGRQcm9qZWN0RmllbGQudmFsdWUpKTtcbiAgICAgICAgICAgIGFkZFByb2plY3RGaWVsZC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgbmV3UHJvamVjdEZvcm0uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgICAgICAgICBSaWdodEhlYWQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG59XG5cbiIsImltcG9ydCBkaXNwbGF5VGFza3MgZnJvbSBcIi4vVUlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb3tcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3Qpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7IFxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgfVxufVxuXG5leHBvcnQgbGV0IHRvZG9MaXN0ID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiTGF1bmRyeVwiLFxuICAgICAgICBkdWVEYXRlOiBcIjEyLTA5LTIwMjJcIixcbiAgICAgICAgcHJpb3JpdHk6IFwiaGlnaFwiLFxuICAgICAgICBwcm9qZWN0OiBcImhvbWVcIlxuICAgIH1cbl1cblxuXG5leHBvcnQgY29uc3QgYWRkVGFzayA9ICgpID0+IHtcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0Jyk7XG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1uYW1lJyk7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZScpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUYXNrQnRuJyk7XG4gICAgY29uc3QgYWRkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtZm9ybScpO1xuICAgIFxuICAgIGNvbnN0IGNsZWFyQWxsID0gKCkgPT4ge1xuICAgICAgICB0YXNrTmFtZS52YWx1ZSA9IG51bGw7XG4gICAgICAgIGR1ZURhdGUudmFsdWUgPSBudWxsO1xuICAgICAgICBwcmlvcml0eS52YWx1ZSA9ICdtZWRpdW0nO1xuICAgIH1cblxuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmKGFkZEZvcm0uc3R5bGUudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbicpXG4gICAgICAgICAgICBhZGRGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGFkZEZvcm0uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIH0pOyAgXG5cbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZih0YXNrTmFtZS52YWx1ZSA9PT0gJycgfHwgZHVlRGF0ZS52YWx1ZSA9PT0gJycpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ29rJyk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRvZG9MaXN0LnB1c2gobmV3IFRvZG8odGFza05hbWUudmFsdWUsIGR1ZURhdGUudmFsdWUsIHByaW9yaXR5LnZhbHVlLCBcImRlZmF1bHRcIikpO1xuICAgICAgICAgICAgY2xlYXJBbGwoKTtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICB9XG4gICAgfSk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUmlnaHRIZWFkIGZyb20gXCIuL01haW5cIjtcbmltcG9ydCBkaXNwbGF5VGFza3MsIHsgZGlzcGxheVByb2plY3RzIH0gZnJvbSBcIi4vVUlcIjtcbmltcG9ydCB7IGFkZFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgYWRkVGFzaywgdG9kb0xpc3QgfSBmcm9tIFwiLi90b2RvXCI7XG5cbmFkZFRhc2soKTtcbmFkZFByb2plY3QoKTtcbmRpc3BsYXlUYXNrcygpO1xuZGlzcGxheVByb2plY3RzKCk7XG5SaWdodEhlYWQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=