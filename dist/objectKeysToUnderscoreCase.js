"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectKeysToUnderscoreCase = void 0;
/**
 * Recursively converts all keys of an object to underscore_case.
 *
 * @param obj - The object to convert
 * @returns A new object with underscore_case keys
 *
 * @example
 *
 * const obj = { userName: 'John Doe', userDetails: { userAge: 30 } };
 * console.log(objectKeysToUnderscoreCase(obj));
 * // Output: { user_name: 'John Doe', user_details: { user_age: 30 } }
 */
const objectKeysToUnderscoreCase = (obj) => {
    if (Array.isArray(obj)) {
        return obj.map(item => (0, exports.objectKeysToUnderscoreCase)(item)); // Handle arrays recursively
    }
    else if (obj !== null && typeof obj === 'object') {
        return Object.keys(obj).reduce((acc, key) => {
            const underscoreKey = key.replace(/([A-Z])/g, '_$1').toLowerCase(); // Convert to underscore_case
            acc[underscoreKey] = (0, exports.objectKeysToUnderscoreCase)(obj[key]); // Recursively handle nested objects
            return acc;
        }, {});
    }
    return obj; // Return the value if it's not an object or array
};
exports.objectKeysToUnderscoreCase = objectKeysToUnderscoreCase;
