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
export declare function generateRandomStringWithSections(sections?: number, sectionLength?: number): string;
