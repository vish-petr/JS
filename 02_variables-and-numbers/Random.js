let n = -3;
let m = -10;

let min = Math.min(n, m);
let max = Math.max(n, m);

let range = Math.abs(m - n);

let number = Math.floor(Math.random() * (range + 1)) + min;
if (number === max) {
  number = --max;
}


let odd = number + (number % 2) + 1;
if (number % 2 === 1) {
  odd = number;
}
console.log(odd);

