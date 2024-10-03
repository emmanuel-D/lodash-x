import { NestedPaths } from "./types";
/**
 * Immutably updates a deeply nested value in an object, with type-safe paths.
 *
 * @param obj - The original object to update.
 * @param path - The path to the property to update, as a string (auto-completed).
 * @param value - The new value to set at the specified path.
 * @returns A new object with the updated value.
 *
 * @example
 * updateImmutable({ a: { b: { c: 1 } } }, 'a.b.c', 2);
 * // Output: { a: { b: { c: 2 } } }
 */
export declare const updateImmutable: <T, V>(obj: T, path: NestedPaths<T>, value: V) => T;
