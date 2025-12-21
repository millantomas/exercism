//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (old) => {
    const result = {};
    for(const number in old){
      const numberType = Number(number);
      for(const letter of old[number]){
        const letterLower = letter.toLowerCase()
        result[letterLower] = numberType;
      }
    }
  return result;
};
