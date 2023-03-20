var canvas = document.getElementById("davidscanvas");
var lines = canvas.getContext("2d");



lines.fillStyle = '#84C1F0';
lines.fillRect(0,0,canvas.width, canvas.height);


lines.fillStyle = "yellow";
lines.lineWidth = 5;
lines.beginPath();
lines.arc(80, 70, 50, 0, 2 * Math.PI);
lines.stroke();
lines.fill();
//sun

var x = 0
for (i = 0; i < 40; i++) {
  lines.fillStyle = "green";
  lines.beginPath();
  lines.lineWidth = 3;
  lines.arc(x, 600, 50, 0,Math.PI, true);
  lines.fill();
  x = x + 40;
}

lines.beginPath();
lines.rect(290, 150, 350, 700);
lines.stroke();
lines.fillStyle = "red";
lines.fillRect(290, 150, 350, 700);
//house


lines.beginPath()
lines.fillStyle = "white";
lines.lineWidth = "4";
lines.fillRect(500, 210, 100, 100);
lines.rect(500, 210, 100, 100);
lines.stroke();
//window

lines.beginPath()
lines.fillStyle = "white";
lines.lineWidth = "4";
lines.fillRect(340, 210, 100, 100);
lines.rect(340, 210, 100, 100);
lines.stroke();
//window

lines.beginPath();
lines.rect(420, 400, 100, 200);
lines.stroke();
lines.fillStyle = "blue";
lines.fillRect(420, 400, 100, 200);
//door

lines.beginPath();
lines.rect(260, 48, 415, 100);
lines.stroke();
lines.fillStyle = "black";
lines.fillRect(260, 48, 415, 100);
//roof

lines.fillStyle = "white";
lines.beginPath();
lines.arc(500, 500, 5, 0, 2 * Math.PI);
lines.stroke();
lines.fill();
//door knob

// text
lines.fillStyle = "Yellow";
lines.font = "30px Arial";
lines.fillText("Everyones Dream House", 300, 28);

