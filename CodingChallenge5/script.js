/*****************************
* CODING CHALLENGE 5

Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*****************************/

var johnBills = {
	billsArr: [124, 48, 258, 180, 42],
	tips: [],
	finalBills: [],
	tipCalc: function(){
		for (var i=0; i<this.billsArr.length; i++){
			if (this.billsArr[i] < 50)
				this.tips[i] = 0.2 * this.billsArr[i];
			else if (this.billsArr[i] >= 50 && this.billsArr[i] <= 200)
				this.tips[i] = 0.15 * this.billsArr[i];
			else
				this.tips[i] = 0.1 * this.billsArr[i];

			this.finalBills[i] = this.tips[i] + this.billsArr[i];
		}
	}
};

johnBills.tipCalc();
console.log(johnBills);

var markBills = {
	billsArr: [77, 375, 110, 45],
	tips: [],
	finalBills: [],
	tipCalc: function(){
		for (var i=0; i<this.billsArr.length; i++){
			if (this.billsArr[i] < 100)
				this.tips[i] = 0.2 * this.billsArr[i];
			else if (this.billsArr[i] >= 100 && this.billsArr[i] <= 300)
				this.tips[i] = 0.1 * this.billsArr[i];
			else
				this.tips[i] = 0.25 * this.billsArr[i];

			this.finalBills[i] = this.tips[i] + this.billsArr[i];
		}
	}
};

markBills.tipCalc();
console.log(markBills);

function calcAvgTips(inputArr){
	var sum = 0;
	for (var i=0; i<inputArr.length; i++)
		sum += inputArr[i];

	return sum / inputArr.length;
}

var tipAvgJohn = calcAvgTips(johnBills.tips);
var tipAvgMark = calcAvgTips(markBills.tips);

console.log(tipAvgJohn, tipAvgMark);

if(tipAvgJohn>tipAvgMark)
	console.log('John\'s average is greater');
else if(tipAvgMark>tipAvgJohn)
	console.log('Mark\'s average is greater');
else
	console.log('Both have same average');