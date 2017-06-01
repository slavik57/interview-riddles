// The video for this file:
// https://youtu.be/qQEMKqQrKKo

function findDifference(numbers: number[], difference: number): [number, number] {
  const existingNumbers = new Set<number>();

  for (let i = 0; i < numbers.length; i++) {
    const current = numbers[i];
    // option1 - current === differnece
    const option1 = difference + current;
    // current - option2 === difference
    const option2 = current - difference;
    if (existingNumbers.has(option1)) {
      return [option1, current];
    }
    if (existingNumbers.has(option2)) {
      return [current, option2];
    }
    existingNumbers.add(current);
  }

  return null;
}

console.log(findDifference([0, 2, 3, 10], 0));
console.log(findDifference([0, 2, 3, 10], 1));
console.log(findDifference([0, 2, 3, 10], 2));
console.log(findDifference([0, 2, 3, 10], 3));
console.log(findDifference([0, 2, 3, 10], 4));
console.log(findDifference([0, 2, 3, 10], 7));
console.log(findDifference([0, 2, 3, 10], 8));
console.log(findDifference([0, 2, 3, 10], 9));
console.log(findDifference([0, 2, 3, 10], 10));