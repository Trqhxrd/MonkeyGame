export class Texture {
    readonly src: string
    readonly img: HTMLImageElement

    constructor(src: string) {
        block++
        this.src = src
        this.img = new Image()
        this.img.onload = () => block--
        this.img.src = src
        textures.set(this.src, this)
    }

    render(context: CanvasRenderingContext2D, x: number, y: number, w: number, h: number) {
        if (block != 0) return
        context.drawImage(this.img, x, y, w, h)
    }
}

const textures: Map<string, Texture> = new Map()
let block = 0

export function texture(src: string): Texture {
    if (!textures.has(src)) {
        let texture = new Texture(src)
        textures.set(src, texture)
        return texture
    } else return textures.get(src) as Texture
}
