"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomItemInArray = void 0;
/**
 * Returns a random item from the given array.
 *
 * @param array The array from which to retrieve a random item.
 * @param startIndex Optional start index for the slice of the array to choose from (inclusive). Defaults to 0.
 * @param endIndex Optional end index for the slice of the array to choose from (exclusive). Defaults to the length of the array.
 * @returns A randomly chosen item from the given array slice, or null if the slice is empty or invalid.
 */
function getRandomItemInArray(array, startIndex = 0, endIndex = array.length) {
    if (startIndex < 0 || endIndex > array.length || startIndex > endIndex) {
        return null;
    }
    const randomIndex = Math.floor(Math.random() * (endIndex - startIndex)) + startIndex;
    return array[randomIndex];
}
exports.getRandomItemInArray = getRandomItemInArray;
