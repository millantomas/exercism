//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rotate = (string,rot) => {
  const test = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const stringArray = string.split('');

  for(const i in stringArray) {
    let codePoint = stringArray[i].codePointAt(0);
    if(codePoint <= 90 && codePoint >= 65){
      console.log(stringArray[i],codePoint);
      if(codePoint + rot > 90) codePoint -= 26;
      stringArray[i] = String.fromCharCode(codePoint + rot);
    } else if(codePoint <= 122 && codePoint >= 97){
      if(codePoint + rot > 122) codePoint -= 26;
      stringArray[i] = String.fromCharCode(codePoint + rot);
    }
  }
  return stringArray.join('');
};
