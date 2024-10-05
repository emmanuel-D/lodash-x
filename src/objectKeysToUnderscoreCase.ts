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
export const objectKeysToUnderscoreCase = (obj: any): any => {
    if (Array.isArray(obj)) {
        return obj.map(item => objectKeysToUnderscoreCase(item)); // Handle arrays recursively
    } else if (obj !== null && typeof obj === 'object') {
        return Object.keys(obj).reduce((acc, key) => {
            const underscoreKey = key.replace(/([A-Z])/g, '_$1').toLowerCase(); // Convert to underscore_case
            acc[underscoreKey] = objectKeysToUnderscoreCase(obj[key]); // Recursively handle nested objects
            return acc;
        }, {} as any);
    }
    return obj; // Return the value if it's not an object or array
};
