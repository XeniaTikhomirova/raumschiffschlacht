// Function to delete objects that have flown off the canvas:

function cleanAll() {
   ufos = cleanObjects(ufos, ufo => ufo.x + ufo.width > 0);
   asteroids = cleanObjects(asteroids, asteroid => asteroid.x + asteroid.width > 0);
   meteors = cleanObjects(meteors, meteor => meteor.x + meteor.width > 0);
   shots = cleanObjects(shoots, shot => shot.x <= canvas.width);
}

function cleanObjects(objects, condition) {
   return objects.filter(condition);
}



