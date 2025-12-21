//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export  const compute = (val1,val2) => {
  let steps = 0;

  if(val1.length !== val2.length) {
    throw new Error('strands must be of equal length')
  }

  
  for(let i = 0; i < val1.length; i++){
      if(val1[i] !== val2[i]) {
         steps++
    }
  }
  return steps;
};
