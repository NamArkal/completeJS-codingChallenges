/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function() {
	function Question(number, ques, answers, correct){
	this.ques = ques;
	this.number = number;
	this.answers = answers;
	this.correct = correct;
}

var q1 = new Question(1, 'Are dogs better than babies?', ['Yes', 'No', 'Maybe', 'I am not a dog person'], 0);
var q2 = new Question(2, 'The best season of the year is?', ['Summer', 'Winter', 'Spring', 'Fall'], 2);
var q3 = new Question(3, 'When did India gain independance?', [1210, 1947, 1948, 1949], 1);

Question.prototype.printQues = function() {
	console.log(this.number + '. ' + this.ques);
	for (var i=0; i<this.answers.length; i++)
		console.log(i + ': ' + this.answers[i]);
};

Question.prototype.isAnsCorrect = function(corrAns) {
	if (corrAns === this.correct)
		console.log('The answer is correct! Score is: ' + currScore(true));
	else
		console.log('Wrong answer. Score is: ' + currScore(false));
	console.log('--------------------');
};

var questions = [q1, q2, q3];

function updateScore(){
	var score = 0;
	return function (correct) {
		if (correct)
			score++;
		return score;
	}
}

var currScore = updateScore();

function nextQuestion(){
	var chooseQues = Math.floor(Math.random() * questions.length);
	questions[chooseQues].printQues();
	var userAns = prompt('Please select the correct answer');

	if(userAns !== 'exit'){
		questions[chooseQues].isAnsCorrect(parseInt(userAns));
		nextQuestion();
	}
}

nextQuestion();

})();






