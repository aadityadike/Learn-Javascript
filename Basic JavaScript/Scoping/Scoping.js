// import { moduleVar } from "./modules.js";

/* Global Scoping.*/
console.log(globalVar);

/* Module Scoping */
import { globalVar1 } from "./modules.js";

console.log(globalVar1)

/*
This will not get execute, although it is global variable but its not define in DOM.
console.log(moduleVar)
*/

/* Function Scoping & Block Scoping */

// Block Scoping.
const nonBlockvar = "keny Ackerman"

if (true) {
    const blockVar = "Mikasa Ackerman"
    // console.log(blockVar)
}

// console.log(nonBlockvar)
// console.log(blockVar)


// function Scoping
function scope() {
    const b = "Armin"
    if (true) {
        const b = "Erwin"
        // This will not change or override 'Armin'. Erwin is just different variable from Armin.
        console.log(b);
        // console.log(`${a}\n${b}`);
    }
}

scope()


/* Key Points */
/*

 Don't get confuse between function scope and block scope function scope is the same as block scope but when we define variable with 'var' keyword the function scope comes into picture.

*/


