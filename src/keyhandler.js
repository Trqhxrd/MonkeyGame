export class KeyHandler {
    constructor() {
        this.handlers = []
        window.onkeydown = (e) => {
            this.handlers.forEach(h => h(e))
        }
    }
}