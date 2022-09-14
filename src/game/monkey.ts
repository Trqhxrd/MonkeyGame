import {texture, Texture} from "../utils/texture";
import {Direction} from "../utils/direction";
import {TILE_SIZE} from "./tile";
import {addKeyHandler, KeyHandler} from "../utils/keyhandler";

export const MONKEY_TEXTURES: Map<Direction, Texture> = new Map<Direction, Texture>([
    [Direction.UP, texture("./assets/monkey_back.png")],
    [Direction.DOWN, texture("./assets/monkey_front.png")],
    [Direction.LEFT, texture("./assets/monkey_left.png")],
    [Direction.RIGHT, texture("./assets/monkey_right.png")]
])

export class Monkey implements KeyHandler {
    x: number
    y: number
    direction: Direction

    constructor(x: number, y: number, direction: Direction = Direction.DOWN) {
        this.x = x
        this.y = y
        this.direction = direction
        addKeyHandler(this)
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

    move(x: number, y: number) {
        this.x += x
        this.y += y
    }

    set(x: number, y: number) {
        this.x = x
        this.y = y
    }

    handleKey(e: KeyboardEvent): void {
        switch (e.key) {
            case "w":
            case "ArrowUp":
                this.direction = Direction.UP
                this.move(0, -1)
                break
            case "s":
            case "ArrowDown":
                this.direction = Direction.DOWN
                this.move(0, 1)
                break
            case "a":
            case "ArrowLeft":
                this.direction = Direction.LEFT
                this.move(-1, 0)
                break
            case "d":
            case "ArrowRight":
                this.direction = Direction.RIGHT
                this.move(1, 0)
                break
            default:
                console.log(e)
                break
        }
    }
}