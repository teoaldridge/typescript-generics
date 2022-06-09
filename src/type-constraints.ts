//WORKING WITH TYPE CONSTRAINTS

//If we don't add constraints, and leave the function like this, if we put the value 30, 
//in the place of the second object, TS won't complain beause we have said that the two inputs can be of type any. 
//But our code won't work! Try it: 

// function mergeto<T, V> (objA: T, objB: V): T&V {
//     return Object.assign(objA, objB);
// }
// const mergedObj4 = mergeto(
//     {name: 'Phil', hobbies: ['hiking', 'piano', 'guitar'] }, 30
// );
// console.log(mergedObj3);

//Therefore, TS has TYPE CONSTRAINTS
//You do this by using the 'extends' keyword:
//TypeYouWantToConstrain extends TypeYouWant 

//Here we say ' The T Type can be any type, of any structure, BUT it HAS to be an Object. 
//So it has to be an objct which can have parameters of any type

function mergeto<T extends object, V extends object> (objA: T, objB: V): T&V {
    return Object.assign(objA, objB);
}
const mergedObj4 = mergeto(
    {name: 'Phil', hobbies: ['hiking', 'piano', 'guitar'] }, {numberOfKids: 2}
);
console.log(mergedObj4);