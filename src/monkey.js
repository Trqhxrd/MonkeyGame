import {TILE_SIZE} from "./constants.js"

export class Monkey {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.img = new Image()
        this.img.src = "./assets/monkey.png"
    }

    render(context) {
        let img = new Image()
        img.src = "./assets/monkey.png"
        context.imageSmoothingEnabled = false
        context.drawImage(img, this.x * TILE_SIZE, this.y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
    }

    move(xDiff, yDiff) {
        this.x += xDiff
        this.y += yDiff
    }
}
