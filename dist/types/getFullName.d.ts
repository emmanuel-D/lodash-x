export interface FullNameOptions {
    swap?: boolean;
    fallbackSymbol?: string;
    fallbackFirstName?: string;
    fallbackLastName?: string;
    separator?: string;
}
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
export declare function getFullName(firstname?: string, lastname?: string, options?: FullNameOptions): string;
