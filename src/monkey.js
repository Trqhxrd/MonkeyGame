export class Monkey {
    constructor(context, x, y) {
        this.context = context
        this.x = x
        this.y = y
        this.img = new Image()
        this.img.src = "./assets/Monkey.png"
    }

    draw = () => {
        let img = new Image()
        img.src = "./assets/Monkey.png"
        this.context.imageSmoothingEnabled = false
        this.context.drawImage(img, this.x, this.y, 64, 64)
    }

    move(xDiff, yDiff) {
        this.x += xDiff
        this.y += yDiff
    }
}
