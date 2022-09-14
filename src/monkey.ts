import {texture, Texture} from "./texture";
import {Direction} from "./direction";
import {TILE_SIZE} from "./tile";

export const MONKEY_TEXTURES: Map<Direction, Texture> = new Map<Direction, Texture>([
    [Direction.UP, texture("./assets/monkey_back.png")],
    [Direction.DOWN, texture("./assets/monkey_front.png")],
    [Direction.LEFT, texture("./assets/monkey_left.png")],
    [Direction.RIGHT, texture("./assets/monkey_right.png")]
])

export class Monkey {
    x: number
    y: number
    direction: Direction

    constructor(x: number, y: number, direction: Direction = Direction.DOWN) {
        this.x = x
        this.y = y
        this.direction = direction
    }

    render(context: CanvasRenderingContext2D) {
        context.drawImage(
            (MONKEY_TEXTURES.get(this.direction) as Texture).img,
            this.x * TILE_SIZE,
            this.y * TILE_SIZE,
            TILE_SIZE,
            TILE_SIZE
        )
    }
}