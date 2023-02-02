"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomStringWithSections = void 0;
const generateRandomAlphaNumericString_1 = require("./generateRandomAlphaNumericString");
/**
 * Generates a random string separated into sections by dashes.
 * @param sections The number of sections to generate (default 3).
 * @param sectionLength The length of each section (default 4).
 * @returns The generated random string separated into sections.
 *
 * @example
 * const randomString = generateRandomStringWithSections(3, 4);
 * console.log(randomString);
 * // Output: "abcd-g13d-93fb"
 */
function generateRandomStringWithSections(sections = 3, sectionLength = 4) {
    const sectionsArray = Array.from({ length: sections }, () => (0, generateRandomAlphaNumericString_1.generateRandomAlphaNumericString)(sectionLength));
    return sectionsArray.join('-');
}
exports.generateRandomStringWithSections = generateRandomStringWithSections;
