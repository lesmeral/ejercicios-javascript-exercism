//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(string) {
    this.matrix = string.split("\n")
    this.matrix = this.matrix.map((item) => {
    	return item.split(" ").map((item2) => {
    		return parseInt(item2)
    	})
    })
  }

  get rows() {
    return this.matrix
  }

  get columns() {
    return this.matrix[0].map((_, column) => this.matrix.map(row => row[column]))
  }
}
