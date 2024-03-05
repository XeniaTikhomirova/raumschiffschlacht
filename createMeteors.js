let meteor; 
function createMeteors() {
   meteor = {
      x: 1500,
      y: Math.random() * 450,
      width: 150,
      height: 80,
      src: 'img/meteorite.png', 
      img: new Image()
   };
   meteor.img.src = meteor.src;
   meteors.push(meteor);
};