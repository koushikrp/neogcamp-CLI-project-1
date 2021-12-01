// Author: Koushik.
// Title: How well do you know India
var readlineSync = require("readline-sync");
var score = 0;
var answerSheet = [
	{
		question: "1. What is India's official name?\n",
		answer: "Bharat",
	},
	{
		question: "2. What is the National Currency of India?\n",
		answer: "Rupee",
	},
	{
		question: "3. Out of the Seven Wonders of the world, which one is present in India?\n",
		answer: "Taj Mahal",
	},
	{
		question: "4. What is the National Animal of India?\n",
		answer: "Tiger",
	},
	{
		question: "5. What is the National Bird of India?\n",
		answer: "Peacock",
	},
];

var highestScores = [
	{
		name: "Kanishk",
		marks: 4,
	},
	{
		name: "Singh",
		marks: 3,
	},
];

function play(curQuestion, reqAnswer) {
	givenAnswer = readlineSync.question(curQuestion);
	if (givenAnswer.toLowerCase() === reqAnswer.toLowerCase()) {
		console.log("You are CORRECT! Well done.");
		score++;
	} else {
		console.log("Oops..you are Wrong.");
	}
	console.log("------------------");
	console.log("Your Current Score is: " + score);
	console.log("------------------");
}

// Welcome the User
userName = readlineSync.question("Give me your Name:\n");
console.log("Welcome", userName.toUpperCase(), ". Let me test your knowledge about India\nLets go..\n");

//Ask Questions
for (let i = 0; i < answerSheet.length; i++) {
	curProblem = answerSheet[i];
	play(curProblem.question, curProblem.answer);
}

//print current Leaderboard
console.log("LEADERBOARD:");
for (let i = 0; i < highestScores.length; i++) {
	console.log(highestScores[i].name, " : ", highestScores[i].marks);
}
console.log("-------------------");

//Give the Result
console.log("-------------------");
console.log("Your Final Score is: ", score, " out of 5");
console.log("-------------------");

//Update final scores
var isHighest = false;
for (let i = 0; i < highestScores.length; i++) {
	if (score > highestScores[i].marks) {
		isHighest = true;
		break;
	}
}

if (isHighest) {
	console.log("Congrats on getting a Great score.\nWe will include you in the Leaderboard.");
} else {
	console.log("You did OK. Better luck next time!");
}
