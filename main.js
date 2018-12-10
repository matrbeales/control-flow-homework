alert("Welcome to Mat's calculator");

var calculatorType = prompt("Which type of calculator would you like to use? (a)dvanced or (b)asic");

if(calculatorType == "a") {
  var advancedCalculation = prompt("Advanced calculator. Do you want to (p)ower or (s)quare root a number?");
} else {
   var basicCalculation = prompt("Basic calculator. Do you want to do (a)ddition, (s)ubtraction, (m)ultiplication or (division)");
}

// Advanced

// Power

if(advancedCalculation == "p") {
  var numberToPower = prompt("Enter a number to apply a power to");
}

var powerValue = prompt("Enter the value of the power")

var powerAnswer = Math.pow (numberToPower, powerValue);

alert(powerAnswer);

// Square Root

if(advancedCalculation == "s") {
  var numberToSquareRoot = prompt("Enter a number to square root");
}

var squareRoot = Math.sqrt(numberToSquareRoot)

if(numberToSquareRoot) {
  alert(squareRoot);
}
