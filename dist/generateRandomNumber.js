"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomNumber = void 0;
/**
 * Generate a random number between two numbers.
 * If no start and end interval is provided, generate a random number between 0 and Number.MAX_SAFE_INTEGER.
 * @param start Optional start number of the interval.
 * @param end Optional end number of the interval.
 * @param floating Optional flag to allow floating numbers.
 * @returns The generated random number.
 */
function generateRandomNumber(start = 0, end = Number.MAX_SAFE_INTEGER, floating) {
    if (start && !Number.isInteger(start)) {
        throw new Error('Start parameter must be an integer.');
    }
    if (end && !Number.isInteger(end)) {
        throw new Error('End parameter must be an integer.');
    }
    if (start && end && end < start) {
        throw new Error('End parameter must be greater or equal to the start parameter.');
    }
    if (!start && !end) {
        start = 0;
        end = Number.MAX_SAFE_INTEGER;
    }
    else if (!start && end) {
        start = 0;
    }
    else if (start && !end) {
        end = Number.MAX_SAFE_INTEGER;
    }
    const randomNumber = Math.random() * (end - start) + start;
    return floating ? randomNumber : Math.floor(randomNumber);
}
exports.generateRandomNumber = generateRandomNumber;
