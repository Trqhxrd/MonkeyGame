import {Monkey} from "./monkey.js"

window.onload = function () {
    let canvas = document.getElementById("canvas")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    let context = canvas.getContext("2d")
    context.fillStyle = "#000033"
    context.fillRect(0, 0, canvas.width, canvas.height)
let monkeys = []
    for (let i = 0; i < 1000; i++) {
        let monkey = new Monkey(context,5*i,0)
        monkeys.push(monkey)
        monkey.draw()
    }
}