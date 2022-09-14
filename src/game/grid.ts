import {texture, Texture} from "../utils/texture";

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
                this.tiles[x][y] = new Tile(this, x, y, 0, "./assets/grass.png")
            }
        }
    }

    render(context: CanvasRenderingContext2D) {
        this.tiles.flatMap(t => t).forEach(t => t.render(context))
    }
}

export const TILE_SIZE = 48

export class Tile {
    readonly grid
    x: number;
    y: number;
    height: number;
    texture: Texture

    constructor(grid: Grid, x: number, y: number, height: number, textureSrc: string) {
        this.grid = grid
        this.x = x
        this.y = y
        this.height = height
        this.texture = texture(textureSrc)
    }

    render(context: CanvasRenderingContext2D) {
        this.texture.render(context, this.x * TILE_SIZE, this.y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
    }
}
