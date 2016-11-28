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
  $("#a").text(state.questionArray[state.currentQuestion].choices[0]);
  $("#b").text(state.questionArray[state.currentQuestion].choices[1]);
  $("#c").text(state.questionArray[state.currentQuestion].choices[2]);
  $("#d").text(state.questionArray[state.currentQuestion].choices[3]);
};

function checkAnswer() {
  $('.numAns').text(state.currentQuestion+1);
  if ($('input[name=choice]:checked', '#quiz').val()==state.questionArray[state.currentQuestion].correctAnswer) {
    state.numRight+=1;
    $('.commentary').text("Correct!");
    $('.numRight').text(state.numRight);
  }
  else {
    $('.commentary').text("Nope!")

  };
};

function nextQuestion() {
  state.currentQuestion+=1;
  displayQuestion();
}

$(document).ready(function() {
  displayQuestion();

$('form').on('click', '.firstButton', function(event) {
  event.preventDefault();
  checkAnswer();
  state.currentQuestion++;
  if (state.currentQuestion==state.questionArray.length) {
    $(this).css('display', 'none');
    return;
  }
  $(this).toggleClass("firstButton", false);
  $(this).toggleClass("secondButton", true);
  $(this).text('Next');    
  });

  $("form").on("click", ".secondButton", function(event) {
    event.preventDefault();
    displayQuestion();
    $(this).toggleClass("firstButton", true);
    $(this).text("Submit Answer");
    $(this).toggleClass("secondButton", false);
    $('.commentary').text('');
    $("input:checked").removeAttr("checked");
  });

});

$('.secondButton').click(function(event) {
  console.log("secondButton")
  nextQuestion();
});