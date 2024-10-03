/**
 * Converts any value to a string, handling all basic and complex types, including functions.
 * This method serializes objects, arrays, and functions into readable strings.
 *
 * Handles:
 * - Primitive types (number, string, boolean, null, undefined)
 * - Objects and arrays (including circular references)
 * - Functions (returns function source or name)
 * - Special types (Date, RegExp, etc.)
 *
 * @param value - The value to convert to a string.
 * @param seen - Internal use only, used to track circular references.
 * @returns A string representation of the value.
 *
 * @example
 * console.log(toString({ name: "John", age: 30 }));
 * // Output: '{ "name": "John", "age": 30 }'
 *
 * @example
 * console.log(toString(function test() { return "hello"; }));
 * // Output: 'function test() { return "hello"; }'
 */
export declare const toString: (value: any, seen?: Set<any>) => string;
