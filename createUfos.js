
   function createUfos() {
      let ufo = {
         x: 1500,
         y: Math.random() * 450,
         width: 150,
         height: 80,
         src: 'img/ufo.png', 
         img: new Image()
      };
      ufo.img.src = ufo.src;
      ufos.push(ufo);
   };


