import "./models/canvas.js";
import "./models/block.js";

let canvas = new Canvas(document.getElementById("canvas"), 30, 15);
canvas.add(new Block(null, 0, 0, 0));

console.log("Hello Monkey!");
