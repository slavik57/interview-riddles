// The video for this file:
// https://youtu.be/199B6ZWAZ7I
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findDifference(array, diff) {
    if (array.length < 2) {
        return null;
    }
    let left = 0;
    let right = 1;
    do {
        const actualDiff = array[right] - array[left];
        if (actualDiff === diff) {
            return [array[left], array[right]];
        }
        if (actualDiff < diff) {
            right++;
        }
        else if (actualDiff > diff) {
            left++;
        }
        if (left >= right) {
            right++;
        }
    } while (right < array.length);
    return null;
}
exports.findDifference = findDifference;
const arr = [1, 2, 3, 4, 5, 15, 24, 40, 100];
const delta = 25;
console.log(findDifference(arr, delta));
