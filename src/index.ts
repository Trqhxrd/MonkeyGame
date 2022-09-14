import {Texture} from "./texture";
import {Grid} from "./grid";
import {Monkey} from "./monkey";

window.onload = () => {
    let texture = new Texture("./assets/monkey_front.png")
    let canvas = document.getElementById("canvas") as HTMLCanvasElement
    let context = canvas.getContext("2d") as CanvasRenderingContext2D

    context.imageSmoothingEnabled = false

    let grid = new Grid(16, 16)
    let monkey = new Monkey(7, 7)

    setInterval(() => {
        grid.render(context)
        monkey.render(context)
    }, 50)
}
