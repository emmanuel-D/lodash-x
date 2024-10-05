/**
 * Converts a camelCase string to an underscore_separated string.
 *
 * @param str - The camelCase string to convert
 * @returns The string in underscore case
 *
 * @example
 *
 * console.log(camelToUnderscore('camelCaseString')); // Output: 'camel_case_string'
 */
export const camelToUnderscore = (str: string): string => {
    if (!str) return ''; // Handle null or undefined by returning an empty string

    return str
        .replace(/([a-z])([A-Z])/g, '$1_$2') // Insert underscore before capital letters
        .toLowerCase(); // Convert the entire string to lowercase
};
