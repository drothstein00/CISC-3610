var fruit = [
	{name:"Apple", quantity:20, color:"red"},
	{name:"Orange", quantity:10, color:"orange"},
    {name:"Banana", quantity:15, color:"yellow"},
	{name:"Kiwi", quantity:5, color:"green"},
    {name:"Blueberry", quantity:5, color:"blue"},
	{name:"Grapes", quantity:10, color:"purple"}
];

var canvas = document.getElementById("davidscanvas");
var lines = canvas.getContext("2d");

var fruitschart = function () {
    var width = 110;
    var x = canvas.width - width;
    for (var i = 0; i < fruit.length; i++) {
        lines.fillStyle = fruit[i].color;
        lines.fillRect(x, canvas.height - 20 * fruit[i].quantity, width, 400);

        lines.fillStyle = "black";
        lines.font = "bold 21px Arial";
        lines.fillText(fruit[i].name, x, canvas.height - 10);
        lines.fillText(fruit[i].quantity, x, canvas.height - 30);
        lines.stroke();

        x -= 200;
    }
};

fruitschart();