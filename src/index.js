import todo from "./todo";

function addTask(){
    let task1 = new todo("do some", "idk what", '12/08/2020', 'medium');
    let task2 = new todo("do some more", "idk what anymore", '20/08/2020', 'high');

    return {task1, task2}
}

console.log(addTask())