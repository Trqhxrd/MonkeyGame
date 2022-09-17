import {Grid, TILE_SIZE} from "./grid";
import {Monkey} from "./monkey";
import {handleKeyDown} from "./keyhandler";

window.onload = () => {
    let grid = new Grid(20, 16)
    let monkey = new Monkey(grid, 7, 7)

    grid.tile(7, 8).height = 1

    let canvas = document.getElementById("canvas") as HTMLCanvasElement
    canvas.width = grid.width * TILE_SIZE
    canvas.height = grid.height * TILE_SIZE
    let context = canvas.getContext("2d") as CanvasRenderingContext2D
    context.imageSmoothingEnabled = false

    setInterval(() => {
        grid.render(context)
        monkey.render(context)
    }, 50)
}

window.onkeydown = handleKeyDown
