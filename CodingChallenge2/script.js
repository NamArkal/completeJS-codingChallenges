/*****************************
* CODING CHALLENGE 2

John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*****************************/

var avgJohh = (98 + 134 + 105) / 3;
var avgMike = (97 + 134 + 105) / 3;
var avgMary = (98 + 134 + 105) / 3;

if(avgMary === avgJohh && avgJohh === avgMike){
	console.log('all scores equal', avgJohh, avgMike, avgMary);
} else if (avgJohh >= avgMike && avgJohh >= avgMary){
	if(avgJohh === avgMike)
		console.log('John\'s team has a score ' + avgJohh + ' equal to Mike\'s ' + avgMike + ' and higher than Mary\'s ' + avgMary);
	else if(avgJohh === avgMary)
		console.log('John\'s team has a score ' + avgJohh + ' equal to Mary\'s ' + avgMary + ' and higher than Mike\'s ' + avgMike);
	else
		console.log('John\'s team has a higher score ' + avgJohh + ' than Mike\'s ' + avgMike + ' and Mary\'s ' + avgMary);
} else if(avgMike > avgJohh && avgMike >= avgMary){
	if(avgMike === avgMary)
		console.log('Mike\'s team has a score ' + avgMike + ' equal to Mary\'s ' + avgMary + ' and higher than John\'s ' + avgJohh);
	else
		console.log('Mike\'s team has a higher score ' + avgMike + ' than John\'s ' + avgJohh + ' and Mary\'s ' + avgMary);
} else if(avgMary > avgJohh && avgMary > avgMike){
	console.log('Mary\'s team has a higher score ' + avgMary + ' than John\'s ' + avgJohh + ' and Mike\'s ' + avgMike);
}