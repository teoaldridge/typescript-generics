"use strict";
const names = [];
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('This is done');
    }, 2000);
});
promise.then(data => {
    data.split(' ');
});
//# sourceMappingURL=built-in-generics.js.map