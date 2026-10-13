$(function () {
 // initialize canvas and context when able to
 canvas = document.getElementById("canvas");
 ctx = canvas.getContext("2d");
 window.addEventListener("load", loadJson);


 function setup() {
   if (firstTimeSetup) {
     halleImage = document.getElementById("player");
     projectileImage = document.getElementById("projectile");
     cannonImage = document.getElementById("cannon");
     $(document).on("keydown", handleKeyDown);
     $(document).on("keyup", handleKeyUp);
     firstTimeSetup = false;
     //start game
     setInterval(main, 1000 / frameRate);
   }


   // Create walls - do not delete or modify this code
   createPlatform(-50, -50, canvas.width + 100, 50); // top wall
   createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
   createPlatform(-50, -50, 50, canvas.height + 500); // left wall
   createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall


   //////////////////////////////////
   // ONLY CHANGE BELOW THIS POINT //
   //////////////////////////////////


   // TODO 1 - Enable the Grid
   toggleGrid();
   


   // TODO 2 - Create Platforms
    createPlatform(200, 620, 100, 5, "red")
createPlatform(500, 635, 250, 5, "red");

createPlatform(400, 500, 15, 290);
createPlatform(700, 450, 200, 5, "red");

createPlatform(1000, 500, 15, 290);
createPlatform(200, 400, 50, 50, "red");

createPlatform(500, 0, 15, 200);
createPlatform(1150, 620, 200, 15, "red");

createPlatform(200, 0, 20, 290);
createPlatform(500, 300, 50, 0.5, "red");

createPlatform(1000, 0, 20, 290);
createPlatform(1200, 380, 0.5, 50, "red");


 


   // TODO 3 - Create Collectables
    
createCollectable("steve", 1250, 625);
createCollectable("diamond", 200, 700, 0.5, 0.7);
createCollectable("diamond", 500, 700, 0.5, 0.7);






  
   // TODO 4 - Create collectables
  
createCannon("left", 300, 2000);

createCannon("right", 195, 2000);

createCannon("right", 665, 2000);

createCannon("right", 700, 2000);

createCannon("right", 725, 2000);




  
  
   //////////////////////////////////
   // ONLY CHANGE ABOVE THIS POINT //
   //////////////////////////////////
 }


 registerSetup(setup);
});

