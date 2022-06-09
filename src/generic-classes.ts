//GENERIC CLASSES

//here we tell TS that dataStorage will accept items of 
//the generic Type T
//here we also specify further that T can only be a string, number or boolean. 
//This way we make it so it can not be other types like objects or arrays. 
class DataStorage <T extends string | number | boolean> {
    //so data will be an array of elements with type T
    private data: T[] = [];

    //add items of type T
    addItem(item: T) {
        this.data. push(item);
    }

    //remove item of type T
    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    
    //so returning an array of generic types is correctky inferred
    getItems() {
        return [...this.data];

    //Generally you can also use generic types with methods within classes,
    //but we don't do this in this example. 
    }
}

//Now we can create different storages:

//here I create a storage textStorage which is an instance of class DataStorage
//And I specify that the generic type T thist time will be a string
const textStorage = new DataStorage<string>();
//so here I can only use strings- otherwise I get errors
textStorage.addItem('Max');
textStorage.addItem('Teo');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

//here I create a numberStorage that this time accepts only numbers
const numberStorage = new DataStorage<number>();

