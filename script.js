var character = document.getElementById("character");
var block = document.getElementById("block");
var villain = document.getElementById("villain");
var counter=0;
var countervil=0;
function jump(){
    if(comm == 1){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },900);
}
function jumpdown(){
    if(comm == 1){return}
    character.classList.add("animatedown");
    setTimeout(function(){
        character.classList.remove("animatedown");
    },900);
}
function shoot(){
    weapon.classList.add("animateshoot");
    setTimeout(function(){
        weapon.classList.remove("animateshoot");
    },900);
}
function villainfunc(){
    villain.classList.add("animatevillain");
    setTimeout(function(){
        villain.classList.remove("animatevillain");
    },4000);
}
/*
var checkMonster = setInterval(function() {
    let villainTop = parseInt(window.getComputedStyle(villain).getPropertyValue("top"));
    let kannuRight = parseInt(window.getComputedStyle(weapon).getPropertyValue("left"));
    if(kannuRight<20 && kannuRight>-20 && villainTop>=82){
        waepon.style.animation = "none";
        villan verdwijnt...
    }
    */
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=82){
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 4s infinite linear";
    }else{
        counter++;
        //Values for boundaries can be adjusted to smoothen the gameplay
        if(counter > 800 && counter < 2100){
            block.style.animation = "block 3.5s infinite linear";
        }
        else if(counter > 2099 && counter < 3000){
            block.style.animation = "block 3s infinite linear";
        }
        else if(counter > 2999 && counter < 3900){
            block.style.animation = "block 2.5s infinite linear";
        }
        else if(counter > 3899 && counter < 4750){
            block.style.animation = "block 2s infinite linear";
        }
        else if(counter > 4749 && counter < 6000){
            block.style.animation = "block 1.5s infinite linear";
        };

        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
        //Function for activating villain, change values for quantity
        if(counter/100==10|counter/100==20){
          villainfunc();
        };
    }
}, 10);
