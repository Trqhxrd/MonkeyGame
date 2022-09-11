export class Monkey{
    constructor(context,x,y) {
        this.context = context
        this.x = x
        this.y = y
        this.img = new Image ()
        this.img.src = "./assets/Monkey.png"

    }
    draw(){
        let self = this
        let img = new Image()
        img.src = "./assets/Monkey.png"
        img.onload = function () {

            self.context.imageSmoothingEnabled = false
            self.context.drawImage(img, self.x, self.y, 64, 64)

        }
    }
}
