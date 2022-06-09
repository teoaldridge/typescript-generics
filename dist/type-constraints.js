"use strict";
function mergeto(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj4 = mergeto({ name: 'Phil', hobbies: ['hiking', 'piano', 'guitar'] }, { numberOfKids: 2 });
console.log(mergedObj4);
//# sourceMappingURL=type-constraints.js.map