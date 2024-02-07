function createUfos() {
   let ufo = {
      x: 1000,
      //y: 200,
      y: Math.random() * 450,
      width: 150,
      height: 80,
      src: 'img/ufo.png', 
      img: new Image()
      //add random x/y points
   };
   ufo.img.src = ufo.src;
   ufos.push(ufo);
};