import { NestedPaths } from "./types";
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
export declare const getValueByPath: <T, P extends NestedPaths<T>>(obj: T, path: P) => P extends NestedPaths<T> ? any : undefined;
