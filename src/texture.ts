export class Texture {
    src: string
    img: HTMLImageElement;

    constructor(src: string) {
        this.src = src
        this.img = new Image()
        this.img.src = src
        textures.set(this.src, this)
    }

    render(context: CanvasRenderingContext2D, x: number, y: number, w: number, h: number) {
        context.drawImage(this.img, x, y, w, h)
    }
}

const textures: Map<string, Texture> = new Map()

export function getTexture(src: string): Texture {
    if (!textures.has(src)) {
        let texture = new Texture(src)
        textures.set(src, texture)
        return texture
    } else return textures.get(src) as Texture
}
