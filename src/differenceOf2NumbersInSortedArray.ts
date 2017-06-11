// The video for this file:
// https://youtu.be/199B6ZWAZ7I

export function findDifference(array: number[], diff: number): [number, number] {
  if (array.length < 2){
    return null;
  }

  let left = 0;
  let right = 1;
  do {
    const actualDiff = array[right] - array[left];
    if (actualDiff === diff){
      return [array[left], array[right]];
    }
    if (actualDiff < diff){
      right++;
    }else if (actualDiff > diff) {
      left++;
    }

    if (left >= right){
      right++;
    }
  }while(right<array.length);

  return null;
}

const arr = [1,2,3,4,5,15,24,40,100];
const delta = 25;
console.log(findDifference(arr, delta));