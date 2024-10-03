"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsernameBackgroundColor = void 0;
const COLOR_CACHE = {}; // Cache to store colors by username
/**
 * Generates a unique background color based on the username and caches the result.
 * Ensures the background is contrasting enough for white text visibility.
 *
 * @param username - The username string
 * @returns A valid hex color code for the background
 */
const getUsernameBackgroundColor = (username) => {
    if (!username)
        return '#888888'; // Neutral gray for empty usernames
    // Check if the color is already cached
    if (COLOR_CACHE[username]) {
        return COLOR_CACHE[username];
    }
    // Generate a color based on the hash of the username
    let hash = 0;
    for (let i = 0; i < username.length; i++) {
        hash = username.charCodeAt(i) + ((hash << 5) - hash); // Hash function for consistent results
        hash = hash & hash; // Ensure hash remains within JavaScript integer limits
    }
    // Convert the hash to a 6-character hex color code
    const color = `#${((hash >> 16) & 0xFF).toString(16).padStart(2, '0')}${((hash >> 8) & 0xFF).toString(16).padStart(2, '0')}${(hash & 0xFF).toString(16).padStart(2, '0')}`;
    // Ensure the color has sufficient brightness for white text visibility
    const readableColor = ensureReadableColor(color);
    // Cache the color for future use
    COLOR_CACHE[username] = readableColor;
    return readableColor;
};
exports.getUsernameBackgroundColor = getUsernameBackgroundColor;
/**
 * Ensures a color has sufficient brightness for white text readability.
 * Adjusts the color if it is too dark by increasing brightness.
 *
 * @param color - The hex color code
 * @returns A more readable hex color if needed
 */
const ensureReadableColor = (color) => {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    // Calculate brightness (perceived luminance formula for sRGB)
    const brightness = calculateBrightness(r, g, b);
    // If the brightness is below the threshold, adjust the color
    if (brightness < 128) {
        return lightenColor(r, g, b);
    }
    return color;
};
/**
 * Calculates the perceived brightness of an RGB color using the luminance formula.
 * @param r - Red component (0-255)
 * @param g - Green component (0-255)
 * @param b - Blue component (0-255)
 * @returns The brightness value (0-255)
 */
const calculateBrightness = (r, g, b) => {
    return (r * 299 + g * 587 + b * 114) / 1000;
};
/**
 * Lightens the RGB color by ensuring it has sufficient brightness for white text readability.
 * Gradually increases each RGB component to avoid making the color too light.
 *
 * @param r - Red component
 * @param g - Green component
 * @param b - Blue component
 * @returns The adjusted hex color code
 */
const lightenColor = (r, g, b) => {
    const lightenFactor = 60;
    r = Math.min(255, r + lightenFactor);
    g = Math.min(255, g + lightenFactor);
    b = Math.min(255, b + lightenFactor);
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};
