// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

function isPrime(n) {
  if (n <= 1) return
  for (let k = 2; k <= Math.sqrt(n); k++) {
    if (n % k === 0) return
  }
  return true
}

let s = 0
for(let i = 2; i < 2000000; i++) {
  if(isPrime(i)) {
    s+=i
  }
}

console.log(s)