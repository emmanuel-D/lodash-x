"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onceStrict = void 0;
/**
 * Creates a function that can only be called once. Subsequent calls will throw an error.
 *
 * @param fn - The function to wrap.
 * @returns A new function that throws if called more than once.
 *
 * @example
 * const initialize = onceStrict(() => console.log('Initialized'));
 * initialize(); // Logs: "Initialized"
 * initialize(); // Throws: Error: Function can only be called once
 */
const onceStrict = (fn) => {
    let called = false;
    return function (...args) {
        if (called)
            throw new Error('Function can only be called once');
        called = true;
        return fn.apply(this, args);
    };
};
exports.onceStrict = onceStrict;
