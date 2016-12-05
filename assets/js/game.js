$(document).ready(function() {

  // Code out HTML View for Game
  	//4 Clickable Character Boxes
  		// Each has Name, image, and stats
  	//Space for player character to appear
  	//Space for enemy to appear

  //Create Variables
  	// Characters
      // array of objects
      // each has different properties of health, attack power, counter attack power
  var characters = [ ];
  var playerPicked;
  var enemyPicked;
  
  var i = 0;

  // Active Characters
  var playerActive;
  var playerBaseAttack;
  var enemyActive;


  // Start new game function
  	// Sets all characters to be able to be picked by player with reset stats
  	// Once picked, player character gets put into player area while the rest go into Enemies area
  function newGame() {
    $('.player').empty();
    $('.enemy').empty();
    $('.characterList').empty();
    characters[0] = {
      name: 'Kyle Katarn', 
      health: 170, 
      attack: 16, 
      counter: 11, 
      pic: 'assets/images/kylekatarn.jpg' 
    };
    characters[1] = {
      name: 'Lando Calrissian', 
      health: 220, 
      attack: 10, 
      counter: 18, 
      pic: 'assets/images/lando.jpg' 
    };
    characters[2] = {
      name: 'IG-88', 
      health: 150, 
      attack: 20, 
      counter: 10, 
      pic: 'assets/images/ig88.jpg' };
    characters[3] = {
      name: 'Boba Fett', 
      health: 200, 
      attack: 18, 
      counter: 5, 
      pic: 'assets/images/bobafett.jpg'
    };
    playerPicked = false;
    enemyPicked = true;
    
    $(characters).each(function(){
      $('.characterList').append('<div class="character col-xs-12 col-sm-12 col-md-6"><div class="name"></div><img class="pic"/><div class="stats"></div></div>')

    });

    $('.character').each(function() {
      $(this).attr('data-value',i);
      i++;
    });
    i = 0;
    
    $('.name').each(function() {
      $(this).html(characters[i].name);
      i++;
    });
    i = 0

    $('.pic').each(function(){
      $(this).attr('src', characters[i].pic);
      i++;
    });
    i = 0;
    $('.stats').each(function() {
      $(this).html('Health: ' + characters[i].health + ' Attack: ' + characters[i].attack + ' Counter: ' + characters[i].counter);
      i++;
    });
    i = 0;
    console.log(characters);
    playerPicked = false;
    enemyPicked = true;
  }



  newGame();

  // If there are enemies
    // Player picks Enemy
      // Enemies stats load


  $('.characterList').on('click','.character', function() {
    
    var p;
    console.log('click');

    if ((playerPicked === false) && (enemyPicked)) {
      var playerInfo = $(this).html();
      p = $(this).attr('data-value');
      playerActive = characters[p];
      playerBaseAttack = playerActive.attack;
      characters.splice(p, 1);      
      console.log(playerActive);
      console.log(characters);
      $(this).remove();
      $('.player').html(playerInfo);
      $('.character').each(function() {
        $(this).attr('data-value',i);
        i++;
      });

      $('.player .stats').html('Health: ' + playerActive.health + ' Attack: ' + playerActive.attack + ' Counter: ' + playerActive.counter);
      i = 0;
      playerPicked = true;
      enemyPicked = false;
    }

    else if ((enemyPicked === false) && (playerPicked === true)) {
      var enemyInfo = $(this).html();
      p = $(this).attr('data-value');
      enemyActive = characters[p];
      characters.splice(p,1);
      console.log(enemyActive);
      console.log(characters);
      $(this).remove();
      $('.enemy').html(enemyInfo);
      $('.character').each(function() {
        $(this).attr('data-value',i);
        i++;
      });
      $('.enemy .stats').html('Health: ' + enemyActive.health + ' Attack: ' + enemyActive.attack + ' Counter: ' + enemyActive.counter);

      i = 0;
      enemyPicked = true;
    }
    else if (enemyPicked && playerPicked) {
      return;
    }
  });


  // playerActive & enemyActive

    // Player attacks enemy

  $('.attack').on('click', function() {
    if (enemyActive.health <= 0) {
      $('.enemy').html('<h2>Enemy vanquished, pick a new battle</h2>');
      playerActive.attack = playerBaseAttack;
      enemyPicked = false;
    }

    else if (enemyActive.health > 0 && playerActive.health > 0){
      enemyActive.health = enemyActive.health - playerActive.attack;
      $('.enemy .stats').html('Health: ' + enemyActive.health + ' Attack: ' + enemyActive.attack + ' Counter: ' + enemyActive.counter);
      playerActive.attack = playerActive.attack + playerBaseAttack;

      playerActive.health = playerActive.health - enemyActive.counter;
      $('.player .stats').html('Health: ' + playerActive.health + ' Attack: ' + playerActive.attack + ' Counter: ' + playerActive.counter);

    }

    else if (playerActive.health <= 0) {
      $('.player').html('<h2>You lose! Start a new game. </h2>');
    }

  });


  $('.newGame').on('click', function() {
    newGame();
  });
     // Enemy loses health (health - attack)
      // Enemy counterattacks
      //  Increase player attack stat by base attack power

    // If player health <= 0
      // End game

    // If enemy health <= 0 
      // remove enemy from list of enemies
      // If there are more enemies, repeat pick

    // If no enemies left, player wins and restart game


});