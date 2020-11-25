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
    


/* $(".roll").click(function(){
  currentPlayer.roll();
// make new decision
});

 $(".hold").click(function(){  
  currentPlayer.hold();
  // currentPlayer = playerTwo
});
 */
// BUSINESS

Player.prototype.choice = function (){
  $(".hold").show();
  $(".roll").show();
}

Player.prototype.roll = function() {
  let dice = Math.floor((Math.random() * 6) + 1);  
  console.log("dice =" + dice)
  currentPlayer.addToTurnScore(dice);
  currentPlayer.choice();
}

Player.prototype.addToTurnScore = function(amount) {
  this.turnScore += amount;  
  console.log("turnScore =" + this.turnScore)
}

Player.prototype.hold = function() {
  this.addToTotalScore(this.turnScore);  
  currentPlayer.switchPlayer();
  console.log("currentPlayer =" + currentPlayer.name);

  $(".hold").hide();
  $(".roll").hide();
}

Player.prototype.addToTotalScore = function(amount) {
  this.totalScore += amount;
  this.turnScore = 0;
  console.log("totalScore =" + this.totalScore)
  console.log("2turnScore =" + this.turnScore)
}

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

Player.prototype.switchPlayer = function() {
  if(currentPlayer === playerOne) {
      currentPlayer = playerTwo;
  }
  else {
    currentPlayer = playerOne;
    alert(currentPlayer.name + ", its your turn now");
  }
  console.log("2currentPlayer =" + currentPlayer.name)
  return currentPlayer;
  
}

    



    // function game(playerOne, playerTwo) {
      
    //   while (playerOne.score < 100 && playerTwo.score < 100) {
    //     playerOne.turn(); 
    //     console.log(playerOne.score);
    //     playerTwo.turn();
    //   }
    //   if (playerOne.score >= 100) {
    //     console.log("Congrats " + playerOne.name + "!")
    //   }
    //   else {
    //     console.log("Congrats " + playerTwo.name + "!");
    //   }
    // }






    
    

    
   /*    turnScore = 0;
      while  {
        Player.turn();
        turnScore += this.roll();
      } 
      if ($(".hold").clicked) { 
        Player.score += this.score
      }
    
    

    function hold
 */




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


//   // ask: hold or roll ...  (sum of rolls, if one = 0)
//   // this.score += turnScore

// Player.prototype.roll = function() {
//  return Math.floor((Math.random() * 6) + 1);
// }


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