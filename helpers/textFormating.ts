//TODO: Function that converts a text to uppercase format
export const convertToUpperCase = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
