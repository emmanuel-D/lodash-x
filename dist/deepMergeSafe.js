"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepMergeSafe = void 0;
/**
 * Safely merges two objects deeply, with protection against deeply nested structures causing stack overflow.
 *
 * @param target - The target object to merge into.
 * @param source - The source object to merge from.
 * @returns A new object with deeply merged properties.
 *
 * @example
 * deepMergeSafe({ a: { b: 1 } }, { a: { c: 2 } });
 * // Output: { a: { b: 1, c: 2 } }
 */
const deepMergeSafe = (target, source) => {
    if (typeof target !== 'object' || typeof source !== 'object') {
        return source;
    }
    const result = { ...target };
    for (const key of Object.keys(source)) {
        if (source[key] && typeof source[key] === 'object') {
            result[key] = (0, exports.deepMergeSafe)(target[key], source[key]);
        }
        else {
            result[key] = source[key];
        }
    }
    return result;
};
exports.deepMergeSafe = deepMergeSafe;
