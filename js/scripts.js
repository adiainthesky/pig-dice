function Player(name) {
  this.name = name;
  this.turnScore = 0;
  this.totalScore = 0;
}

let playerOne;
let playerTwo;
let currentPlayer;

$(document).ready(function(event) {
    // event.preventDefault();
    playerOne = new Player(prompt("Player one, please enter your name:"));
    playerTwo = new Player(prompt("Player two, please enter your name:"));
    console.log(playerOne.name);
    console.log(playerTwo.name);   
    currentPlayer = playerOne;
    currentPlayer.turn();
});

Player.prototype.turn = function() {
  alert("Choose to roll or to hold")
  $(".hold").show();
  $(".roll").show();
  $(".roll").click(function(){
    currentPlayer.roll();
  }); 
  $(".hold").click(function(){
    currentPlayer.hold();
  }); 
}

Player.prototype.roll = function() {
  let dice = Math.floor((Math.random() * 6) + 1);  
  console.log("dice =" + dice)
  if(dice === 1) {
    currentPlayer.addToTurnScore(0);
    currentPlayer.switchPlayer();
  }
  else {
    currentPlayer.addToTurnScore(dice);
  }
  currentPlayer.choiceVisible();
}

Player.prototype.addToTurnScore = function(amount) {
  this.turnScore += amount;  
  console.log("turnScore =" + this.turnScore)
}

Player.prototype.choiceVisible = function (){
  $(".hold").show();
  $(".roll").show();
}

Player.prototype.hold = function() {
  this.addToTotalScore(this.turnScore);  
  this.winCheck();
  console.log("currentPlayer =" + currentPlayer.name);
  // $(".hold").hide();
  // $(".roll").hide();
}

Player.prototype.addToTotalScore = function(amount) {
  this.totalScore += amount;
  this.turnScore = 0;
  console.log(playerOne.name + "totalScore =" + playerOne.totalScore)
  console.log(playerTwo.name + "totalScore =" + playerTwo.totalScore)
}

Player.prototype.winCheck = function() {
  if (this.totalScore >= 20) {
    alert("Congrats " + this.name + "!")
    $(".hold").hide();
    $(".roll").hide();}
  else {
    this.choiceVisible();
    currentPlayer.switchPlayer();
  } 
}


Player.prototype.switchPlayer = function() {
  if(currentPlayer === playerOne) {
      currentPlayer = playerTwo;
      alert(currentPlayer.name + ", it's your turn now");
  }
  else {
    currentPlayer = playerOne;
    alert(currentPlayer.name + ", it's your turn now");
  }
  currentPlayer.choiceVisible();
}




    











//   // playerOne.name = $(prompt("Please enter your name:")).val();
//   playerOne.name = prompt("Please enter your name:");
//   $(".roll").click(function(){
//     $(".hold").show();
//     playerOne.turn();
//   });
// });



// function Player(name) {
//   this.name = name;
//   this.score = 0;
// }



// let playerOne = new Player("", 0);
// let playerTwo = new Player("", 0);

// function game(playerOne, playerTwo) {
  
// }


// // Player.prototype.turn = function() {
// //   turnScore = 0
// //     turnScore += this.roll();
// //   this.score += turnScore;
// //   };
// // };

// // Player.prototype.turn = function() {
// //   turnScore = 0;
// //   let rollWasClicked = false
// //   let holdWasClicked = false
// //   $(".roll").click(function () {
// //     rollWasClicked = true;
// //   });
// //   $(".hold").click(function () {
// //     holdWasClicked = true;
// //   });
// //   if (rollWasClicked) {
// //     turnScore += this.roll();
// //     Player.prototype.roll();
// //   } 
// //   if (holdWasClicked) { 
// //     this.score += this.Player.score
// //     console.log(turnScore)
// //   }
// // };




// Player.prototype.turn = function() {

//   turnScore = 0;
//   while ($(".roll").clicked) {
//     Player.turn();
//     turnScore += this.roll();
//   } 
//   if ($(".hold").clicked) { 
//     Player.score += this.score
//   }
//   console.log(playerOne.score)
//   console.log(playerOne.name);  


//   // turnScore = 0;
//   // turnScore += this.roll();
//   // if ($(".roll").clicked) {
//   //   Player.turn();
//   // } 
//   // if ($(".hold").clicked) { 
//   //   Player.score += this.score
//   // }
//   // console.log(playerOne.score)
//   // console.log(playerOne.name);  
// };


// // user interface:
// // ask for user name
// $(document).ready(function() {
//   // event.preventDefault();
//   // playerOne.name = $(prompt("Please enter your name:")).val();
//   playerOne.name = prompt("Please enter your name:");
//   $(".roll").click(function(){
//     $(".hold").show();
//     playerOne.turn();
//   });
// });