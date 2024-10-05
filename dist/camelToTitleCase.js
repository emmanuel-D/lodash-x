"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelToTitleCase = void 0;
/**
 * Converts a camelCase string to Title Case.
 *
 * @param str - The camelCase string to convert
 * @returns The string in Title Case
 *
 * @example
 * console.log(camelToTitleCase('camelCaseString')); // Output: 'Camel Case String'
 */
const camelToTitleCase = (str) => {
    if (!str)
        return ''; // Handle null or undefined by returning an empty string
    return str
        .replace(/([a-z])([A-Z])/g, '$1 $2') // Insert space before capital letters
        .replace(/^./, char => char.toUpperCase()); // Capitalize the first letter
};
exports.camelToTitleCase = camelToTitleCase;
