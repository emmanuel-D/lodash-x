"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitFor = void 0;
/**
 * Waits for a condition to become true, checking it periodically.
 *
 * @param condition - The condition to wait for.
 * @param interval - The time in milliseconds between checks (default: 100ms).
 * @param timeout - The maximum time in milliseconds to wait (default: 5000ms).
 * @returns A Promise that resolves when the condition becomes true or rejects after timeout.
 *
 * @example
 * waitFor(() => document.getElementById('myElement'), 100, 5000);
 */
const waitFor = async (condition, interval = 100, timeout = 5000) => {
    const start = Date.now();
    return new Promise((resolve, reject) => {
        const checkCondition = () => {
            if (condition()) {
                resolve();
            }
            else if (Date.now() - start >= timeout) {
                reject(new Error('Timeout waiting for condition.'));
            }
            else {
                setTimeout(checkCondition, interval);
            }
        };
        checkCondition();
    });
};
exports.waitFor = waitFor;
