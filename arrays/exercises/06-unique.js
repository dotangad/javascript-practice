/**
 * Task description: Write a method that returns a duplicate-free array
 * Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3]
 * Task Complexity: 2 of 5
 * @param {Array<string | number>} array - Array of primitive data types
 * @returns {Array}
 */
export const unique = (array) => array.filter((value, i, arr) => (arr.filter((x) => x === value).length === 1
  ? true
  : arr.slice(0, i).filter((x) => x === value).length === 0));
