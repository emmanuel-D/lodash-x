"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.underscoreToNormal = void 0;
/**
 * Converts an underscore_separated_string to a normal readable string.
 * Can capitalize the first letter of each word or the first letter of the sentence.
 *
 * @param str - The underscore separated string to convert
 * @param capitalizeAll - If true, capitalize every word; if false, capitalize only the first word
 * @returns The string in normal case
 *
 * @example
 *
 * console.log(underscoreToNormal('underscore_separated_string')); // Output: 'Underscore separated string'
 * console.log(underscoreToNormal('underscore_separated_string', true)); // Output: 'Underscore Separated String'
 */
const underscoreToNormal = (str, capitalizeAll = false) => {
    if (!str)
        return ''; // Handle null or undefined by returning an empty string
    const result = str
        .toLowerCase() // Convert the entire string to lowercase
        .replace(/_/g, ' ') // Replace underscores with spaces
        .trim(); // Trim leading and trailing spaces
    return capitalizeAll
        ? result.replace(/\b\w/g, char => char.toUpperCase()) // Capitalize each word
        : result.replace(/^./, char => char.toUpperCase()); // Capitalize only the first letter
};
exports.underscoreToNormal = underscoreToNormal;
