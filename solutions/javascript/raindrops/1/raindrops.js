//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (num) => {
  let result = [];
  if(num % 3 === 0) {result.push('Pling')}
  if(num % 5 === 0) {result.push('Plang')}
  if(num % 7 === 0) {result.push('Plong')}
  if(result.length===0 ){result.push(num)}

  return result.join('');
};