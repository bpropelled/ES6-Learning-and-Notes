class TaskCollection{
    constructor(tasks = []){
        this.tasks = tasks;
    }
    
    log(){
//old way
//        this.tasks.forEach(function(task){
//            console.log(task);
//        });
        
//or ES6 and remove the function
        
//        this.tasks.forEach( (task) => {
//            console.log(task);
//        });
        
        
// or even better
        
        this.tasks.forEach(task => console.log(task));
        // and if you have multiple function arguments, use parenthesis
        //this.tasks.forEach((task, index) => console.log(task, index));
            
        //or no arguments you use an empty set of parenthesis
        //this.tasks.forEach(() => console.log('hey'));
        });
    }
}

//class Task {};
//
//new TaskCollection([
//    new Task, new Task, new Task;
//]).log();

let x = new TaskCollection(["laundry","grass"]);

x.log();
//>>Laundry, grass

