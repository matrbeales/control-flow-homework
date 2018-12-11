alert("Welcome to Mat's calculator");

var calculatorType = prompt("Which type of calculator would you like to use? (a)dvanced, (b)asic or (BMI)").toLowerCase();


if(calculatorType == "a") {
  var advancedCalculation = prompt("Advanced calculator. Do you want to (p)ower or (s)quare root a number?").toLowerCase();
}
if(calculatorType == "b") {
  var basicCalculation = prompt("Basic calculator. Do you want to do (a)ddition, (s)ubtraction, (m)ultiplication or (d)ivision").toLowerCase();
}
if(calculatorType == "bmi") {
  var bmiCalculation = prompt("BMI calculator. Do you want to use (m)etric or (i)mperial").toLowerCase();
}


// Basic

// Addition

if(basicCalculation == "a") {
  addition ();
  function addition (additionNumberOne = parseInt(prompt("Enter a number")), additionNumberTwo = parseInt(prompt("Enter a number to add to this"))) {
    result = additionNumberOne + additionNumberTwo;
    return result;
  }
  alert(result);
}

// subtraction ();

if(basicCalculation == "s") {
  subtraction ();
  function subtraction (subtractionNumberOne = (prompt("Enter a number")), subtractionNumberTwo = (prompt("Enter a number to subtract from this"))) {
    result = subtractionNumberOne - subtractionNumberTwo;
    return result;
  }
  alert(result);
}

// Multiplication

if(basicCalculation == "m") {
  multiplication ();
  function multiplication (multiplicationNumberOne = (prompt("Enter a number")), multiplicationNumberTwo = (prompt("Enter a number to multiply this by"))) {
    result = multiplicationNumberOne * multiplicationNumberTwo;
    return result;
  }
  alert(result);
}

// Division

if(basicCalculation == "d") {
  division ();
  function division (divisionNumberOne = (prompt("Enter a number")), divisionNumberTwo = (prompt("Enter a number to divide this by"))) {
    result = divisionNumberOne / divisionNumberTwo;
    return result;
  }
  alert(result);
}

// Advanced

// Power

if(advancedCalculation == "p") {
  power ();
  function power (numberToPower = (prompt("Enter a number to apply a power to")), powerValue = (prompt("Enter the value of the power"))) {
    result = Math.pow(numberToPower, powerValue);
    return result;
  }
  alert(result);
}

// Square Root

if(advancedCalculation == "s") {
  squareroot ();
  function squareroot (numberToSquareroot = (prompt("Enter a number to squareroot"))) {
    result = Math.sqrt(numberToSquareroot);
    return result;
  }
  alert(result);
}

// BMI Metric

if(bmiCalculation == "m") {
  bmiMetric ();
  function bmiMetric (weightKilos = (prompt("Enter your weight in kilograms")), heightMeters = (prompt("Enter your height in meters"))) {
    result = (weightKilos / (heightMeters*heightMeters));
    return result;
  }
  alert(result);
}

// BMI Imperial

if(bmiCalculation == "i") {
  bmiImperial ();
  function bmiImperial (weightPounds = (prompt("Enter your weight in pounds")), heightInches = (prompt("Enter your height in inches"))) {
    result = (weightPounds / (heightInches*heightInches) * 703);
    return result;
  }
  alert(result);
}
