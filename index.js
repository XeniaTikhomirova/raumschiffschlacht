// Buttons for Play
let KEY_S = false;
let KEY_UP = false;
let KEY_DOWN = false;
let KEY_Rightwards = false;
let KEY_Leftwards = false;

let canvas;
let ctx;
let backgroundImage = new Image();

let rocket = {
   x: 20,
   y: 200,
   width: 150,
   height: 80,
   src: 'img/rocket.png'
};

let shoots = [];
let ufos = [];