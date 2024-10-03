"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValueByPath = void 0;
/**
 * Safely retrieves the value from an object based on a dot-notated path.
 * Supports nested objects, arrays, and handles edge cases like null or undefined values.
 * Provides type safety and autocompletion for nested paths.
 *
 * @param obj - The object to retrieve the value from.
 * @param path - The dot-notated path to the property (supports array indexes).
 * @returns The value at the specified path, or undefined if not found or if the path is invalid.
 *
 * @example
 * const obj = { user: { profile: { name: 'John', addresses: [{ city: 'New York' }] } } };
 * getValueByPath(obj, 'user.profile.name'); // Output: 'John'
 * getValueByPath(obj, 'user.profile.addresses[0].city'); // Output: 'New York'
 */
// @ts-ignore
const getValueByPath = (obj, path) => {
    if (!obj || typeof path !== 'string')
        return undefined;
    // Split the path on dot notation and handle array indexers like users[0]
    // @ts-ignore
    const pathParts = path.split('.').flatMap(part => part.match(/([^[\]]+)/g) || []);
    // Traverse the object along the path
    // @ts-ignore
    return pathParts.reduce((acc, key) => {
        if (acc === null || acc === undefined)
            return undefined;
        return acc[key];
    }, obj);
};
exports.getValueByPath = getValueByPath;
const obj = {
    user: {
        profile: {
            name: 'John',
            addresses: [
                { city: 'New York' },
                { city: 'Los Angeles' }
            ]
        }
    }
};
