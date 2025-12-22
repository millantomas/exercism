//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (string) => {
    const stack = [];
    const pairs = {
      ')':'(',
      ']':'[',
      '}':'{'
  };

  for(const char of string) {
    if(['(', '[', '{'].includes(char)){
      stack.push(char);
    } else if([')',']','}'].includes(char)){
      if(stack.pop() !== pairs[char]){
        return false;
      }
    }
  }
  return stack.length === 0;
};
