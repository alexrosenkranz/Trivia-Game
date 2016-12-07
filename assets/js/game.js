$(document).ready(function() {

  // Collect Questions and Answers

    // Show only New Game info on page load
  $('.game').hide();
  $('.results').hide();
  // Create HTML for game

  // Set Variables
  
  var correct;
  var wrong;
  var answer;
  var counter;
  var count;
  var i = 0;

  var activeQuestion = {
    question: "",
    answer: '',
    choices: [],
  }

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
      $('.timeLeft').html(questionTimer.time);
      questionTimer.time--;
    },
    countDown: function(){
      counter = setInterval(questionTimer.count,1000);
    },
    stopTimer: function(){
      clearInterval(counter);
    },
    timeUp: function(){
      wrong++;
      questionTimer.stopTimer();
      questionTimer.reset();
    },
  };

  function getActiveQuestion(){
    var keys = Object.keys(questions);
    var objIndex = keys[ keys.length * Math.random() << 0];
    activeQuestion = questions[objIndex];
    delete questions[objIndex];
    console.log(activeQuestion); 
    console.log(questions);
   
  }


  

    //Randomize order of possible answers
  function randomize(questionChoices) {
    activeQuestion.choices.sort(function() { 
      return 0.5 - Math.random(); 
    });
  };
 

  // New Game Function
    // Resets score to zero
    // Sets new time countdown
  $('.start').on('click',function(){
    questionTimer.countDown();
    getActiveQuestion();
    $('.game').show();
    $('.question').html(activeQuestion.question);

    $(activeQuestion.choices).each(function() {
      $('.answers').append('<button class="btn btn-lg options">' + activeQuestion.choices[i] + '</button>');
      i++;
    });

    $('.options').on('click', function(){
      answer = $(this).html();
      questionTimer.stopTimer();
      if (answer == activeQuestion.answer && questionTimer > 0) {
      correct++;
      setTimeout(getActiveQuestion, 4000);
      
    }
    else {
      setTimeout(getActiveQuestion, 4000);
    }
    });

    i=0;

    
    


  });

  // Set event listeners for buttons on each question
    // Only allow one answer to be selected (radio buttons, no checkboxes)


  // Run function after time runs out that shows results of game
    // tell user if the questions was answered correctly 
    // assign button to restart game


});