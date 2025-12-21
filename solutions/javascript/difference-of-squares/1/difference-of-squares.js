//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(n) {
    this.n = n;
  }

  get sumOfSquares() {
    let sumSquares = 0;
    for(let i = 1; i <= this.n; i++){
      sumSquares += i * i;
    }
    return sumSquares;
  }

  get squareOfSum() {
  let squareOfSum = 0;
    for(let i = 1; i <= this.n; i++){
      squareOfSum += i;
    }
    return squareOfSum * squareOfSum;  
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;

  }
}
