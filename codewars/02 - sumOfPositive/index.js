// https://www.codewars.com/kata/5715eaedb436cf5606000381

const arr = [1,-4,7,12];

function positiveSum(arr) {
  var sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i]
    }
  }
  return sum
}

console.log(positiveSum(arr));