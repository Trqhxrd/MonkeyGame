window.onload = function () {
    let canvas = document.getElementById("canvas")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    let context = canvas.getContext("2d")
    let img = new Image()
    img.src = "./assets/Monkey.png"
    context.fillStyle = "red"
    context.fillRect(0, 0, canvas.width , canvas.height)
    img.onload = function () {

        context.imageSmoothingEnabled = false
        context.drawImage(img, 0, 0, 256, 256)

    }

}

