"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFullName = void 0;
/**
 * Constructs a full name from a given first and last name, with support for swapping, fallback symbol, and custom separator.
 *
 * @param firstname - The person's first name.
 * @param lastname - The person's last name.
 * @param options - Options to control swapping, fallback behavior, and separator.
 * @returns A string representing the full name, or a fallback symbol if neither is provided.
 *
 * @example
 * getFullName('John', 'Doe'); // Output: 'John Doe'
 * getFullName('John', 'Doe', { swap: true }); // Output: 'Doe John'
 * getFullName(undefined, 'Doe', { fallbackFirstName: 'Unknown' }); // Output: 'Unknown Doe'
 * getFullName(undefined, undefined, { fallbackSymbol: '?' }); // Output: '?'
 * getFullName('John', 'Doe', { separator: ', ' }); // Output: 'John, Doe'
 * getFullName('John'); // Output: 'John'
 * getFullName(undefined, 'Doe'); // Output: 'Doe'
 */
function getFullName(firstname, lastname, options) {
    const { swap = false, // Default is not to swap
    fallbackSymbol = '-', // Default symbol if both are missing
    fallbackFirstName = '', // No fallback for firstname unless one name is missing
    fallbackLastName = '', // No fallback for lastname unless one name is missing
    separator = ' ' // Default separator is a space
     } = options || {};
    // If both names are missing, return the fallback symbol
    if (!firstname && !lastname) {
        return fallbackSymbol;
    }
    // Use fallback names if one is missing
    const first = firstname || fallbackFirstName;
    const last = lastname || fallbackLastName;
    // Return only the one that is provided if either firstname or lastname is missing
    if (!first)
        return last;
    if (!last)
        return first;
    // Swap the order if the swap option is true
    if (swap) {
        return `${last}${separator}${first}`;
    }
    // Otherwise, return 'firstname separator lastname'
    return `${first}${separator}${last}`;
}
exports.getFullName = getFullName;
