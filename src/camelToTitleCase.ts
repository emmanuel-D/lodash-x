/**
 * Converts a camelCase string to Title Case.
 *
 * @param str - The camelCase string to convert
 * @returns The string in Title Case
 *
 * @example
 * console.log(camelToTitleCase('camelCaseString')); // Output: 'Camel Case String'
 */
export const camelToTitleCase = (str: string): string => {
    if (!str) return ''; // Handle null or undefined by returning an empty string

    return str
        .replace(/([a-z])([A-Z])/g, '$1 $2') // Insert space before capital letters
        .replace(/^./, char => char.toUpperCase()); // Capitalize the first letter
};
