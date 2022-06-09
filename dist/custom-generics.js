"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: 'Max' }, { age: 30 });
console.log(mergeObj);
const mergeObj2 = merge({ numberOfPets: 2 }, { likesQueen: true });
console.log(mergeObj2);
const mergedObj3 = merge({ name: 'Phil', hobbies: ['hiking', 'piano', 'guitar'] }, { numberOfKids: 2 });
console.log(mergedObj3);
//# sourceMappingURL=custom-generics.js.map