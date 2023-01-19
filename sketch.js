function setup() {
    createCanvas(600, 400);
    colorMode (HSB);
  }
  
  function draw() {
    background(225, 0, 50);

    // drawing the eyes
    ellipse(200,100,50,50);
    ellipse(400,100,50,50);

  // drawing the pupils
    push ();
    fill (0);
    ellipse(200,100,10,10);
    ellipse(400,105,10,10);
    pop ();

    // drawing the nose
   // triangle (300, 100, 290, 200, 310, 200);

   beginShape ();
   vertex (295, 100);
   vertex (280, 200);
   vertex (300, 205);
   vertex (320, 200);
   vertex (305, 100);
   endShape (CLOSE);

   // drawing the mouth
   push ();
   fill (325, 20, 90);
    arc (300,220, 200,40, 0, PI,PIE);
    pop ();
    
    // drawing the eyebrows
    push ();
    strokeWeight (10);
    line (175, 65, 225, 65);
    line (375, 70, 425, 65);
    pop ();
  }