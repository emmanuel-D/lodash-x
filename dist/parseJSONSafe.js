"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseJSONSafe = void 0;
/**
 * Safely parses a JSON string. Returns a fallback value if parsing fails.
 *
 * @param jsonString - The JSON string to parse.
 * @param fallback - The value to return if parsing fails (default: null).
 * @returns The parsed JSON object or the fallback value if parsing fails.
 *
 * @example
 * parseJSONSafe('{"a": 1}');
 * // Output: { a: 1 }
 * parseJSONSafe('Invalid JSON', {});
 * // Output: {}
 */
const parseJSONSafe = (jsonString, fallback = null) => {
    try {
        return JSON.parse(jsonString);
    }
    catch {
        return fallback;
    }
};
exports.parseJSONSafe = parseJSONSafe;
