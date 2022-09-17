import {Utils} from "./utils";

window.onload = function () {
    let canvas = document.getElementById("canvas") as HTMLCanvasElement
    let ctx = canvas.getContext("2d") as CanvasRenderingContext2D
    let texture = new Utils("./assets/monkey_front.png")
    setInterval(() => {
        texture.render(ctx)
    })
}