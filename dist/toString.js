"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toString = void 0;
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
const toString = (value, seen = new Set()) => {
    // Handle primitive types
    if (typeof value === 'string')
        return `"${value}"`;
    if (typeof value === 'number' || typeof value === 'boolean' || value === null || value === undefined) {
        return String(value);
    }
    // Handle Date
    if (value instanceof Date)
        return `Date(${value.toISOString()})`;
    // Handle RegExp
    if (value instanceof RegExp)
        return value.toString();
    // Handle functions
    if (typeof value === 'function') {
        return value.name ? `function ${value.name}(${getFunctionParams(value)}) { ... }` : value.toString();
    }
    // Handle circular references
    if (typeof value === 'object') {
        if (seen.has(value)) {
            return '[Circular]';
        }
        seen.add(value);
    }
    // Handle arrays
    if (Array.isArray(value)) {
        return `[${value.map((item) => (0, exports.toString)(item, seen)).join(', ')}]`;
    }
    // Handle objects
    if (typeof value === 'object') {
        const objStr = Object.entries(value)
            .map(([key, val]) => `"${key}": ${(0, exports.toString)(val, seen)}`)
            .join(', ');
        return `{ ${objStr} }`;
    }
    // Fallback
    return String(value);
};
exports.toString = toString;
/**
 * Extracts the parameter names of a function for better readability in the toString output.
 *
 * @param func - The function to extract parameters from.
 * @returns A comma-separated string of parameter names.
 *
 * @example
 * console.log(getFunctionParams(function(a, b) {}));
 * // Output: 'a, b'
 */
const getFunctionParams = (func) => {
    const fnStr = func.toString();
    const paramMatch = fnStr.match(/\(([^)]*)\)/);
    return paramMatch ? paramMatch[1].replace(/\s+/g, '') : '';
};
