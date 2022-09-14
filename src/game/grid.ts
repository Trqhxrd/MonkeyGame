import {Tile} from "./tile";

export class Grid {
    readonly width: number
    readonly height: number
    readonly tiles: Tile[][] = []

    constructor(width: number, height: number) {
        this.width = width
        this.height = height
        for (let x = 0; x < width; x++) {
            this.tiles.push([])
            for (let y = 0; y < height; y++) {
                this.tiles[x][y] = new Tile(x, y, 0, "./assets/grass.png")
            }
        }
    }

    render(context: CanvasRenderingContext2D) {
        this.tiles.flatMap(t => t).forEach(t => t.render(context))
    }
}
