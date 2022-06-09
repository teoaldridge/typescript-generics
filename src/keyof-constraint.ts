//The 'KEYOF' CONSTRAINT


//here we tell TS that
//the element T will be of type Object and can hold any type of parameter 
//- it can be any Type of Object
// and the element U will be a key that is a paramenter in type T
//-it can be any Type of key in that Object. 
//We do this by using 'extends keyof'
function extractAndConvert<T extends object, U extends keyof T>(
    obj: T, 
    key: U
    ) {
    return ('Value: ' + obj[key]);
}

console.log(extractAndConvert({name: 'Max'}, 'name'));