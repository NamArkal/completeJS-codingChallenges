/*****************************
* CODING CHALLENGE 3

John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*****************************/

function tipCalc(billAmount){
	if(billAmount < 50)
		return (0.2 * billAmount);
	else if(billAmount >= 50 && billAmount <= 200)
		return (0.15 * billAmount);
	else
		return (0.1 * billAmount);
}

function totalBill(billAmount){
	return (billAmount + tipCalc(billAmount));
}

var tips = [tipCalc(124), tipCalc(48), tipCalc(268)];
console.log(tips);

var totalPaid = [totalBill(124), totalBill(48), totalBill(268)];
console.log(totalPaid);