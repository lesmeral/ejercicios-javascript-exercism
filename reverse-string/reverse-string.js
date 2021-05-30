//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (string) => {
  const arr = string.split("")
  return arr.map((value,idx) => {
  	return arr[arr.length-idx-1]
  }).join("")
};
