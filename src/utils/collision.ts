import {GameObject} from "./gameobject";
import {Monkey} from "../game/monkey";
import {Tile} from "../game/grid";

export interface CollisionHandler<T1 extends GameObject, T2 extends GameObject> {

    checkType(obj: GameObject, other: GameObject): boolean

    onCollide(obj: T1, other: T2, state: boolean): void

    collides(obj: T1, other: T2): boolean
}

export class MonkeyTileCollision implements CollisionHandler<Monkey, Tile> {

    checkType(obj: GameObject, other: GameObject): boolean {
        return (obj instanceof Monkey && other instanceof Tile) || (obj instanceof Tile && other instanceof Monkey);
    }


    onCollide(obj: Monkey, other: Tile, state: boolean): void {
    }

    collides(obj: Monkey, other: Tile): boolean {
        return false;
    }
}

const handlers: CollisionHandler<any, any>[] = []

export function addCollisionHandler(handler: CollisionHandler<any, any>) {
    handlers.push(handler)
}

export function handleCollision(obj: GameObject, other: GameObject): boolean {
    let relevant = handlers.filter(h => h.checkType(obj, other))
    if (relevant.length == 0) throw new Error(`No relevant handlers for ${typeof obj} and ${typeof other}.`)
    let collides = relevant[0].collides(obj, other)
    relevant[0].onCollide(obj, other, collides)
    return collides
}
