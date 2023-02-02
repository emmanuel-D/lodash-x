"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrAddItemListToArray = void 0;
const updateOrAddItemToArray_1 = require("./updateOrAddItemToArray");
/**
 * Updates or adds items to an existing array.
 *
 * This function works by iterating over the `newItemList` and passing each new item to the `updateOrAddItemToArray` function.
 *
 * The `updateOrAddItemToArray` function is then used to update or add the new item to the `updatedArray` variable, which is initialized as a copy of the array argument.
 *
 * The final updated array is returned as the result of the function.
 *
 * ```
 * const array = [
 *     {id: 1, name: "John Doe"},
 *     {id: 2, name: "Jane Doe"}
 * ];
 *
 * const newItemList = [
 *     {id: 3, name: "Jack Doe"},
 *     {id: 1, name: "John Doe Updated"}
 * ];
 *
 * const updatedArray = updateOrAddItemListToArray(array, newItemList);
 *
 * console.log(updatedArray);
 * // Output: [
 * //  {id: 1, name: "John Doe Updated"},
 * //  {id: 2, name: "Jane Doe"},
 * //  {id: 3, name: "Jack Doe"}
 * // ]
 * ```
 *
 * @param {T[]} array - The existing array of items to update or add to.
 * @param {T[]} newItemList - The list of new items to add or update in the array.
 * @param {string} searchPropertyKey - The property key of the item object to use as the identifier for determining if an item is new or already exists in the array.
 *
 * @returns {T[]} A new array containing the updated or added items.
 */
function updateOrAddItemListToArray(array, newItemList, searchPropertyKey = 'id') {
    let updatedArray = [...array];
    newItemList.forEach(newItem => {
        updatedArray = (0, updateOrAddItemToArray_1.updateOrAddItemToArray)(updatedArray, newItem, searchPropertyKey);
    });
    return updatedArray;
}
exports.updateOrAddItemListToArray = updateOrAddItemListToArray;
