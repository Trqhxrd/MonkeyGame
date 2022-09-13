import {TILE_SIZE} from "./constants.js"
import {Texture} from "./texture.js";

export class Monkey {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.tex = new Texture("./assets/monkey_front.png")
    }

    render(context) {
        this.tex.render(context, this.x * TILE_SIZE, this.y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
    }

    move(xDiff, yDiff) {
        this.x += xDiff
        this.y += yDiff
    }
}
