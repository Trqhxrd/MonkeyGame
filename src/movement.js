export class MovementHandler {
    constructor(monkey) {
        this.monkey = monkey
    }

    onKey(key) {
        switch (key.key){
            case "w":
                this.monkey.move(0,-1)
                break
            case "s":
                this.monkey.move(0,1)
                break
            case "a":
                this.monkey.move(-1,0)
                break
            case "d":
                this.monkey.move(1,0)
                break
        }
    }
}