export class KeyHandler {
    constructor() {
        this.handlers = []
        window.onkeydown = this.handle
    }

    handle(e) {
        this.handlers.forEach(h => h(e))
    }
}