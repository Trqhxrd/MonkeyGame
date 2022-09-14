import {Grid} from "./game/grid";
import {Monkey} from "./game/monkey";
import {TILE_SIZE} from "./game/tile";
import {handleKeyDown} from "./utils/keyhandler";

window.onload = () => {
    let grid = new Grid(20, 16)
    let monkey = new Monkey(7, 7)

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
