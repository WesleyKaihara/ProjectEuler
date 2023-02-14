// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

let res = 0

for(let i = 100; i < 999; i++) {
  for(let j = 999; j > 100; j--){
    let m = j*i
    if(m == m.toString().split('').reverse().toString().replace(/,/gi,"") && m > res) {
      res = m
    }
  }
}

console.log(res)