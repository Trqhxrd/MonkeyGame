const handlers: KeyHandler[] = []

export function addKeyHandler(handler: KeyHandler) {
    handlers.push(handler)
}

export function handleKeyDown(e: KeyboardEvent) {
    handlers.forEach(h => h.handleKey(e))
}

export interface KeyHandler {
    handleKey(e: KeyboardEvent): void
}
