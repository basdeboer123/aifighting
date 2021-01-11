var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
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
        if(counter/100 > 2 && counter/100 < 5){
            block.style.animation = "block 3.9s infinite linear";
        }
        else if(counter/100 > 4 && counter/100 < 7){
            block.style.animation = "block 3.8s infinite linear";
        }
        else if(counter/100 > 6 && counter/100 < 9){
            block.style.animation = "block 3.7s infinite linear";
        }
        else if(counter/100 > 8 && counter/100 < 11){
            block.style.animation = "block 3.6s infinite linear";
        }
        else if(counter/100 > 10 && counter/100 < 13){
            block.style.animation = "block 3.5s infinite linear";
        }
        else if(counter/100 > 12 && counter/100 < 15){
            block.style.animation = "block 3.4s infinite linear";
        }
        else if(counter/100 > 14 && counter/100 < 17){
            block.style.animation = "block 3.3s infinite linear";
        }
        else if(counter/100 > 16 && counter/100 < 19){
            block.style.animation = "block 3.2s infinite linear";
        }
        else if(counter/100 > 18 && counter/100 < 21){
            block.style.animation = "block 3.1s infinite linear";
        }
        else if(counter/100 > 20 && counter/100 < 23){
            block.style.animation = "block 3s infinite linear";
        }
        else if(counter/100 > 22 && counter/100 < 25){
            block.style.animation = "block 2.9s infinite linear";
        }
        else if(counter/100 > 24 && counter/100 < 27){
            block.style.animation = "block 2.8s infinite linear";
        }
        else if(counter/100 > 26 && counter/100 < 29){
            block.style.animation = "block 2.7s infinite linear";
        }
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);
