//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  if(!sentence) return false;
  const fixedSentence = sentence.replace(/\s/g, '').toLowerCase();
  const set = new Set()
    for(let i = 0; i < fixedSentence.length; i++) {
      if(fixedSentence[i] >= 'a' && fixedSentence[i] <= 'z') {
        set.add(fixedSentence[i]);
      }
    }
  return set.size === 26;
};
