// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

const n = [0,3,3,5,4,4,3,5,5,4,3,6,6,8,8,7,7,9,8,8]
const d = [0,3,6,6,5,5,5,7,6,6]
let l = 1

for (let i = 1; i <= 1000; i++) {
  let cn = Math.trunc(i/100)
  let dz = Math.trunc((i-cn*100)/10)
  let und = i-cn*100-dz*10

  // 100 a 999
  if (i > 99) {
    l+=n[cn]+7
    if (i%100!==0) {
      l+=3
    }
  }

  // 20-99
  if (dz > 1) {
    l+=d[dz]
    if (und!== 0) {
      l+=n[und]
    }
  }

  // 11-19
  if (dz === 1) {
    l+=n[dz*10+und]
  }

  // 1-10
  if (dz===0 && und!== 0 || i===1000) {
    l += n[und]
  }
}

console.log(l)
