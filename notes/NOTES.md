# ES6 Notes from Laracasts

## Install Babel
- go to [Babel Website](https://babeljs.io)
- Go to setup
- choose CMD
- mkdir for project and cd into it
- run 
```cmd
npm init
```
then install the Babel CLI

```cmd 
npm install --save-dev babel-cli
```
this will install it into the project folder (develpment env) and you will see a node_modules folder in the root directory of the project
- then add babel to the package.json (npm file) a a script 
```json 
<!-- package.json -->
    {
  "name": "es6",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    //add it here
    "build": "babel src -d output"   
        // when you run 'npm run build' it will run the babel compiler on the src directory.  create the src directory
        // -d is a shorcut for the output directory
        //output is the name of the output dir
    //end
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0"
  }

}
```
- make src directory
#### By deault, Babel will not do anything, you havew to add transformations to pull in what you want
- run in project folder
```cmd
npm install--save-dev babel-preset-es2015
```

- then tell babel what to use
- create a .babel.rc file
- add
```json
{ "presets": ["es205"]}
```

- all set to run npm run build now and watch the magic happen


## Let, Var and Const

### using var
Var is not block scoped and because of hoisting, the var declarations ar made to the global scope so the below would get undefined for a false value
```javascript
function fire(bool){
    if(bool){
        
    var foo = "bar";
    
    console.log(foo);  
    }else{
        console.log(foo); 
    }
   
    
}

fire(true);
//"bar"
fire(false);
//undefined
```
and because of hoisting it actaully looks like this 

```javascript
var foo;

function fire(bool){
    if(bool){
        foo = "bar";
        console.log(foo);
    }else{
        console.log(foo);
    }
}
fire(true);
// bar
fire(false);
// UNDEFINED
```

### Let
what let does is block scope the variable declations, rather than hoist them
Consider this :
```javascript

function x(bool){
    if(bool){
    //Block 2
    }else{
    //Block 3
    }
}//Block 1
``` 
variables are scped to their block when using let

```javascript
function fire(bool){
    if(bool){
        
    let foo = "bar";
    
    console.log(foo);  
    }else{
        console.log(foo); 
    }
   
    
}

fire(true);
//"bar"
fire(false);
//REFERENCE ERROR - VAR BAR NOT DEFINED
```

you get the reference error instead of undefined because the let is not hoisted


### Const
const is a way to make a constant variable 

```javascript

var a = ["A','B"];
a = ["C','D"]
// >> ["C','D"]

let a = ["A','B"];
a = ["C','D"]
// >> ["C','D"]

const a = ["A','B"];
a = ["C','D"]
// >> UNCAUGHT ASIGNMENT ERROR - ASSIGNMENT TO A CONSTANT VARIABLE

```
so const is not mutable this way like var and let
#### so for a vleu that should not change, use const

BUT.....

const can me mutated in certain ways like
```javascript
const a = ["A','B"];
a.push('C','D');
//>>['A','B','C','D']
```

#### so we can say the assignment/binding is mutable but the value is not
BUT......
You can force an const object to be immutable by using 

```javascript
const months = Object.freeze([...]);
```

