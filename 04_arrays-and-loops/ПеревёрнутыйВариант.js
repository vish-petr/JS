let str = 'й-77 попугаЙ';
let strReversed = [];
for(let i = str.length - 1; i >= 0; --i) {
  strReversed.push(str[i]);
}
console.log(strReversed.join(''));