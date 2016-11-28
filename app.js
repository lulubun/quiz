var state = {
  questionArray: [],
  currentQuestion: 0,
  numRight: 0,
};

state.questionArray = [{
    question: "Question 1: What is the name of the town the Gilmore Girls live in?",
    choices: ["Gotham", "Hartford", "Stars Hollow", "Chilton"],
    correctAnswer: 2
  }, {
    question: "Question 2: What industry does Richard Gilmore work for?",
    choices: ["newspapers", "shipping", "rubber duck production", "insurance"],
    correctAnswer: 3,
  }, {
  	question: "Question 3: At the end of Gilmore Girls, who does Rory end up with?",
  	choices: ["Obama", "Logan", "Jess", "Dean"],
  	correctAnswer: 0,
  },{
  	question: "Question 4: Which two characters are played by the same actress?",
  	choices: ["Sasha and Sookie", "Michel and Liz", "Anna and Sasha", "Lane and Liz"],
  	correctAnswer: 2,
  },{
  	question: 'Question 5: Complete this sentence "Oy with the _____ already!"',
  	choices: ["running", "poodles", "coffee", "noise"],
  	correctAnswer: 1,
  }];

function displayQuestion() {
  $(".question").text(state.questionArray[state.currentQuestion].question);
  $("#a").text("yo mama");
  $("#b").text(state.questionArray[state.currentQuestion].choices[1]);
  $("#c").text(state.questionArray[state.currentQuestion].choices[2]);
  $("#d").text(state.questionArray[state.currentQuestion].choices[3]);
};

$(document).ready(function() {
  displayQuestion();
});