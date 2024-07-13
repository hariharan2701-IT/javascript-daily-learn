// Displaying a multiple choice question
/*
var displayQuestion = function (questionAndAnswer) {
    var options = [ "A", "B", "C", "D", "E" ];
    
    console.log(questionAndAnswer.question);
    
    questionAndAnswer.answers.forEach(
      function (answer, i) {
        console.log(options[i] + " - " + answer);
      }
    );
  };
  
  var question1 = {
    question : "What is the capital of France?",
    answers : [
      "Bordeaux",
      "F",
      "Paris",
      "Brussels"
    ],
    correctAnswer : "Paris"
  };
  
  displayQuestion(question1);
  
  
  
  /* Further Adventures
   *
   * 1) Add two more question objects.
   *
   * 2) Create an array with your question objects.
   *
   * 3) Use forEach to call displayQuestion on
   *    each of your questions.
   *
   * 4) Can you execute a command at the prompt
   *    to display a particular question?
   */

  // Function to display a multiple choice question
var displayQuestion = function (questionAndAnswer) {
  var options = ["A", "B", "C", "D", "E"];

  console.log(questionAndAnswer.question);

  questionAndAnswer.answers.forEach(function (answer, i) {
      console.log(options[i] + " - " + answer);
  });
};

// Question objects
var question1 = {
  question: "What is the capital of France?",
  answers: [
      "Bordeaux",
      "F",
      "Paris",
      "Brussels"
  ],
  correctAnswer: "Paris"
};

var question2 = {
  question: "Who wrote 'To Kill a Mockingbird'?",
  answers: [
      "Mark Twain",
      "Harper Lee",
      "F. Scott Fitzgerald",
      "John Steinbeck"
  ],
  correctAnswer: "Harper Lee"
};

var question3 = {
  question: "What is the largest planet in our solar system?",
  answers: [
      "Earth",
      "Jupiter",
      "Mars",
      "Saturn"
  ],
  correctAnswer: "Jupiter"
};

// Array of question objects
var questions = [question1, question2, question3];

// Display each question using forEach
questions.forEach(function (question, index) {
  console.log("Question " + (index + 1) + ":");
  displayQuestion(question);
  console.log(""); // Adding a blank line for clarity between questions
});
// Example of executing a command at the prompt to display a particular question
// Type the following command in the console:
// displayQuestion(questions[1]);
