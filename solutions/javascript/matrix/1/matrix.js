//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(string) {
    this.matrix = string.split('\n');
  }

  get rows() {
    return this.matrix.map(row => row.split(' ').map(Number))
  }

  get columns() {
        return this.rows[0].map((el, i) => {
		return this.rows.map(row => row[i])
    })
  } 
}
