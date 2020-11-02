$(document).ready(function(event) {
    // event.preventDefault();

    playerOne.name = $(prompt("Player one, please enter your name:")).val();
    playerTwo.name = $(prompt("Player two, please enter your name:")).val();
    $(".roll").click(function(){
      game(playerOne, playerTwo);
        $(".hold").show();
    });
    
});
    
    let playerOne = new Player("");
    let playerTwo = new Player("");

    function Player(name) {
      this.name = name;
      this.score = 0;
    }
    
    function game(playerOne, playerTwo) {
      
      while (playerOne.score < 100 && playerTwo.score < 100) {
        playerOne.turn(); 
        console.log(playerOne.score);
        playerTwo.turn();
      }
      if (playerOne.score >= 100) {
        console.log("Congrats " + playerOne.name + "!")
      }
      else {
        console.log("Congrats " + playerTwo.name + "!");
      }
    }

    Player.prototype.roll = function() {
      return Math.floor((Math.random() * 6) + 1);
      alert(Math.floor((Math.random() * 6) + 1))
     }

    Player.prototype.turn = function() {
      // let choices = ["roll", "hold"];
      this.turnScore = 0;
      let answer;
      do {
        answer = prompt("Type yes to roll and no to hold");
        this.turnScore += this.roll();
       } while(answer === "yes" || answer === "YES" || answer === "Yes") 
        alert(this.turnScore);
        this.score += this.turnScore;
        prompt("Next player's turn! Type 'yes' to roll or click 'cancel' to hold")
      }
      console.log(playerOne.score, playerTwo.score);

      
    //   if 
    //   choose roll or hold
    //   if roll ..roll then repeat...
      
    //   while (($(".roll").clicked)) {
    //     this.turnScore += this.roll();
    //   }
    //   this.score += this.turnScore;
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