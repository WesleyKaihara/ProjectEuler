// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

let res = 20;
for (let i = 20 - 1; i > 1; i--) {
  if (res % i !== 0) {
    res += 20;
    i = 20
  }
}
console.log(res);
