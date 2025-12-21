export const toRna = (exp) => {
  if(!exp) return '';
  const result = [];
  for(let i = 0; i < exp.length; i++){

    switch(exp[i]) {
    case 'G':
      result.push('C');
      break;
    case 'C':
      result.push('G');
      break;
    case 'T':
      result.push('A');
      break;
    case 'A':
      result.push('U');
      break;
  }  
  }
  return result.join('');
};