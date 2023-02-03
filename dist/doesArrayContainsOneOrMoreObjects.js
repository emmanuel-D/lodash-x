"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.doesArrayContainsOneOrMoreObjects = void 0;
const lodash_get_1 = __importDefault(require("lodash.get"));
/**
 * Check if an array of objects contains one or more elements based on a specific property.
 * @param array The array to search in.
 * @param elements The elements to search for.
 * @param keyToCompare The key or property to compare elements by.
 * @returns A boolean indicating whether the array contains one or more of the elements.
 *
 * @example
 * const array = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 3, name: 'Jim' }];
 * const elements = [{ id: 2, name: 'Jane' }, { id: 4, name: 'Jessica' }];
 * const keyToCompare = 'id';
 * const result = containsOneOrMoreObjects(array, elements, keyToCompare);
 * console.log(result); // Output: true
 */
function doesArrayContainsOneOrMoreObjects(array, elements, keyToCompare) {
    return elements.some(element => array.some(arrayElement => (0, lodash_get_1.default)(arrayElement, keyToCompare) === (0, lodash_get_1.default)(element, keyToCompare)));
}
exports.doesArrayContainsOneOrMoreObjects = doesArrayContainsOneOrMoreObjects;
