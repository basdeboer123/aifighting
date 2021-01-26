# aifighting - A Neural Network powered game

This project consists of a game that is playable with your body.
We used Blaze Pose for the recognition of body parts, so that the character
in the game can be controlled with your head and body movement.


## Table of Contents

- [Features](#features)
- [How to play](#how_to_play)
- [table of content](#table_of_content)
- [Support](#support)


## Features

This game is created using JavaScript, the script for Blaze Pose is also in JavaScript.
We used HTML and CSS for the lay-out and features(moving obstacles, enemy) in the game.


## how_to_play

To play the game the user first has to give permission for the camera to be on. When the play button
is pressed the game will automatically start. To jump over obstacles the player needs to put his/her head up.
To dive under obstacles the player needs to put his/her left hand in sight of the camera. The player needs to put his/her right hand up to shoot the enemy when he is coming towards you.

When obstacles or enemies are touched the game is over...


## table_of_content

The game consists out of the following files:
- introduction.html -> starting page, with explanation of the game
- index2.html -> file for linking game and Blaze Pose together
- posescript2.js -> Blaze Pose(On-device Real-time Body Pose tracking)
- script.js -> the JavaScript game(includes possible actions and death-checks)
- style.css -> style and lay-out of the game


## Support

Found a bug? Got a question? Please report it using Github
[issues](https://github.com/basdeboer123/aifighting/issues)!
