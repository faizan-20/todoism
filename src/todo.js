class todo{
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate; 
        this.priority = priority;
    }

    get(title){
        return title;
    }
    
}

export default todo;