const textOptimumLength: number = 100;
/**
 * String shortener.
 * @param {String} text
 * @return {String}
 */
export const stringShortener = (text: string): string => {
    return text.length > textOptimumLength ? text.substring(0, textOptimumLength) + '...' : text;
};

/**
 * Convert string to array.
 * @param {String} text
 * @param {String} character
 * @return {Array}
 */
export const convertStringToArray = (text: string, character: string): string[] => {
    return text.split(character);
}