const objects: GameObject[] = []

export function getGameObjects(x: number, y: number): GameObject[] {
    return objects.filter(obj => obj.x === x && obj.y === y)
}

export function addGameObject(obj: GameObject) {
    objects.push(obj)
}

export interface GameObject {
    x: number
    y: number

    render(context: CanvasRenderingContext2D): void

    collide(other: GameObject): boolean
}

export interface Movable extends GameObject {
    set(x: number, y: number): void

    move(x: number, y: number): boolean
}
