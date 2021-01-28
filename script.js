//initialize and get variables
var character = document.getElementById("character");
var block = document.getElementById("block");
var block2 = document.getElementById("block2");
var villain = document.getElementById("villain");
var weapon = document.getElementById("weapon");
var counter = 0;
var counter2 = 0;
var countervil = 0;
var goalspawn = 700;
var audioback = new Audio('backgroundmusic.mp3');
var oof = new Audio('oof.wav');
var gover = new Audio('gameover.wav');
var Nose = 0;
sessionStorage.setItem("Nose", 0);

//functions for activating jump, jumpdown, villain and shoot animations
function jump() {
  if (comm == 1) {
    return
  }
  character.classList.add("animate");
  setTimeout(function() {
    character.classList.remove("animate");
  }, 900);
}

function jumpdown() {
  if (comm == 1) {
    return
  }
  character.classList.add("animatedown");
  setTimeout(function() {
    character.classList.remove("animatedown");
  }, 900);
}

function shoot() {
  weapon.classList.add("animateshoot");
  setTimeout(function() {
    weapon.classList.remove("animateshoot");
  }, 900);
}

function villainfunc() {
  villain.classList.add("animatevillain");
  setTimeout(function() {
    villain.classList.remove("animatevillain");
  }, 4000);
}
//function that checks every 10ms if player is by the monster or if the monster is hit by the bullit
//and when hit activates animation, sounds or gameover
var checkMonster = setInterval(function() {
  let villainright = parseInt(window.getComputedStyle(villain).getPropertyValue("right"));
  let kannuright = parseInt(window.getComputedStyle(weapon).getPropertyValue("right"));
  let characterright = parseInt(window.getComputedStyle(character).getPropertyValue("right"));
  if ((villainright != 600) && ((kannuright - villainright) < 0) && (kannuright - villainright) > -80) {
    audioback.pause();
    weapon.classList.remove("animateshoot");
    villain.classList.remove("animatevillain");
    oof.play();
    audioback.play();
    counter2 = counter2 + 100;
  } else if ((villainright != 600) && ((characterright - villainright) < 30)) {
    audioback.pause();
    audioback.currentTime = 0;
    gover.play();
    block.style.animation = "none";
    block2.style.animation = "none";
    alert("Game Over. score: " + Math.floor((counter2 + counter-140) / 100));
    counter = 0;
    counter2 = 0;
    sessionStorage.setItem("Nose", 0);
    Nose = 0;
  }
}, 10);

//function that checks every 10ms if player is by an obstacle
//when obstacle is hit, the game is over
//when obstacle is not hit the score increases
//when score has reached boundary, game speed increases
var checkDead = setInterval(function() {
  audioback.play();
  //get values for location of obstacles and character
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  let blockupperLeft = parseInt(window.getComputedStyle(block2).getPropertyValue("left"));
  //check for lower obstacle
  if (blockLeft < -15 && blockLeft > -30 && characterTop >= 168) {
    audioback.pause();
    audioback.currentTime = 0;
    gover.play();
    block.style.animation = "none";
    block2.style.animation = "none";
    alert("Game Over. score: " + Math.floor((counter + counter2-140) / 100));
    counter = 0;
    counter2 = 0;
  }
  //check for upper obstacle
  else if (blockupperLeft < 8 && blockupperLeft > -20 && characterTop <= 170) {
    audioback.pause();
    audioback.currentTime = 0;
    gover.play();
    block.style.animation = "none";
    block2.style.animation = "none";
    alert("Game Over. score: " + Math.floor((counter2 + counter-140) / 100));
    counter = 0;
    counter2 = 0;
    sessionStorage.setItem("Nose", 0);
    Nose = 0;
  }
  else{
		Nose = sessionStorage.getItem('Nose');
		if (Nose > 0){
      counter++;
  		if (counter < 140){
  			document.getElementById("scoreSpan").innerHTML = 0;
  		}
      //Values for speed increment boundaries can be adjusted to smoothen the gameplay or speed up the gameplay
      else if(counter >= 100 && counter <= 800){
        block.style.animation = "block 4s 4 linear";
        block2.style.animation = "block2 4s 2s 4 linear";
      }
      else if(counter > 800 && counter < 820){
        block.style.animation = "none";
        block2.style.animation = "none";
      }
      else if(counter > 819 && counter < 1750){
        block.style.animation = "block 3.5s 7 linear";
        block2.style.animation = "block2 3.5s 2s 7 linear";
      }
      else if(counter > 1749 && counter < 1770){
        block.style.animation = "none";
        block2.style.animation = "none";
      }
      else if(counter > 1799 && counter < 2600){
        block.style.animation = "block 3s 9 linear";
        block2.style.animation = "block2 3s 1.5s 9 linear";
      }
      else if(counter > 2599 && counter < 2620){
        block.style.animation = "none";
        block2.style.animation = "none";
      }
      else if(counter > 2619){
        block.style.animation = "block 2.5s infinite linear";
        block2.style.animation = "block2 2.5s 1s infinite linear";
      }
  		if (counter > 140){
  			document.getElementById("scoreSpan").innerHTML = Math.floor((counter2+counter-140)/100);
  		};
      //Function for randomly activating villain attack, change values for quantity
      if(counter == goalspawn){
  		  goalspawn = goalspawn + (100* Math.floor(Math.random() * (6 - 3 + 1)) + 3);
        villainfunc();
      };
    }
  else if (Nose == 0){
	  document.getElementById("scoreSpan").innerHTML = 0;
  }
  }
}, 10);
