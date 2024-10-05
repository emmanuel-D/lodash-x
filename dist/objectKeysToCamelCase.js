"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectKeysToCamelCase = void 0;
/**
 * Recursively converts all keys of an object to camelCase.
 *
 * @param obj - The object to convert
 * @returns A new object with camelCase keys
 *
 * @example
 *
 * const obj = { user_name: 'John Doe', user_details: { user_age: 30 } };
 * console.log(objectKeysToCamelCase(obj));
 * // Output: { userName: 'John Doe', userDetails: { userAge: 30 } }
 */
const objectKeysToCamelCase = (obj) => {
    if (Array.isArray(obj)) {
        return obj.map(item => (0, exports.objectKeysToCamelCase)(item)); // Handle arrays recursively
    }
    else if (obj !== null && typeof obj === 'object') {
        return Object.keys(obj).reduce((acc, key) => {
            const camelCaseKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase()); // Convert to camelCase
            acc[camelCaseKey] = (0, exports.objectKeysToCamelCase)(obj[key]); // Recursively handle nested objects
            return acc;
        }, {});
    }
    return obj; // Return the value if it's not an object or array
};
exports.objectKeysToCamelCase = objectKeysToCamelCase;
