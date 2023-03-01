// n! means n × (n − 1) × ... × 3 × 2 × 1

// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits in the number 100!

let i = BigInt(1)
let r = 0;

for(let n = BigInt(100);n > 0;n--) {
  i*=n;
}

for(n=0;n<String(i).length;n++) {
  r+=Number(String(i)[n])
}
console.log(r)


