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
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 4s infinite linear";
    }else{
        counter++;
        if(counter/100 > 5){
            block.style.animation = "block 3.5s infinite linear";
        }
        else if(counter/100 > 10){
            block.style.animation = "block 3s infinite linear";
        }
        else if(counter/100 > 15){
            block.style.animation = "block 2.5s infinite linear";
        }
        else if(counter/100 > 20){
            block.style.animation = "block 2s infinite linear";
        }
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);
