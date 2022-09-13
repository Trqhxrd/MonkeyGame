export class Texture {
    constructor(src) {
        this.loaded = false
        this.src = src
        this.img = new Image()
        this.img.src = src
        this.img.onload = () => this.loaded = true
    }

    render(context, x, y, width, height) {
        if (!this.loaded) return
        context.drawImage(this.img, x, y, width, height)
    }
}