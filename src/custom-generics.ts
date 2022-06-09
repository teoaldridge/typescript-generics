//CREATING A CUSTOM GENERIC FUNCTION

//Here we tell TS that  the function merge takes two objects of 
//any type- we don't care what type they will be, 
//and then the result this function returns will be 
//an intersection of these two types. 
//By making this a generic function, we allow the freedom 
//to assign different types of values to the two objects. 
//So now TS knows that the mergedObj's type will be an intersection
//of those two types.
//These two types are most likely t be different types, but
//they can also be the same type, that's OK. 

//You can also add :T&V to explicitly say 
//that the function will return an intersection of types T & V,
//But we don't need to do that because TS assumes that 
//.assign returns an intersection.
//function merge<T, V> (objA: T, objB: V): T&V {
function merge<T, V> (objA: T, objB: V): T&V {

    //assign is a JS built-in function
    return Object.assign(objA, objB);
}
//So because we can fill in any type, this works:
const mergeObj = merge ({name: 'Max'}, {age:30}); 
console.log (mergeObj);

//And this also works: 
const mergeObj2 = merge({numberOfPets: 2}, {likesQueen:true}); 
console.log(mergeObj2);

// You can also assign specific types you want to assign to the objects 
//each time you call this function, and this way
//make each instance more specific.
//Here we specify that the firts object will be of type object, and specify the types of its parameters,
//and same with the second object.  
const mergedObj3 = merge<{name: string, hobbies: string[]}, {numberOfKids: number}>(
    {name: 'Phil', hobbies: ['hiking', 'piano', 'guitar'] }, {numberOfKids: 2}
);
console.log(mergedObj3);