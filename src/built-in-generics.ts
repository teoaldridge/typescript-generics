// BUILT-IN GENERICS

//A generic type is a type that is connected with another type. 
//For example, the type Array is connected to the types of data in that array

//We define it like this: Type<Type>

//Array Type - a built-in TS Generic Type: 
const names: Array <string> = [];  
//this is the same as 
//const names: string[] = [];


//Promise Type - a built-in TS Generic Type: 
//Here we tell TS that this Promise will eventually yield a string
//so then calling split(' ') on it below is allowed. 
const promise = new Promise<string>((resolve, /*reject*/) => {
    setTimeout(() => {
        //a callback function:
        resolve('This is done')
    }, 2000)
});

promise.then(data => {
    data.split(' ');
})