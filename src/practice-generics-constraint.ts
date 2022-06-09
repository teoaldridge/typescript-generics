//Practice- Another Generic Function


//We create the interface Lengthy, 
//so now the parameter length is defined as of type number in our 
//'element' that we pass to the function countAndDescribe. 
//By saying <T extends Lengthy> we Constrain the element to always have 
//a parameter 'lenght' of type number. 
//function countAndDescribe <T extends Lengthy > (element: T) 
interface Lengthy {
    length: number; 
}

//here we create a function countAndDescribe which takes a parameter of a generic (any) type, 
//and we pass to it a parameter of the same generic type.
//By saying <T extends Lengthy> we Constrain the element to always have 
//a parameter 'lenght' of type number.

//with : [T, string]  we specify that the return element will be an array, 
//where the first element will be of type T and the second element will be of type string. 
//- we could also not do that, TS infers it.
function countAndDescribe <T extends Lengthy > (element: T): [T, string] {
    //we return a tuple, where the first element will be the passed element itself, 
    //and the second element is a description string. 
    let descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got ' + element.length + ' element.'
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.'
    }
    return [element, descriptionText]; 
}

console.log(countAndDescribe(['Sports', 'Cooking']));