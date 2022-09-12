export class Tile {
    constructor(x, y, height, color) {
        this.x = x
        this.y = y
        this.height = height
        if ((this.x + this.y) % 2 === 0) this.color = "#007700"
        else this.color = "#009900"
    }
}