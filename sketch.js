function setup() {
  createCanvas(450, 450);
}

function draw() {
  background(0);

  translate(200, 200);
  angleMode(DEGREES);
  rotate(-90);

  var hr = hour();
  var mn = minute();
  var sc = second();

  document.getElementById("time").innerHTML = hr + ":" + mn + ":" + sc;

  strokeWeight(8);
  stroke("red");
  noFill();
  var end = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, end);

  stroke("green");
  var end2 = map(hr, 0, 12, 0, 360);
  arc(0, 0, 280, 280, 0, end2);

  stroke("blue");
  var end3 = map(mn, 0, 60, 0, 360);
  arc(0, 0, 260, 260, 0, end3);
  push();
  rotate(end);
  stroke("red");
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(end2);
  stroke("green");
  line(0, 0, 50, 0);
  pop();

  push();
  rotate(end3);
  stroke("blue");
  line(0, 0, 75, 0);
  pop();

  stroke("black");
  line(0, 0, 0, 0);

  stroke("red");
  textSize(16);
}
