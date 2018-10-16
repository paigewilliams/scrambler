//prompt the use to enter a sentance, then store sentance and print to console//
var userMessage = prompt("Say something!");
console.log(userMessage);

//Create a function that will take the first and last letter of the sentance, capitalize them and return this as a new string//
var capitalizeFirstLast = function(input) {
  var firstLast = input.charAt(0) + input.charAt(input.length-1);
  console.log(firstLast);

  var firstLastInCaps = firstLast.toUpperCase();
  console.log(firstLastInCaps);

  return firstLastInCaps;
};

//Create a function that will reverse the order of these two letters and return the result//
var reverseFirstLast = function(letterPair) {
  var lastFirst = letterPair.charAt(1) + letterPair.charAt(0);

  console.log(lastFirst);

  return lastFirst;
};

//Create a function that calls the other two functions you've just created and concatenates the new two-letter string together with the original phrase at the end//
var joinStrings = function(userMessage) {
  var letterPair = capitalizeFirstLast(userMessage);

  var joinedStrings = userMessage + reverseFirstLast(letterPair);
  console.log(joinedStrings);
  return joinedStrings;
};
//Create a fourth function the count the numbers of letters in the original sentance, divide it by two (rounding down if necessary) and output the letters at this index. concatenate this letter at the beginning of the original sentance//
var final = function(four) {
  var middleLetter= four.charAt(parseInt(four.length/2));

  console.log(middleLetter + joinStrings(four));

  return middleLetter;
};

final(userMessage);
