import {Texture} from "./texture.js";
import {TILE_SIZE} from "./constants.js";

export class Tile {
    constructor(x, y, height) {
        this.x = x
        this.y = y
        this.height = height
        // if ((this.x + this.y) % 2 === 0) this.color = "#007700"
        // else this.color = "#009900"
        this.tex = new Texture("./assets/grass.png")
    }

    render(context) {
        this.tex.render(context, this.x * TILE_SIZE, this.y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
    }
}