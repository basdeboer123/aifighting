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
var gover = new Audio('gameover.wav');

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

var checkMonster = setInterval(function() {
  let villainright = parseInt(window.getComputedStyle(villain).getPropertyValue("right"));
  let kannuright = parseInt(window.getComputedStyle(weapon).getPropertyValue("right"));
  let characterright = parseInt(window.getComputedStyle(character).getPropertyValue("right"));
  if ((villainright != 600) && ((kannuright - villainright) < 0) && (kannuright - villainright) > -80) {
    weapon.classList.remove("animateshoot");
    villain.classList.remove("animatevillain");
    counter2 = counter2 + 100;
  } else if ((villainright != 600) && ((characterright - villainright) < 30)) {
    audioback.pause();
    audioback.currentTime = 0;
    gover.play();
    block.style.animation = "none";
    block2.style.animation = "none";
    alert("Game Over. score: " + Math.floor((counter2 + counter) / 100));
    counter = 0;
    counter2 = 0;
  }
}, 10);
var checkDead = setInterval(function() {
  audioback.play();
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  let blockupperLeft = parseInt(window.getComputedStyle(block2).getPropertyValue("left"));
  if (blockLeft < -15 && blockLeft > -30 && characterTop >= 168) {
    audioback.pause();
    audioback.currentTime = 0;
    gover.play();
    block.style.animation = "none";
    block2.style.animation = "none";
    alert("Game Over. score: " + Math.floor((counter + counter2-250) / 100));
    counter = 0;
    counter2 = 0;
  } else if (blockupperLeft < 8 && blockupperLeft > -20 && characterTop <= 170) {
    audioback.pause();
    audioback.currentTime = 0;
    gover.play();
    block.style.animation = "none";
    block2.style.animation = "none";
    alert("Game Over. score: " + Math.floor((counter2 + counter-250) / 100));
    counter = 0;
    counter2 = 0;

  } else{
        counter++;
        //Values for boundaries can be adjusted to smoothen the gameplay
		if (counter < 250){
			document.getElementById("scoreSpan").innerHTML = 0;
		
			
		}
        else if(counter >= 250 && counter <= 900){
            block.style.animation = "block 4s infinite linear";
            block2.style.animation = "block2 4s 2s infinite linear";
        }
        else if(counter > 900 && counter < 2500){
            block.style.animation = "block 4s infinite linear";
            block2.style.animation = "block2 4s 2s infinite linear";
        }
        else if(counter > 2499 && counter < 3900){
            block.style.animation = "block 2.5s infinite linear";
            block2.style.animation = "block2 2.5s 1s infinite linear";
        }
        else if(counter > 3999 && counter < 4750){
            block.style.animation = "block 2s infinite linear";
            block2.style.animation = "block2 2s 0.5s infinite linear";
        }
        else if(counter > 4749 && counter < 6000){
            block.style.animation = "block 1.5s infinite linear";
            block2.style.animation = "block2 1.5s 0.5s infinite linear";
        };
		if (counter > 250){
			document.getElementById("scoreSpan").innerHTML = Math.floor((counter2+counter-250)/100);
		}
        ;
        //Function for activating villain, change values for quantity
        if(counter == goalspawn){
		  goalspawn = goalspawn + (100* Math.floor(Math.random() * (6 - 3 + 1)) + 3);
          villainfunc();
		console.log(goalspawn);
        };
    }
}, 10);
