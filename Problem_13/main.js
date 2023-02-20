// Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.

const fs = require('fs')
var s = BigInt(0)
fs.readFile(`${__dirname}/data.txt`, 'utf8' , (err, data) => {
  var l = data.split(/\r?\n/);
  l.forEach(function(k){
     s+=BigInt(k)
  })
  console.log(String(s).substr(0,10))
})
