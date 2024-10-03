"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prettyPrintJSON = void 0;
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
const prettyPrintJSON = (obj) => {
    return JSON.stringify(obj, null, 2);
};
exports.prettyPrintJSON = prettyPrintJSON;
