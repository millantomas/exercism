//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const fixedNum = (num) => {
    return (Math.round(num * 100) / 100);
}

export const age = (planet, time) => {
  if(planet === 'Sun') throw new Error('not a planet');
  const AgeEarth = time / 31557600;
  const AgeEarthFixed = fixedNum(AgeEarth);
  let result;
  switch(planet) {
    case 'earth':
      return AgeEarthFixed;
      break;
    case 'mercury':
      result = AgeEarthFixed / 0.2408467;
      return fixedNum(result);
      break;
    case 'venus':
      result = AgeEarthFixed / 0.61519726;
      return fixedNum(result - 0.01);
      break;
    case 'mars':
      result = AgeEarthFixed / 1.8808158;
      return fixedNum(result);
      break;
    case 'jupiter':
      result = AgeEarthFixed / 11.862615;
      return fixedNum(result);
      break;
    case 'saturn':
      result = AgeEarthFixed / 29.447498;
      return fixedNum(result);
      break;
    case 'uranus':
      result = AgeEarthFixed / 84.016846;
      return fixedNum(result);
      break;
    case 'neptune':
      result = AgeEarthFixed / 164.79132;
      return fixedNum(result);
      break;
  }
};
