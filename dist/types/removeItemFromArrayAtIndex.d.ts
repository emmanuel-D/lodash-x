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
export declare function removeItemFromArrayAtIndex<T>(array: T[], index: number): T[];
