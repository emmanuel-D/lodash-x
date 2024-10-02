/**
 * Pretty-prints a JSON object with indentation for easy readability.
 *
 * @param obj - The object to pretty-print.
 * @returns The pretty-printed JSON string.
 *
 * @example
 * prettyPrintJSON({ a: 1 });
 * // Output:
 * // {
 * //   "a": 1
 * // }
 */
export const prettyPrintJSON = (obj: any): string => {
    return JSON.stringify(obj, null, 2);
};
