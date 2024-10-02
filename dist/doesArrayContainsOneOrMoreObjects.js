"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doesArrayContainsOneOrMoreObjects = void 0;
/**
 * Checks if the array contains one or more objects that match elements based on a specific key.
 * Supports nested properties for comparison.
 *
 * @param array - The array to check.
 * @param elements - The elements to look for in the array.
 * @param keyToCompare - The key (or nested key) to compare the objects by.
 * @returns True if the array contains one or more matching objects, false otherwise.
 *
 * @example
 * const array = [{ id: 1, user: { profile: { id: 2 } } }];
 * const elements = [{ id: 2, user: { profile: { id: 2 } } }];
 * doesArrayContainsOneOrMoreObjects(array, elements, 'user.profile.id');
 * // Output: true
 */
function doesArrayContainsOneOrMoreObjects(array, elements, keyToCompare) {
    return elements.some(element => 
    // @ts-ignore
    array.some(arrayElement => getValueByPath(arrayElement, keyToCompare) === getValueByPath(element, keyToCompare)));
}
exports.doesArrayContainsOneOrMoreObjects = doesArrayContainsOneOrMoreObjects;
