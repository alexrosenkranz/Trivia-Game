$(document).ready(function() {

  // Collect Questions and Answers

    // Show only New Game info on page load
  $('.game').hide();
  $('.results').hide();
  // Create HTML for game

  // Set Variables
  
  var correct;
  var wrong;
  var answers = [];
  var counter;
  var count;

  // Questions 
    // Possible Answers
    // Correct Answer
  var questions = {
    q1: {
      question: "How many letters are in the Greek alphabet (alpha,beta,gamma,etc)",
      answer: 24,
      choices: [48, 21, 32, 24],
    },
    q2: {
      question: "What's the highest selling album of the 1980's in the US?",
      answer: '"Thriller" by Michael Jackson',
      choices: ['"Thriller" by Michael Jackson', '"Born In The USA" by Bruce Springsteen','"Purple Rain" by Prince','"Make It Big" by Wham!'],
    },
  };



  // Timer Stuff
  var questionTimer = {
    //Time Per Question
    time: 20,
    reset: function() {
      questionTimer.time = 20;
      $('.timeLeft').html(questionTimer.time);
    },
    count: function() {
      questionTimer.time--;
      $('.timeLeft').html(questionTimer.time);
    },
    countDown: function(){
      counter = setInterval(questionTimer.count(),1000);
    },
    stopTimer: function(){
      clearInterval(counter)
    },

  };



      

  // New Game Function
    // Resets score to zero
    // Sets new time countdown


  // Set event listeners for buttons on each question
    // Only allow one answer to be selected (radio buttons, no checkboxes)


  // Run function after time runs out that shows results of game
    // tell user if the questions was answered correctly 
    // assign button to restart game


});