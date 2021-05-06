let arr = [];
let n = -10;
let m = -5;
let count = 70;
let min = Math.min(n, m);
let max = Math.max(n, m);
let range = Math.abs(max - min);


for (let i = 0; i < count; ++i) {
  arr.push( Math.floor(Math.random() * (range + 1)) + min);
} 
console.log(arr);
