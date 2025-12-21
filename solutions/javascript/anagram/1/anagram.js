//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (target,candidate) => {
  let result = [];
  for(let i = 0; i < candidate.length; i++){
    const newCandidate = candidate[i];
    if(newCandidate.toLowerCase().split("").sort().join("") == target.toLowerCase().split("").sort().join("") && newCandidate.toLowerCase() != target.toLowerCase()) {
      result.push(newCandidate);
    }
    
  }
  return result;
};
