const sentence = 'I am a dog Woof';
const chars = Array.from(sentence);
console.log(chars);
function flip(arr, from, to) {
    while (from < to) {
        const temp = arr[from];
        arr[from] = arr[to];
        arr[to] = temp;
        from++;
        to--;
    }
}
flip(chars, 0, chars.length - 1);
console.log(chars);
let wordStart = 0;
let wordEnd = 0;
while (wordEnd <= chars.length) {
    if (wordEnd === chars.length || chars[wordEnd] === ' ') {
        flip(chars, wordStart, wordEnd - 1);
        wordStart = wordEnd + 1;
        wordEnd = wordStart;
    }
    wordEnd++;
}
console.log(chars);
