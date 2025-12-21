//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
  const [a,b,c] = sides;

    this.a = a;
    this.b = b;
    this.c = c;

    this.valid = 
      a > 0 &&
      b > 0 &&
      c > 0 &&
      a + b >= c &&
      b + c >= a &&
      a + c >= b;
  }

  get isEquilateral() {
  if(!this.valid) return false;
    return this.a === this.b && this.b === this.c;
  }

  get isIsosceles() {
    if(!this.valid) return false;
    return(this.a === this.b || this.b === this.c || this.a === this.c);
  }

  get isScalene() {
  if(!this.valid) return false;
    return (this.a !== this.b && this.b !== this.c && this.c !== this.a);
  }
}
