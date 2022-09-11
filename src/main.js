import {Monkey} from "./monkey.js"

let monkey
let canvas
let context

window.onload = function () {
    canvas = document.getElementById("canvas")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    context = canvas.getContext("2d")
    monkey = new Monkey(context, 0, 0)
    setInterval(loop, 50)
}

function loop() {
    context.fillStyle = "#000033"
    context.fillRect(0, 0, canvas.width, canvas.height)
    monkey.draw()
}

window.onkeydown = (e) => {
    let x = 0
    let y = 0
    // noinspection FallThroughInSwitchStatementJS
    switch (e.key) {
        case "w":
            y -= 5
        case "s":
            y += 5
        case "a":
            x -= 5
        case "d":
            x += 5
        default:
            break
    }
    monkey.move(x, y)
}