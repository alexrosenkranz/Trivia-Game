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

  // This will be filled in during New Game function and emptied out throughout the game
  var questions = {

  };

  var questionInfo = {
    q1: {
      question: "What was the 1st video ever played on MTV?",
      answer: 'Video Killed The Radio Star',
      choices: ['Video Killed The Radio Star', 'Rock The Casbah', 'Billie Jean', 'Controversy'],
    },
    q2: {
      question: "What's the highest selling album of the 1980's in the US?",
      answer: '"Thriller" by Michael Jackson',
      choices: ['"Thriller" by Michael Jackson', '"Born In The USA" by Bruce Springsteen','"Purple Rain" by Prince','"Make It Big" by Wham!'],
    },
    q3: {
      question: "What was the title of Kayne West's debut album release in 2004?",
      answer: 'The College Dropout',
      choices: ['The College Dropout','Graduation','808s and Heartbreaks','The Life of Pablo','My Dark Twisted Fantasy','Yeezus','Late Registration'],
    },
    q4: {
      question: "Who is the most hated Canadian artist?",
      answer: 'Nickleback',
      choices: ['Nickleback','Bryan Adams','Drake','Justin Bieber','Avril Lavigne', 'Sum 41'],
    },
    q5: {
      question: "After Ian Curtis passed away in 1980, the remaining members of Joy Division went on to form this band.",
      answer: 'New Order',
      choices: ['New Order','The Talking Heads','Metallica','Bow Wow Wow','The Psychedlic Furs'],
    },
  };




  // Timer Stuff
  var questionTimer = {
    //Time Per Question
    time: 15,
    reset: function(t) {
      questionTimer.time = t;
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
      questionTimer.reset(5)
      $('.answers').html('<h2>Incorrect! The answer is ' + activeQuestion.answer + ' </h2>');
      setTimeout(game, 5000);
    },
  };

  function gameOver() {
    if (Object.keys(questions).length === 0) {
      questionTimer.stopTimer();
      $('.game').hide();
      $('.results').show();
      $('.correct').html(correct);
      $('.wrong').html(wrong);
      activeQuestion = false;
    };
  };

  function answerCheck() {
    if (answer == activeQuestion.answer && questionTimer.time > 0) {
      correct++;
      questionTimer.reset(5);
      $('.answers').html('<h2>Correct! The answer is ' + activeQuestion.answer + ' </h2>');
      setTimeout(game, 5000);   
    }
      
    if (answer != activeQuestion.answer){
      questionTimer.timeUp();
    }
  }


  function game(){
    gameOver();

    if (Object.keys(questions).length > 0) {
      // Get Question
      var keys = Object.keys(questions);
      var objIndex = keys[ keys.length * Math.random() << 0];
      activeQuestion = questions[objIndex];
      randomize();
      // Delete question so it can't be pulled again
      delete questions[objIndex];
      // Empty out answer area from previous question
      $('.answers').empty();
      // Stop and Reset timer incase it was running
      questionTimer.stopTimer();
      questionTimer.reset(15);
      setTimeout(questionTimer.timeUp, 1000*15);
      // Start Timer
      questionTimer.countDown();

      // Place question information into .game area
      $('.question').html(activeQuestion.question);
      // Reset counter
      i=0;
      //Create buttons for possible answers
      $(activeQuestion.choices).each(function() {
      $('.answers').append('<button class="btn btn-lg option text-center">' + activeQuestion.choices[i] + '</button>');
      i++;
      });
    }; 
    $('.option').on('click', function(){
        answer = $(this).html();
        answerCheck();
      });

    
  };


  

   
 

  // New Game Function
    // Resets score to zero
    // Sets new time countdown
  $('.start').on('click',function(){
    $('.results').hide();
    questions = questionInfo;

    correct = 0;
    wrong = 0;
    game();
    $('.game').show();
  });
    
  

    
    

 //Randomize order of possible answers
  function randomize() {
    activeQuestion.choices.sort(function() { 
      return 0.5 - Math.random(); 
    });
  };


  // Set event listeners for buttons on each question
    // Only allow one answer to be selected (radio buttons, no checkboxes)


  // Run function after time runs out that shows results of game
    // tell user if the questions was answered correctly 
    // assign button to restart game


});