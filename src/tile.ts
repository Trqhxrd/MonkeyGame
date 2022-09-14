import {texture, Texture} from "./texture";

export const TILE_SIZE = 30

export class Tile {
    x: number;
    y: number;
    height: number;
    texture: Texture

    constructor(x: number, y: number, height: number, textureSrc: string) {
        this.x = x
        this.y = y
        this.height = height
        this.texture = texture(textureSrc)
    }

    render(context: CanvasRenderingContext2D) {
        this.texture.render(context, this.x * TILE_SIZE, this.y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
    }
}