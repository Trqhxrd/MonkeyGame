import {texture, Texture} from "../utils/texture";
import {Direction} from "../utils/direction";
import {addKeyHandler, KeyHandler} from "../utils/keyhandler";
import {TILE_SIZE} from "./grid";
import {GameObject, getGameObjects, Movable} from "../utils/gameobject";

export const MONKEY_TEXTURES: Map<Direction, Texture> = new Map<Direction, Texture>([
    [Direction.UP, texture("./assets/monkey_back.png")],
    [Direction.DOWN, texture("./assets/monkey_front.png")],
    [Direction.LEFT, texture("./assets/monkey_left.png")],
    [Direction.RIGHT, texture("./assets/monkey_right.png")]
])

export class Monkey implements KeyHandler, Movable {
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

    move(x: number, y: number): boolean {
        let newX = this.x + x
        let newY = this.y + y
        let objs = getGameObjects(newX, newY)
        // Check if none of the objects collide.
        if (objs.map(obj => this.collide(obj)).filter(b => false).length == 0) {
            this.x = newX
            this.y = newY
            return true
        } else return false
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

    collide(other: GameObject): boolean {
        return false
    }
}