//function that returns a string with uppercase 0 index
const camelCase = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
export default camelCase