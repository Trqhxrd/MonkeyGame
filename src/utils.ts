import {Attributes} from "./attributes";

export class Utils implements Attributes {
    readonly src: string
    readonly img: HTMLImageElement
    private loaded = false

    constructor(src: string) {
        this.src = src
        this.img = new Image()
        this.img.onload = () => this.loaded = true
        this.img.src = src
    }

    render(context: CanvasRenderingContext2D): void {
        if (!this.loaded) return
        context.drawImage(this.img, 0, 0)
    }
}