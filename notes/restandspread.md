## Rest ...
reset means like the "rest" of the numbers instaed of using the tradional arguments keyword

```js
let sum = function(...numbers){
    return numbers.reduce
}

let sum = function(a,b,...numbers){
    return numbers.reduce
}
```

like saying take all the extra arguments and put them into an array
## Reduce 
the reduce function is a way to reduce an array down tp one value
```js
let nums = [1,2,3];

nums.reduce((prev,current) => prev + current );

//6

```

* note the arguments above and their order, this is how reducemanipuklate these values