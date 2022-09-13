import {Grid} from "./grid.js";
import {Monkey} from "./monkey.js";

let canvas
let context
let grid
let monkey
let handler

window.onload = function () {
    canvas = document.getElementById("canvas")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    context = canvas.getContext("2d")
    context.imageSmoothingEnabled = false

    

    monkey = new Monkey(0,0)
    grid = new Grid(10, 10)
    setInterval(loop, 50)
}

function loop() {
    context.fillStyle = "#000033"
    context.fillRect(0, 0, canvas.width, canvas.height)
    grid.render(context)
    monkey.render(context)
}