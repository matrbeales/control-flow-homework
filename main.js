alert("Welcome to Mat's calculator");

var calculatorType = prompt("Which type of calculator would you like to use? (a)dvanced or (b)asic");

if(calculatorType == "a") {
  var advancedCalculation = prompt("Advanced calculator. Do you want to (p)ower or (s)quare root a number?");
} else {
   var basicCalculation = prompt("Basic calculator. Do you want to do (a)ddition, (s)ubtraction, (m)ultiplication or (division)");
}

// Advanced

if(advancedCalculation == "p" ) {
  var numberToPower = prompt("Enter a number to apply a power to");
} else {
  var numberToSquareRoot = prompt("Enter a number to square root");
}

var squareRoot = Math.sqrt(numberToSquareRoot);

if(numberToPower) {
  var power = prompt("Enter the power value");
} else {
  alert(squareRoot);
}

var powerAnswer = Math.pow(numberToPower, power);

if(power) {
  alert(powerAnswer);
}

// Basic

if(basicCalculation =="a") {
  var firstAdditionNumber = prompt("Enter a number");
}

var secondAdditionNumber = alert("Enter a number to add to this");
