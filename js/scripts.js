var userMessage = prompt("Say something!");
console.log(userMessage);

var capitalizeFirstLast = function(input) {
  var firstLast = input.charAt(0) + input.charAt(input.length-1);
  console.log(firstLast);

  var firstLastInCaps = firstLast.toUpperCase();
  console.log(firstLastInCaps);

  return firstLastInCaps;
};

var reverseFirstLast = function(letterPair) {
  var lastFirst = letterPair.slice(-1) + letterPair.slice(0,1);

  console.log(lastFirst);

  return lastFirst;
};

var joinStrings = function(userMessage) {
  var letterPair = capitalizeFirstLast(userMessage);

  var joinedStrings = userMessage + reverseFirstLast(letterPair);
  console.log(joinedStrings);
  return joinedStrings;
};

var final = function(four) {
  var middleLetter= four.charAt(parseInt(four.length/2));
  
  console.log(middleLetter + joinStrings(four));

  return middleLetter;
};

final(userMessage);
