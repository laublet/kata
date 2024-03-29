// `reverse()` is slow but best way overall

// Swap is fastet

function temporarySwap(array) {
  var left = null;
  var right = null;
  var length = array.length;

  for (left = 0, right = length - 1; left < right; left += 1, right -= 1) {
    var temporary = array[left];
    array[left] = array[right];
    array[right] = temporary;
  }
  return array;
}
