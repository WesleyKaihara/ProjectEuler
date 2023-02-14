// The sum of the squares of the first ten natural numbers is,

// The square of the sum of the first ten natural numbers is,

// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

let s = 0
let q = 0

for(let i = 1; i <= 100; i++) {
    s+=Math.pow(i,2)
    q+=i
}

console.log(Math.pow(q,2) - s)