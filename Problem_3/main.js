// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

let n = 600851475143
let d = 2

while(n != d) {
  if(n % d == 0) {
    n/=d
  } else {
    d++
  }
}

console.log(d)