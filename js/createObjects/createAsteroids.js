let asteroid; 
let asteroids =[];

function createAsteroids() {
   asteroid = {
      x: Math.random() * 1250,
      y: -85,
      width: 150,
      height: 80,
      src: '../img/asteroid.png', 
      img: new Image()
   };
   asteroid.img.src = asteroid.src;
   asteroids.push(asteroid);
};