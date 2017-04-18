/**
 * This example highlights the importance of linting.
 * Without linting, it is somewhat difficult to spot the bug.
 */

/* Disabling irrelevant lint warnings for this example */
/* eslint-disable no-unused-vars, no-console*/
let one = 1;
let two = 2;
if (one = two) {
    console.log('This should never print!');
    // Well, it does!
} else {
    console.log('Phew, the world makes sense');
    // You know you're writing javascript, right?
}
/* eslint-disable */
