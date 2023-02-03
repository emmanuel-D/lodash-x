"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeItemFromArrayAtIndex = void 0;
/**
 * Removes an item at given index and returns a copy of the array without the removed item.
 *
 * @param {Array} array - The array to remove an item from.
 * @param {number} index - The index of the item to remove.
 * @returns {Array} - A copy of the array without the removed item.
 *
 * @example
 * const arr = [1, 2, 3, 4];
 * const removedArr = removeItemFromArrayAtIndex(arr, 2);
 * console.log(removedArr);
 * // Output: [1, 2, 4]
 */
function removeItemFromArrayAtIndex(array, index) {
    if (index < 0 || index >= array.length) {
        return array;
    }
    return [...array.slice(0, index), ...array.slice(index + 1)];
}
exports.removeItemFromArrayAtIndex = removeItemFromArrayAtIndex;
