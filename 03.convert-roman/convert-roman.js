/**
 * This function that converts an Arabic number (like 1,2,5) to Roman numbers (like I, II, V)
 *
 * (only handle cases from 1 to 10)
 */

function convert(number) {
  var myArray = [, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  return myArray[number];
}

module.exports = convert;
