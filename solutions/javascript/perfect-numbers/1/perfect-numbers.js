//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (num) => {
  if(num < 1) throw new Error('Classification is only possible for natural numbers.')

  let sum = 0;

  for(let i = num - 1; i >= 1; i--){
    if(num % i === 0) sum += i;
  }

  if(sum === num) return 'perfect';
  if(sum > num) return 'abundant';
  if(sum < num) return 'deficient';

  return sum;
};
