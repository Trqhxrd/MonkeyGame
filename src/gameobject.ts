import {Grid, Tile} from "./grid";
import {handleCollision} from "./collision";

export abstract class GameObject {
    readonly grid: Grid
    x: number
    y: number

    protected constructor(grid: Grid, x: number, y: number) {
        this.grid = grid
        this.x = x
        this.y = y
    }


    abstract render(context: CanvasRenderingContext2D): void

    set(x: number, y: number) {
        this.x = x
        this.y = y
    }

    tile(): Tile {
        return this.grid.tile(this.x, this.y)
    }
}

export abstract class Movable extends GameObject {
    protected constructor(grid: Grid, x: number, y: number) {
        super(grid, x, y);
    }

    move(x: number, y: number): boolean {
        let others = this.grid.objects.filter(o => o.x === x && o.y === y)
        let collides = others.map(o => handleCollision(this, o))
        if (collides.filter(b => !b).length == 0) {
            this.set(this.x + x, this.y + y)
            return false
        } else return false
    }
}
