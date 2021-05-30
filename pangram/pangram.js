//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (word) => {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  return letters.every(item => word.toLowerCase().includes(item))
};
