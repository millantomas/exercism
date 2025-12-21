// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const val1 =  Number(String(array1).replace(/,/g, ''))
  const val2 =  Number(String(array2).replace(/,/g, ''))
    return val1 + val2
  throw new Error('Implement the twoSum function');
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const str = String(value);
  for(let i = 0; i < Math.floor(str.length / 2); i++){
    if(str[i] !== str[str.length - 1 - i]){
      return false;
    }
  }
  return true;
  throw new Error('Implement the luckyNumber function');
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if(input === '' || input === null || input === undefined) return 'Required field'
  
  const val = Number(input)
  
  if (!isNaN(val) && val > 0) {
    return '';
  } else {
  return 'Must be a number besides 0';
        
  }

  return '';
  throw new Error('Implement the errorMessage function');
}
