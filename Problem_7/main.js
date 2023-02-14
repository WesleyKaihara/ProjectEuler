// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10001st prime number?

function isPrime(n) {
  if (n <= 1) return
  for (let k = 2; k <= Math.sqrt(k); k++) {
    if (n % k === 0) return
  }
  return true
}

let count = 0
let i = 2
while (count < 10001) {
  if (isPrime(i)) {
    count++
  }
  i++
}
console.log(i-1)
