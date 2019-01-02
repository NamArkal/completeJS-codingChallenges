/*****************************
* CODING CHALLENGE 1

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*****************************/

var johnMass = 63.7;
var markMass = 77.8;

var johnHeight = 1.67;
var markHeight = 1.74;

var johnBMI = johnMass / (johnHeight * johnHeight);
var markBMI = markMass / (markHeight * markHeight);

console.log(johnBMI, markBMI);

var markHigherBMI = markBMI > johnBMI;

console.log('Is Mark\'s BMI higher than John\'s?', markHigherBMI);