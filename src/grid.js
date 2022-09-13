import {Tile} from "./tile.js";

export class Grid {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.tiles = [[]]
        for (let x = 0; x < width; x++) {
            this.tiles[x] = []
            for (let y = 0; y < height; y++) {
                this.tiles[x][y] = new Tile(x, y, 0)
            }
        }
    }

    render(context) {
        this.tiles.forEach(col => col.forEach(t => t.render(context)))
    }
}