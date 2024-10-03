"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swapKeysValues = void 0;
/**
 * Swaps the keys and values of an object. Keys become values and values become keys.
 * Assumes all values are unique and can be used as keys.
 *
 * @param obj - The object to swap keys and values.
 * @returns A new object with keys and values swapped.
 *
 * @example
 * swapKeysValues({ a: 1, b: 2 });
 * // Output: { 1: 'a', 2: 'b' }
 */
const swapKeysValues = (obj) => {
    return Object.keys(obj).reduce((acc, key) => {
        acc[obj[key]] = key;
        return acc;
    }, {});
};
exports.swapKeysValues = swapKeysValues;
