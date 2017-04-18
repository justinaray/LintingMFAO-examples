/**
 * This example highlights the importance of linting.
 * Without linting, it is somewhat difficult to spot the bug.
 * Example from ESLint (http://eslint.org/docs/rules/no-unsafe-finally)
 */

/* Disabling irrelevant lint warnings for this example */
/* eslint-disable no-console, no-unreachable */
console.log('printOne:', printOne());

function printOne() {
    try {
        // There's no error, one will be returned
        return 1;
    } catch (err) {
        return 2;
    } finally {
        return 3;
    }
}
/* eslint-disable no-console, no-unreachable */
