/**
 * Generate a random number between two numbers.
 * If no start and end interval is provided, generate a random number between 0 and Number.MAX_SAFE_INTEGER.
 * @param start Optional start number of the interval.
 * @param end Optional end number of the interval.
 * @param floating Optional flag to allow floating numbers.
 * @returns The generated random number.
 */
export declare function generateRandomNumber(start?: number, end?: number, floating?: boolean): number;
