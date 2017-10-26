## Arrow Functions

Arrow funcions are like a shorthand function

### Tradtional Way using function(){}
```javascript
function foo(bool){
    console.log(bool);
}
```

### Remove the parenthesis and fucntion keyword
using the arrow function allows you to choose if you want parenthesis around the argument or not
```javascript
foo = bool => {
    console.log(bool);
}
//or
foo = (bool) => {
    console.log(bool);
}

//or
foo = () => {
    console.log('hey');
}

// multiple arguments

foo = (a,b) => {
    console.log(a,b);
}
```

### even better, remove brackets and return
use not brackets for simple functions,  you can omit the return kwyword
```javascript
let x = () => 'hey';

x(); //>> returns "hey"
```
## using =>
when using the shorthand for function, the arrow function, the binding of 'this' changes to what you will normally expect from wrapping ina function
- when using function(){} the 'this' is bound to the local scope
- when using arrow functions, it is not and 'this' is more like global

#### using function
```javascript
class TaskCollection{
    constructor(tasks = []){
        this.tasks = tasks;
    }
    
    log(){
        this.tasks.forEach(function(task){
         console.log(task);
      });
    }
}

class Task {};

new TaskCollection([
    new Task, new Task, new Task;
]).log();

```

You get an ouput of
```cmd
UNDEFINED
```

Using Arrow Functions

```javascript
class TaskCollection{
    constructor(tasks = []){
        this.tasks = tasks;
    }
    
    log(){
        this.tasks.forEach(task => console.log(task));
    }
}

class Task {};

new TaskCollection([
    new Task, new Task, new Task;
]).log();

```

You get an ouput of
```cmd
TaskCollection {tasks : Array(3)}
TaskCollection {tasks : Array(3)}
TaskCollection {tasks : Array(3)}
```


So be aware of this when using arrow functions
