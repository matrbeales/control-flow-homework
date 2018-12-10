alert("Welcome to Mat's calculator");

var calculatorType = prompt("Which type of calculator would you like to use? (a)dvanced or (b)asic").toLowerCase();

if(calculatorType == "a") {
  var advancedCalculation = prompt("Advanced calculator. Do you want to (p)ower or (s)quare root a number?").toLowerCase();
} else {
  var basicCalculation = prompt("Basic calculator. Do you want to do (a)ddition, (s)ubtraction, (m)ultiplication or (d)ivision").toLowerCase();
}

// Basic

// Addition
if(basicCalculation == "a") {
  var additionNumberOne = prompt("Enter a number");
  var additionNumberTwo = prompt("Enter a number to add to this");
  alert(parseInt(additionNumberOne) + parseInt(additionNumberTwo));
}

// Subtraction
if(basicCalculation == "s") {
  var subtractionNumberOne = prompt("Enter a number");
  var subtractionNumberTwo = prompt("Enter a number to subtract this");
  alert(parseInt(subtractionNumberOne) - parseInt(subtractionNumberTwo));
}

// Multiplication
if(basicCalculation == "m") {
  var multiplicationNumberOne = prompt("Enter a number");
  var multiplicationNumberTwo = prompt("Enter a number to multiply this by");
  alert(multiplicationNumberOne * multiplicationNumberTwo);
}

// Division
if(basicCalculation == "d") {
  var divisionNumberOne = prompt("Enter a number");
  var divisionNumberTwo = prompt("Enter a number to divide this by");
  alert(divisionNumberOne / divisionNumberTwo);
}



// Advanced

// Power

if(advancedCalculation == "p") {
  var numberToPower = prompt("Enter a number to apply a power to");
  var powerValue = prompt("Enter the value of the power")
  var powerAnswer = Math.pow (numberToPower, powerValue);
  alert(powerAnswer);
}

// Square Root

if(advancedCalculation == "s") {
  var numberToSquareRoot = prompt("Enter a number to square root");
  var squareRoot = Math.sqrt(numberToSquareRoot)
  alert(squareRoot);
}
