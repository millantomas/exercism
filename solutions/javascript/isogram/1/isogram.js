//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (word) => {
  const seen = new Set();
  const normalized = word.toLowerCase();

  for(const char of normalized) {
    if(char === ' ' || char === '-') continue;

    if(seen.has(char)) {
      return false;
    }

    seen.add(char);
  }

  return true;
};
