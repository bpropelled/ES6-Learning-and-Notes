class Person {
    constructor(name){
        this.name = name;
    }
    greet(){
        return "hey " + this.name;
    }
}

console.log(new Person("Brendon").greet());