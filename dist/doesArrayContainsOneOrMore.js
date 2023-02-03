"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doesArrayContainsOneOrMore = void 0;
/**
 * Check if the given array contains one or more primitive elements that are equal to the primitive elements given as a second parameter.
 * This implementation is more performant than using `Array.every` or `Array.some` as it uses a loop instead of a higher order function.
 * @param array The array to search in.
 * @param elements The elements to search for.
 * @returns True if one or more elements were found, false otherwise.
 *
 *  @example
 *  const fruits = ['apple', 'banana', 'orange']
 *  const elements = ['apple', 'pear']
 *
 *  console.log(containsAny(fruits, elements))
 *  // Output: true
 */
function doesArrayContainsOneOrMore(array, elements) {
    for (const element of elements) {
        for (const item of array) {
            if (item === element) {
                return true;
            }
        }
    }
    return false;
}
exports.doesArrayContainsOneOrMore = doesArrayContainsOneOrMore;
