import {texture, Texture} from "./texture";
import {GameObject} from "./gameobject";
import {Direction, directionOffset} from "./direction";

export class Grid {
    readonly width: number
    readonly height: number
    readonly tiles: Tile[][] = []
    readonly objects: GameObject[] = [];

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

    tile(x: number, y: number): Tile {
        return this.tiles[x][y]
    }
}

export const TILE_SIZE = 48

export class Tile extends GameObject {
    height: number;
    texture: Texture

    constructor(grid: Grid, x: number, y: number, height: number, textureSrc: string) {
        super(grid,x,y)
        this.height = height
        this.texture = texture(textureSrc)
    }

    getRelative(dir: Direction): Tile {
        let offset = directionOffset(dir)
        return this.grid.tile(this.x + offset.x, this.y + offset.y)
    }

    tile(): Tile {
        return this;
    }

    render(context: CanvasRenderingContext2D) {
        this.texture.render(context, this.x * TILE_SIZE, this.y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
    }
}
