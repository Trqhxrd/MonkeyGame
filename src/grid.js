import {Tile} from "./tile.js";
import {TILE_SIZE} from "./constants.js"

export class Grid {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.tiles = [[]]
        for (let x = 0; x < width; x++) {
            this.tiles[x] = []
            for (let y = 0; y < height; y++) {
                this.tiles[x][y] = new Tile(x, y, 0, "blue")
            }
        }
    }

    render(context) {
        this.tiles.forEach(col =>
            col.forEach(t => {
                context.fillStyle = t.color
                context.fillRect(t.x * TILE_SIZE, t.y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
            })
        )
    }
}