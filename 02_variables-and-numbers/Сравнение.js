let a = 13.123456789;
let b = 2.123;
let n = 5;

let aComp = Math.floor(
	a % 1 * Math.pow(10, n)
);
console.log(aComp);

console.log(aComp); 

let bComp = Math.floor(
	b % 1 * Math.pow(10, n)
);

console.log(bComp);

console.log(aComp > bComp);
console.log(aComp < bComp);
console.log(aComp >= bComp);
console.log(aComp <= bComp);
console.log(aComp === bComp);
console.log(aComp !== bComp);

