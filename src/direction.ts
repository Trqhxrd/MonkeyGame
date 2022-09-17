export enum Direction {
    UP, DOWN, LEFT, RIGHT
}

export function directionOffset(dir: Direction): any {
    switch (dir) {
        case Direction.UP:
            return {x: 0, y: -1}
        case Direction.DOWN:
            return {x: 0, y: 1}
        case Direction.LEFT:
            return {x: -1, y: 0}
        case Direction.RIGHT:
            return {x: 1, y: 0}
    }
}