//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
  const digitArray = String(number).split('');
  const digitCount = digitArray.length;

  let armstrongSum = BigInt(0);

  for(let digit of digitArray){
    armstrongSum += BigInt(digit) ** BigInt(digitCount);
  }

  return (BigInt(number) === armstrongSum);
};
